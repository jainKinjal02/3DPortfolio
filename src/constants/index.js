import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
  
    wolken,
    infosys,

    mapty,
    forkify,
    hiThere,
    littleLemon,
    crownClothing,

    threejs,
    bitbucket,
    ionic,
    angular,
    twitter_1,
    twitter_2,
    twitter_3
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Angular Developer",
      icon: backend,
    },
    {
      title: "Ionic Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Angular",
      icon: angular,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Ionic",
      icon: ionic,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bitbucket",
      icon: bitbucket,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Associate UI Developer",
      company_name: "Wolken",
      icon: wolken,
      iconBg: "#ffffff",
      date: "November 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js, Angular and other related technologies.",
        "Implemented the UI of a subrouter configuration, offering seamless customization option",
        "Spearheaded the development of a mobile app complementing Wolken’s ITSM web application",
        "Implemented Okta and Azure authentication for Wolken’s mobile app",
        "Implemented native device features like push notifications, deep linking, in app browser, file system using Capacitor",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Systems Engineer",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#ffffff",
      date: "October 2019 - October 2022",
      points: [
        "Spearheaded the re-development of the UI of Enrollment module for LAUSD’s student information system, leveraging a responsive and resilient module",
        "Developed an Immunization dashboard for LAUSD to monitor student COVID-19 vaccination info",
        "Implemented a dashboard for LAUSD to monitor summer schools admissions for independently charter schools",
        "Built the UI for a real state single page application, implemented features like user search, filter, category component, wishlisting properties"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: twitter_1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: twitter_2,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: twitter_3,
    },
  ];
  
  const projects = [
    {
      name: "e-Commerce",
      description:
        "An e-commerce platform that allows users to sign-in to the app, shop different categories, add items to cart, vist the cart, view cart summary, pay with stripe",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "stripe",
          color: "blue-text-gradient",
        },

      ],
      image: crownClothing,
      source_code_link: "https://github.com/jainKinjal02/crownClothing",
    },
    {
      name: "Recipe Guide",
      description:
        "A dynamic JavaScript application developed with the Model-View-Controller (MVC) architecture, offering users a comprehensive platform to explore, contribute, and manage their favorite recipes",
      tags: [
        {
          name: "vanillaJs",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "mvc-architecture",
          color: "blue-text-gradient",
        },
      ],
      image: forkify,
      source_code_link: "https://github.com/jainKinjal02/forkify-source-code-master",
    },
    {
      name: "Little Lemon",
      description:
        "A restaurant web application designed to enhance the online presence and user experience for the restaurant. The primary features include a landing page, a table reservation system, and showcasing customer reviews",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: littleLemon,
      source_code_link: "https://github.com/jainKinjal02/littleLemonReactWebApp",
    },
    {
      name: "Mapty",
      description:
        "A web application to log workout at different locations on map, demonstrating the use of JavaScript Leaflet library and geolocation API",
      tags: [
        {
          name: "vanillaJS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "leaflet-library",
          color: "blue-text-gradient",
        },
        {
          name: "geolocation-API",
          color: "green-text-gradient",
        },

      ],
      image: mapty,
      source_code_link: "https://github.com/jainKinjal02/Mapty",
    },

    {
      name: "Messaging App",
      description:
        "A comprehensive messaging application where users can login, search another user, chat with him, view the chat history.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: hiThere,
      source_code_link: "https://github.com/jainKinjal02/messagerApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };