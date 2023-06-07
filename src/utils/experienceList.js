import soyhenry from "@/assets/soyhenry-logo.png";
import devocamp from "@/assets/devocamp.jpg";
import react from "@/assets/react.svg";
import javascript from "@/assets/js-icon.png";
import typescript from "@/assets/typescript-icon.png";
import redux from "@/assets/redux.svg";
import mongodb from "@/assets/mongodb-icon.png";
import node from "@/assets/nodejs-icon.png";
import html from "@/assets/html-icon.png";
import css from "@/assets/css-icon.png";
import rxjs from "@/assets/rxjs-icon.png";
import postgres from "@/assets/postgresql-icon.png";
import mysql from "@/assets/mysql-icon.png";
import nest from "@/assets/nestjs.svg";
import git from "@/assets/git-icon.png";
import express from "@/assets/express-js.png";
import aws from "@/assets/aws.png"

export const experience = [
  {
    title: "Backend Developer",
    techs: ["Nest", "TypeScript", "Express", "MongoDB", "AWS"],
    company: {
      name: "Devocamp",
      image: devocamp,
    },
    achievements: [
      "Trabajé en conjunto con el tech lead al diseñar la infrastructura de la empresa.",
      "Incentive distintos mecanismos de comunicación del equipo, lo que permitió mejorar la productividad y la eficacia en gran medida.",
      "Propuse perspectivas y realicé estudios que impactaron directamente en las arquitecturas, patrones, prácticas y tecnologías que usamos diariamente.",
      "Documenté la api de la empresa para la comunicación entre los distintos sectores de desarrollo.",
    ],
    date: "02/2023 - Present",
  },
  {
    title: "Full Stack Developer",
    techs: ["React", "Redux", "Express", "PosgreSQL"],
    company: {
      name: "SoyHenry",
      image: soyhenry,
    },
    achievements: [
      "Lideré mi equipo de desarrollo mejorando un 40% la productividad de los sprints.",
      "Organicé el uso de metodologías ágiles, mejorando el rendimiento un 35%.",
      "Desarrolle o participé en más de 40 features.",
      "Asistí al 90% del equipo de desarrollo en problemáticas y/o refactorizado de código.",
      "Impartí charlas técnicas y motivadoras e incentivé el pair programming.",
      "Introduje SOLID, Clean Architecture y patrones de diseño al código del proyecto.",
    ],
    date: "11/2022 - 02/2023",
  },
];
