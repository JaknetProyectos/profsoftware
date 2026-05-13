"use server";

import axios from "axios";

export interface PaymentData {
  amount: number;
  cardData: {
    number: string;
    name: string;
    month: string;
    year: string;
    cvv: string;
  };
  customer: {
    name: string;
    lastname: string;
    email: string;
    telefono: string;
    direccion: string;
    cp: string;
    city: string;
    state: string;
    country: string;
  };
  orderId: string;
}

const OCTANO_BASE_URL = "https://pagos.octanopayments.com/api/v1";

export async function processOctanoPayment(payment: PaymentData) {
  try {
    if (!process.env.OCTANO_USER || !process.env.OCTANO_PASSWORD) {
      throw new Error("Faltan credenciales de Octano en variables de entorno");
    }

    const authResponse = await axios.post(
      `${OCTANO_BASE_URL}/signin`,
      {
        email: process.env.OCTANO_USER,
        password: process.env.OCTANO_PASSWORD,
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      }
    );

    const authToken = authResponse.data?.authToken;

    if (!authToken) {
      throw new Error("No se pudo obtener el token de Octano");
    }

    const config = {
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    };

    const tokenResponse = await axios.post(
      `${OCTANO_BASE_URL}/card/tokenizer`,
      {
        cardData: {
          cardNumber: payment.cardData.number.replace(/\s/g, ""),
          cardholderName: payment.cardData.name,
          expirationYear: payment.cardData.year,
          expirationMonth: payment.cardData.month,
        },
      },
      config
    );

    const cardToken = tokenResponse.data?.cardNumberToken;

    if (!cardToken) {
      throw new Error("No se pudo tokenizar la tarjeta");
    }

    const saleResponse = await axios.post(
      `${OCTANO_BASE_URL}/sale`,
      {
        amount: payment.amount,
        currency: "484", // MXN
        reference: payment.orderId,
        customerInformation: {
          firstName: payment.customer.name,
          lastName: payment.customer.lastname,
          email: payment.customer.email,
          phone1: payment.customer.telefono,
          city: payment.customer.city,
          address1: payment.customer.direccion,
          postalCode: payment.customer.cp,
          state: payment.customer.state,
          country: payment.customer.country,
          ip: "127.0.0.1",
        },
        cardData: {
          cardNumberToken: cardToken,
          cvv: payment.cardData.cvv,
        },
      },
      config
    );

    return saleResponse.data;
  } catch (error: any) {
    const errorDetail = error?.response?.data || error?.message;
    console.error("❌ Error en pasarela Octano:", errorDetail);

    throw new Error(
      error?.response?.data?.message ||
        "Hubo un problema al procesar la transacción con Octano."
    );
  }
}