import {
  mobile,
  backend,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  reallestate,
  next,
  CV_Duncan,
  shop,
} from "../assets";
export const CVDuncan = CV_Duncan;

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Project",
  },

  {
    id: "contact",
    title: "Contact",
  },
  
];

export const services = [
  {
    title: "Web Developer ",
    icon: mobile,
  },
  {
    title: "Open Source",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nexr",
    icon: next,
  },
];


export const projects = [
  {
    name: "Real Estate SAAS",
    description:
      "Discover your dream home with our real estate platform. Whether you're looking to buy or rent, we offer a wide range of properties to suit every lifestyle and budget. Explore listings, connect with agents, and make your next move effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",

        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: reallestate,
    source_code_link: "https://github.com/Faizan1421/property_rent_fullstack",
    visit_here_link:"https://property-rent-fullstack.onrender.com/",
  },
  {
    name: "3D Shop",
    description:
      "In this project you Generate unique 3D shirts/swag items dynamically,apply any color to the 3D shirt/swag for personalized styling,enable users to upload any file as a logo,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "",
    visit_here_link:"",
  },
];


