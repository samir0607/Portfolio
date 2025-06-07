export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    // id: 2,
    // name: 'Anushka Thebe',
    // position: 'Founder of Next Shop',
    // img: 'assets/review2.png',
    // review:
    //   'Samir`s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
];

export const myProjects = [
  {
    title: 'Women Safety App',
    desc: 'The Women Safety App is an innovative solution designed to ensure the safety and empowerment of women in any situation. This app helped our team to quaify for SIH 2024.',
    subdesc:
      'Built as a SOS app with Flutter, Dart, FireBase, ans soon will be integrated with AI for other key features AI-Powered Threat Detection, smart Audio & Video Recording, safe route calculation, and much more. The app like is designed for optimal performance and scalability.',
    href: 'https://github.com/samir0607/StudioProjects',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/logo.png',
    logoStyle: {
      backgroundColor: '#2A1846',
      border: '0.2px solid rgb(23, 31, 52)',
      boxShadow: '0px 0px 60px 0px rgba(32, 52, 107, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Dart',
        path: '/assets/dart.png',
      },
      {
        id: 2,
        name: 'Flutter',
        path: 'assets/flutter.svg',
      },
      {
        id: 3,
        name: 'FireBase',
        path: '/assets/firebase.svg',
      },
    ],
  },
  {
    title: 'Amazon E-Commerce Website - Clone',
    desc: "An Amazon clone project designed to replicate key features of the popular e-commerce platform. This project includes functionalities like product browsing, cart management, and a secure checkout process. Built using modern web technologies, it offers a responsive design, dynamic data rendering, and seamless user experience, serving as a comprehensive showcase of e-commerce application development.",
    subdesc:
      'Helped me learn JavaScript.',
    href: 'https://github.com/samir0607/All-Files/tree/main/html/Javascript/Amazon%20Project',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/amazon.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
    ],
  },
  {
    title: 'Inventory Management System',
    desc: 'An innovative inventory management platform designed to streamline products. Build this from scratch with Java, JavaSwing and MySQL as a college project.',
    subdesc:
      'A collaborative work with the team served as the team leader. I was responsible for designing the UI and backend logic.',
    href: 'https://github.com/samir0607/InventoryMgmtSystem',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/Inventory.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.svg',
      },
      {
        id: 2,
        name: 'Swing',
        path: 'assets/swing.svg',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/mysql.svg',
      },
    ],
  },
  {
    title: 'MyPortfolio',
    desc: 'An interactive portfolio website showcasing my skills, projects, and achievements. Designed with a modern and responsive layout, it highlights my expertise in web development, programming, and design. The portfolio features sections for about me, work samples, contact information, and integrated links to my professional profiles, providing a comprehensive view of my capabilities and experience',
    subdesc:
      'Built with React.js, tailwindcss, three.js, this project ensures a smooth and responsive 3D design',
    href: 'https://github.com/samir0607/Portfolio/tree/main/MyPortfolio',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Three.js',
        path: '/assets/three.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodejs.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    astronautPosition: isSmall ? [5, -5, 0] : isMobile ? [6, -5, 0] : isTablet ? [6, -5, 0] : [11, -6, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, 0, -10] : isMobile ? [-9, 0, -10] : isTablet ? [-11, 0, -10] : [-13, 0, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];