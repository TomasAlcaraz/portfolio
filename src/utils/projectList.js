import vibe from "@/assets/vibe-screen.png";
import chatApp from "@/assets/chatapp-screen.png";
import vibeLogo from "@/assets/vibe-icon.png";
import chatgtpLogo from "@/assets/chatgtp-icon.png";

export const projects = [
  {
    title: "Chapp",
    description:
      "App de chat con inteligencia artificial integrada, puedes elegir entre dos asistentes: uno te respondera normalmente como Chat GTP 3.5, el otro respondera solo en código, así te ahorras el tener que especificarlo.",
    image: chatApp,
    techs: ["OpenAI", "React", "Redux", "Redux Toolkit", "Node.js", "Express"],
    contributions: [
      "Integración de Chat-GTP 3.5",
      "IA que responde solo con código",
      "Agregar distintas IAs a un mismo chat",
      "Login y autetificación con validaciones",
      "Administración, sumar usuarios a un chat",
    ],
    links: {
      github: "https://github.com/TomasAlcaraz/chat-app",
      deploy: "https://chat-7vp2elex8-tomasalcaraz.vercel.app",
    },
    individual: false,
    logo: chatgtpLogo,
  },
  {
    title: "Vibe",
    description:
      "Vibe es un e-commerce de ropa que tiene como objetivo servir a las empresas que buscan publicar sus productos con una interfaz bonita, fácil de usar y cómoda para el administrador. Esta aplicación se realizó como proyecto final para el bootcamp: Soy Henry.",
    image: vibe,
    techs: [
      "React",
      "Redux",
      "Node.js",
      "Sequalize",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "SCRUM",
    ],
    contributions: [
      "Pasarela de pagos con la api de MercadoPago y su integración a un formulario controlado.",
      "Paginado y filtrados en el back, trayéndome directo de la db únicamente los productos necesarios para cada página, con sus respectivos filtros incluidos en cuyo caso los haya.",
      "Guardado de imágenes a través de Cloudinary",
      "Admin Dashboard: control de usuarios, posibilidad de hacer a un usuario admin o banearlo.",
      "Formulario de creación de producto con validaciones, guías visuales para el usuario y adaptabilidad al tipo de producto; por ejemplo los talles en caso de ser zapatillas se vuelven numéricos, en cualquier otro caso son S, M, L, XL, etc...",
      " Implementación de SCRUM: haciendo las user-sory y planificando los sprints en ClickUp.",
    ],
    links: {
      github: "https://github.com/TomasAlcaraz/VIBE",
      deploy: "https://proyecto-final-vibes.vercel.app",
    },
    individual: false,
    logo: vibeLogo,
  },
];
