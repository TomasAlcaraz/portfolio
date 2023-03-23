import henryC from "@/assets/henry-certificate.png";
import oracleC from "@/assets/oracle-certificate.png";
import apC from "@/assets/argentina-programa-certificate.png";

export const formations = [
  {
    title: "Full Stack Developer",
    company: "SoyHenry",
    tag: "soyhenry",
    techs: [
      "React",
      "JavaScript",
      "GitFlow",
      "MongoDB",
      "Scrum",
      "Node.js",
      "Redux",
      "Express",
      "PostgreSQL",
      "Styled Components",
    ],
    certificate: {
      image: henryC,
      link: "https://certificates.soyhenry.com/new-cert?id=5beac18c714682b7ada55e1d655fb8fde06800e27e13c589f95db5d92a9786d3",
    },
    hours: "800",
    description: `Aprendí desde algoritmos/estructuras de datos, pasando por JavaScript avanzado, especializándome en React, hasta la gestión de ORM, para conectarlas con BD, desarrolle aplicaciones de punta a punta con un equipo de trabajo, con seguimiento, fecha límite, y metodologías ágiles en nuestro caso principalmente manejado por mí, y liderando el proyecto, y otro proyecto individual donde realicé una versión simple de lo que acabo de describir pero codeada enteramente por mí.`,
    additional: [
      "Proyecto grupal donde se usó:  REACT, REDUX, EXPRESS, POSTGRESQL, SEQUALIZE, CLOUDINARY, MERCADOPAGO, DEPLOY, BORRADO LÓGICO, AUTH0.",
      " Proyecto individual donde usé: REACT, REDUX, EXPRESS, POSTGRESQL.",
      "Modulo I:  Lógica, JavaScript avanzado, estructura de datos, arboles binarios, listas enlazadas, algorítmica.",
      "Modulo II:  React-Redux, DOM-CSS avanzados, ES6, AJAX.",
      " Modulo III:  Promises, NodeJS, Express, Web Server, Testing.",
      " Modulo IV: SQL, ORM, sequalize.",
    ],
    date: "",
  },
  {
    title: "Oracle ONE",
    company: "Oracle",
    tag: "oracle",
    techs: [
      "POO",
      "Git",
      "GitHub",
      "Java",
      "CSS",
      "Metodologías Ágiles",
      "Scrum",
      "HTML",
      "MySQL",
    ],
    certificate: {
      image: oracleC,
      link: "https://app.aluracursos.com/user/cedavalca/program/certificate",
    },
    hours: "330",
    description:
      "Pase desde principios de maquetación web, y un manejo sólido de HTML, CSS y JavaScript, hasta el Paradigma Orientado a Objetos y su práctica en JAVA, con ejercicios y challenges, también obtuve mucha preparación de SoftSkills; desarrollo personal, gestión de tiempo, comunicación asertiva, etc",
    additional: [],
    date: "",
  },
  {
    title: "Argentina Programa",
    company: "CESSI",
    tag: "argentinaprograma",
    techs: ["Phyton", "Logic"],
    certificate: {
      image: apC,
      link: "https://mumuki.io/argentina-programa/certificates/verify/Eg66FWX94LfxM6A4",
    },
    hours: "100",
    description:
      "Desarrolle una buena base de lógica, haceindo más de 200 ejercicios de lógica resolutiva de problemas, y a la par me formé en Phyton Básico",
    additional: [],
    date: "",
  },
];
