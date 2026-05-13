"use client";

import { useLocale } from "next-intl";
import { useCallback, useState } from "react";


type Primitive = string | number | boolean | null | undefined;

export interface ContactResponse {
    success: boolean;
    error?: string;
    data?: unknown;
}

export interface UseContactOptions<TData = Record<string, Primitive>> {
    endpoint?: string;
    method?: "POST" | "PUT" | "PATCH";
    defaultData?: Partial<TData>;
    headers?: HeadersInit;
    onSuccess?: (response: unknown) => void;
    onError?: (error: string) => void;
}

export function useContact<TData extends Record<string, any> = Record<string, Primitive>>(
    options: UseContactOptions<TData> = {}
) {
    const {
        endpoint,
        method = "POST",
        defaultData,
        headers,
        onSuccess,
        onError,
    } = options;

    const locale = useLocale();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const send = useCallback(
        async (data: TData): Promise<ContactResponse> => {
            setIsLoading(true);
            setError(null);
            setSuccess(false);

            try {
                const finalData = {
                    ...defaultData,
                    ...data,
                };

                const response = await fetch(
                    endpoint ?? `/${locale ?? "es"}/api/contacto`,
                    {
                        method,
                        headers: {
                            "Content-Type": "application/json",
                            ...headers,
                        },
                        body: JSON.stringify(finalData),
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result?.error ||
                        result?.message ||
                        "Error al enviar el formulario"
                    );
                }

                setSuccess(true);

                onSuccess?.(result);

                return {
                    success: true,
                    data: result,
                };
            } catch (err) {
                const message =
                    err instanceof Error
                        ? err.message
                        : "Error desconocido";

                setError(message);

                onError?.(message);

                return {
                    success: false,
                    error: message,
                };
            } finally {
                setIsLoading(false);
            }
        },
        [
            defaultData,
            endpoint,
            method,
            headers,
            locale,
            onSuccess,
            onError,
        ]
    );

    const reset = useCallback(() => {
        setError(null);
        setSuccess(false);
    }, []);

    return {
        send,
        reset,
        isLoading,
        error,
        success,
    };
}