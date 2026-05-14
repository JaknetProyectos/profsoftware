import {
  FileText,
  ShieldCheck,
  Cloud,
  Users,
  BadgeCheck,
  Rocket,
  Workflow,
  AppWindow,
  Lightbulb,
  Briefcase,
  Building2,
  Crown,
} from "lucide-react";

export const servicesSpanish = [
  {
    id: "essential-launch-guide",
    icon: FileText,
    name: "Guía Esencial de Lanzamiento",
    price: "200.00",
    priceNumber: 200,
    description: [
      "Checklist detallado de aspectos técnicos y de diseño para sitios web o aplicaciones móviles.",
      "Recursos prácticos recomendados para facilitar el proceso.",
      "Consejos clave y mejores prácticas condensados en un PDF de una sola página, fácil de consultar.",
    ]
  },
  {
    id: "express-launch",
    icon: ShieldCheck,
    name: "Lanzamiento Exprés",
    price: "350.00",
    priceNumber: 350,
    description: [
      "Wireframe digital de 1 pantalla, diseñado para visualizar la estructura clave de tu sitio o app.",
      "Lista express con recomendaciones esenciales de contenido para captar la atención de tu audiencia.",
      "Plantilla editable que facilita la organización de secciones y flujo de navegación.",
    ]
  },
  {
    id: "exploratory-session",
    icon: Cloud,
    name: "Sesión Exploratoria",
    price: "480.00",
    priceNumber: 480,
    description: [
      "Asesoría personalizada de 30 minutos enfocada en la estructura de tu sitio web o aplicación móvil.",
      "Revisión general de tu idea o boceto actual para identificar oportunidades de mejora.",
      "Documento PDF con sugerencias clave y recomendaciones prácticas para avanzar con seguridad.",
    ]
  },
  {
    id: "initial-plan",
    icon: Users,
    name: "Plan Inicial",
    price: "900.00",
    priceNumber: 900,
    description: [
      "Asesoría personalizada de 1 hora enfocada en la estructura de tu sitio web o aplicación móvil (sin desarrollo).",
      "Wireframe básico que representa el boceto de 1 pantalla para tu sitio o app.",
      "Checklist detallado con recomendaciones técnicas y de diseño para guiar tus próximos pasos.",
    ]
  },
  {
    id: "digital-validation-pack",
    icon: BadgeCheck,
    name: "Paquete de Validación Digital",
    price: "2,100.00",
    priceNumber: 2100,
    description: [
      "Diseño de una landing page sencilla, responsive y con una sección tipo scroll para presentar tu propuesta de valor.",
      "Prototipo básico de aplicación móvil (diseño visual no funcional) o asesoría personalizada para estructurar tu app.",
      "Soporte limitado por 10 días vía correo electrónico para realizar ajustes menores y garantizar tu satisfacción.",
    ]
  },
  {
    id: "digital-launch-kit",
    icon: Rocket,
    name: "Kit de Lanzamiento Digital",
    price: "3,750.00",
    priceNumber: 3750,
    description: [
      "Desarrollo de una aplicación móvil funcional, diseñada para conectar con tus usuarios.",
      "Diseño y desarrollo de un sitio web atractivo, responsivo y optimizado para tu negocio.",
      "Servicio de mantenimiento y soporte para asegurar que tu software funcione siempre sin contratiempos.",
    ]
  },
  {
    id: "digital-boost-package",
    icon: Workflow,
    name: "Paquete de Impulso Digital",
    price: "5,900.00",
    priceNumber: 5900,
    description: [
      "Desarrollo de una aplicación móvil funcional y atractiva para tus usuarios.",
      "Diseño y desarrollo de un sitio web profesional, responsivo y optimizado para tu negocio.",
      "Servicio completo de mantenimiento y soporte para garantizar el correcto funcionamiento de tu software.",
      "Diseño especializado de Interfaces de Usuario (UI) y experiencia de usuario (UX) para maximizar la usabilidad y satisfacción.",
    ]
  },
  {
    id: "digital-growth-package",
    icon: AppWindow,
    name: "Paquete de Crecimiento Digital",
    price: "7,350.00",
    priceNumber: 7350,
    description: [
      "Desarrollo de una aplicación móvil personalizada y eficiente.",
      "Diseño y desarrollo de 2 sitios web, con enfoque en usabilidad y rendimiento.",
      "Servicio de mantenimiento y soporte continuo para garantizar la estabilidad de tus sistemas.",
      "Integración de APIs y desarrollo de soluciones de software a medida que optimizan tus procesos.",
    ]
  },
  {
    id: "basic-startup-package",
    icon: Lightbulb,
    name: "Paquete Básico para Startups",
    price: "13,750.00",
    priceNumber: 13750,
    description: [
      "Desarrollo de 1 aplicación móvil funcional y adaptable a tus necesidades iniciales.",
      "Diseño y desarrollo de 1 sitio web profesional, optimizado para captar a tus primeros usuarios.",
      "Integración básica de API para conectar tus sistemas de manera eficiente.",
      "Servicio básico de mantenimiento y soporte para asegurar el funcionamiento continuo de tus plataformas.",
      "Desarrollo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) esenciales para ofrecer una navegación intuitiva y atractiva.",
    ]
  },
  {
    id: "starter-business-package",
    icon: Briefcase,
    name: "Paquete Empresarial Inicial",
    price: "22,500.00",
    priceNumber: 22500,
    description: [
      "Desarrollo de 1 aplicación móvil personalizada para mejorar la interacción con tus clientes.",
      "Diseño y desarrollo de 2 sitios web profesionales, incluyendo funcionalidades clave para tu negocio.",
      "Desarrollo básico de Sistemas de Gestión Empresarial (ERP) para optimizar procesos internos.",
      "Integración estándar de API para conectar tus sistemas de forma eficiente.",
      "Mantenimiento y soporte técnico continuo durante 6 meses para asegurar el óptimo funcionamiento de tus plataformas.",
      "Diseño especializado de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) para tu aplicación móvil, garantizando una experiencia intuitiva y atractiva.",
    ]
  },
  {
    id: "advanced-package-smes",
    icon: Building2,
    name: "Paquete Avanzado para PYMES",
    price: "34,000.00",
    priceNumber: 34000,
    description: [
      "Desarrollo de 2 aplicaciones móviles adaptadas a las necesidades específicas de tu negocio.",
      "Diseño y desarrollo de 2 sitios web profesionales con funcionalidades avanzadas.",
      "Desarrollo y personalización de Sistemas de Gestión Empresarial (ERP) para optimizar y automatizar procesos clave.",
      "Integración avanzada de API para conectar y sincronizar múltiples plataformas de manera eficiente.",
      "Servicio de mantenimiento y soporte técnico durante 1 año, garantizando estabilidad y actualización constante.",
      "Desarrollo completo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) para asegurar una interacción intuitiva y atractiva en todas las plataformas.",
    ]
  },
  {
    id: "comprehensive-premium-package",
    icon: Crown,
    name: "Paquete Premium Integral",
    price: "55,000.00",
    priceNumber: 55000,
    description: [
      "Desarrollo de 3 aplicaciones móviles con funcionalidades avanzadas, enfocadas en la mejor experiencia y rendimiento.",
      "Diseño y desarrollo de 3 sitios web personalizados, optimizados para usabilidad y alta performance.",
      "Desarrollo de Sistemas de Gestión Empresarial (ERP) con características adicionales que se adaptan a los procesos específicos de tu empresa.",
      "Integración personalizada de API para conectar sistemas y potenciar la automatización.",
      "Servicio completo de mantenimiento y soporte de software durante 1 año, garantizando continuidad y actualizaciones oportunas.",
      "Desarrollo avanzado de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) para maximizar la interacción y satisfacción del usuario.",
    ]
  },
];

export const servicesEnglish = [
  {
    id: "essential-launch-guide",
    icon: FileText,
    name: "Essential Launch Guide",
    price: "200.00",
    priceNumber: 200,
    description: [
      "Detailed checklist of technical and design aspects for websites or mobile applications.",
      "Recommended practical resources to make the process easier.",
      "Key tips and best practices condensed into a one-page PDF, easy to consult.",
    ],
  },
  {
    id: "express-launch",
    icon: ShieldCheck,
    name: "Express Launch",
    price: "350.00",
    priceNumber: 350,
    description: [
      "1-screen digital wireframe, designed to visualize the key structure of your website or app.",
      "Express list with essential content recommendations to capture your audience’s attention.",
      "Editable template that makes it easy to organize sections and the navigation flow.",
    ],
  },
  {
    id: "exploratory-session",
    icon: Cloud,
    name: "Exploratory Session",
    price: "480.00",
    priceNumber: 480,
    description: [
      "Personalized 30-minute consulting session focused on the structure of your website or mobile application.",
      "General review of your idea or current sketch to identify improvement opportunities.",
      "PDF document with key suggestions and practical recommendations to move forward with confidence.",
    ],
  },
  {
    id: "initial-plan",
    icon: Users,
    name: "Initial Plan",
    price: "900.00",
    priceNumber: 900,
    description: [
      "Personalized 1-hour consulting session focused on the structure of your website or mobile application (without development).",
      "Basic wireframe representing a 1-screen sketch for your website or app.",
      "Detailed checklist with technical and design recommendations to guide your next steps.",
    ],
  },
  {
    id: "digital-validation-pack",
    icon: BadgeCheck,
    name: "Digital Validation Pack",
    price: "2,100.00",
    priceNumber: 2100,
    description: [
      "Design of a simple, responsive landing page with a scroll-style section to present your value proposition.",
      "Basic mobile app prototype (non-functional visual design) or personalized consulting to structure your app.",
      "Limited email support for 10 days to make minor adjustments and ensure your satisfaction.",
    ],
  },
  {
    id: "digital-launch-kit",
    icon: Rocket,
    name: "Digital Launch Kit",
    price: "3,750.00",
    priceNumber: 3750,
    description: [
      "Development of a functional mobile application designed to connect with your users.",
      "Design and development of an attractive, responsive, and business-optimized website.",
      "Maintenance and support service to ensure your software always works without setbacks.",
    ],
  },
  {
    id: "digital-boost-package",
    icon: Workflow,
    name: "Digital Boost Package",
    price: "5,900.00",
    priceNumber: 5900,
    description: [
      "Development of a functional and attractive mobile application for your users.",
      "Design and development of a professional, responsive, and business-optimized website.",
      "Complete maintenance and support service to guarantee the proper functioning of your software.",
      "Specialized User Interface (UI) and User Experience (UX) design to maximize usability and satisfaction.",
    ],
  },
  {
    id: "digital-growth-package",
    icon: AppWindow,
    name: "Digital Growth Package",
    price: "7,350.00",
    priceNumber: 7350,
    description: [
      "Development of a customized and efficient mobile application.",
      "Design and development of 2 websites, with a focus on usability and performance.",
      "Maintenance and continuous support service to ensure the stability of your systems.",
      "API integration and custom software development solutions that optimize your processes.",
    ],
  },
  {
    id: "basic-startup-package",
    icon: Lightbulb,
    name: "Basic Startup Package",
    price: "13,750.00",
    priceNumber: 13750,
    description: [
      "Development of 1 functional mobile application adapted to your initial needs.",
      "Design and development of 1 professional website, optimized to attract your first users.",
      "Basic API integration to connect your systems efficiently.",
      "Basic maintenance and support service to ensure the continuous operation of your platforms.",
      "Essential User Interface (UI) and User Experience (UX) development to provide an intuitive and attractive navigation experience.",
    ],
  },
  {
    id: "starter-business-package",
    icon: Briefcase,
    name: "Starter Business Package",
    price: "22,500.00",
    priceNumber: 22500,
    description: [
      "Development of 1 customized mobile application to improve interaction with your customers.",
      "Design and development of 2 professional websites, including key functionalities for your business.",
      "Basic Enterprise Resource Planning (ERP) system development to optimize internal processes.",
      "Standard API integration to connect your systems efficiently.",
      "Continuous maintenance and technical support for 6 months to ensure the optimal performance of your platforms.",
      "Specialized User Interface (UI) and User Experience (UX) design for your mobile application, guaranteeing an intuitive and attractive experience.",
    ],
  },
  {
    id: "advanced-package-smes",
    icon: Building2,
    name: "Advanced Package for SMEs",
    price: "34,000.00",
    priceNumber: 34000,
    description: [
      "Development of 2 mobile applications adapted to your business’s specific needs.",
      "Design and development of 2 professional websites with advanced functionalities.",
      "Development and customization of Enterprise Resource Planning (ERP) systems to optimize and automate key processes.",
      "Advanced API integration to connect and synchronize multiple platforms efficiently.",
      "Maintenance and technical support service for 1 year, guaranteeing stability and constant updates.",
      "Full User Interface (UI) and User Experience (UX) development to ensure intuitive and attractive interaction across all platforms.",
    ],
  },
  {
    id: "comprehensive-premium-package",
    icon: Crown,
    name: "Comprehensive Premium Package",
    price: "55,000.00",
    priceNumber: 55000,
    description: [
      "Development of 3 mobile applications with advanced functionalities, focused on the best experience and performance.",
      "Design and development of 3 customized websites, optimized for usability and high performance.",
      "Development of Enterprise Resource Planning (ERP) systems with additional features adapted to your company’s specific processes.",
      "Custom API integration to connect systems and boost automation.",
      "Complete software maintenance and support service for 1 year, ensuring continuity and timely updates.",
      "Advanced User Interface (UI) and User Experience (UX) development to maximize user interaction and satisfaction.",
    ],
  },
];