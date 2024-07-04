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
  mongodb,
  git,
  figma,
  springboot,
  docker,
  meta,
  starbucks,
  tesla,
  aws,
  collins,
  isu,
  shopify,
  mygym,
  roomba,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  python,
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
  {
    id: "social-links",
    title: "Socials",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Teacher Assistant",
    company_name: "Iowa State University",
    location: "School of Engineering",
    icon: isu,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Collaborated and problem solved with students for one of the largest computer engineering classes at Iowa State University.",
      "Lead exam review sessions three times per semester for class sizes averaging 100 students.",
      "Conducted weekly labs that are 3 hours long consisting of a recitation and a lab project and held office hours.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Collins Aerospace",
    location: "Flight Management Systems",
    icon: collins,
    iconBg: "#383E56",
    date: "May 2023 - June 2024",
    points: [
      "Led the development of a comprehensive Python tool that achieved 80% automation of test verification logs.",
      "Improved efficiency of standard test case file operations by ~2 minutes & 96 MB per file.",
      "Developed FMS application using GNAT studio to access & handle more than 5 GB of data in IoT environment.",
      "• Nominated as a student ambassador & helped organize 9 distinct large-scale company events.",
    ],
  },
  {
    title: "SEPP Software Engineer",
    company_name: "Collins Aerospace",
    location: "Traffic Collision and Avoidance System",
    icon: collins,
    iconBg: "#383E56",
    date: "June 2024 - Current",
    points: [
      "Successfully migrated FPGA synthesis process from Linux to Windows environment by refactoring codebase & scripts, improving workflow by 38.5%",
      "Improved aircraft spatial awareness by optimizing TCAS algorithm resulting in 29 Nautical Miles range increase.",
      "Engineered Co-simulations covering 100% of our model using iterative testing, resulting in smooth integration.",
      "Conducted a flight test gathering real-time data using MATLAB, demonstrating the model’s accuracy through comprehensive analysis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mohamed has shown an aptitude for solving challenging problems and a willingness to investigate new technologies. He also also has a positive attitude and an excellent rapport with his coworkers.",
    name: "Chris Gili",
    designation: "Senior Engineering Manager",
    company: "Collins Aerospace",
    image:
      "https://media.licdn.com/dms/image/C5603AQG-gKJJy4RSuQ/profile-displayphoto-shrink_800_800/0/1594410092454?e=1716422400&v=beta&t=flBmrstXBnOrv1q3QJLDZVdn1L44rC2sknrwRfvnw5s",
  },
  {
    testimonial:
      "Moe possesses an exceptional level of curiosity and inquisitiveness, always eager to solve problems. What I admire most about working with him is his remarkable ambition and how seamlessly he integrates with the team.",
    name: "Akhilesh Nevatia",
    designation: "SWE",
    company: "Palantir Technologies",
    image:
      "https://media.licdn.com/dms/image/D5603AQGal0a-Xzldsw/profile-displayphoto-shrink_800_800/0/1700697358577?e=1716422400&v=beta&t=gtfVrfYHrVH1l5hsz_l729GCg9ysHhtB66Rm1tEbXhM",
  },
  {
    testimonial:
      "Personally, Moe is open and even-tempered. I have never seen him without a smile on his face. Even when our PTK chapter has faced challenges or tight deadlines, Moe appears relaxed and willing to take whatever course corrections are required. He accepts constructive criticism and uses it to help improve the chapter.",
    name: "Dr. Sondra Gates",
    designation: "Associate Professor of English",
    company: "Kirkwood CC",
    image:
      "https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/365773670_2524919654339334_4477076345980728076_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ex-CEChl6dcAX8ICNBr&_nc_ht=scontent-den2-1.xx&oh=00_AfC65WOfOjty-pyq8Puk2aiLMMtKqDc9axwazgy4zbTZTA&oe=65FE004D",
  },
];

const projects = [
  {
    name: "CyFinance",
    description:
      "Android application that allows users to securely track their finances with features including financial goals, income and loan tracker, networth calculator, and JWT tokens.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Hibernate",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "myGym",
    description:
      "An interactive gym website that provides users with a modern and efficient interface. Sign up feature and contact us are included.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: mygym,
    source_code_link: "https://github.com/bigboimo/myGym.git",
  },
  {
    name: "PirateShip",
    description:
      "IOT project featuring a Pirate ship with the destination being a treasure island. However, the journey is treacherous and obstacles are plenty. The ship's mission is to find the island without falling into a pit or hitting obstacles.",
    tags: [
      {
        name: "Embedded C",
        color: "blue-text-gradient",
      },
      {
        name: "CCStudio",
        color: "green-text-gradient",
      },
      {
        name: "PuTTY",
        color: "pink-text-gradient",
      },
    ],
    image: roomba,
    source_code_link: "https://github.com/bigboimo/PirateShip.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
