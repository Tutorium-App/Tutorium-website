import { img, teamImg } from "./img";
import { ServiceImages } from "./img";

const infoData = [
  {
    name: "Antwi Dapaah",
    role: "CyberSecurity Expert",
    image: teamImg.user2,
    description: `
    Dapaah, a cybersecurity expert, drives project success through innovative solutions and a collaborative, problem-solving approach.
      `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "#",
  },
  {
    name: "Salifu Hamdia",
    role: "CyberSecurity Specialist",
    image: teamImg.hamdia,
    description: `
    Hamdia, a committed cybersecurity specialist, ensures project success through her innovative approach and robust technical skills
    `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/PrincessTipagya",
    linkedinLink: "https://www.linkedin.com/in/salifu-tipagya-6102931b7",
  },
  {
    name: "Firdaus Nebia",
    role: "IoT Professional",
    image: teamImg.user,
    description: `
    Firdaus, an esteemed IoT Professional, steers project advancement with her pioneering approach and profound technical expertise.      `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "#",
    linkedinLink:
      "https://www.linkedin.com/in/firdaus-zakariyya-nebia-170b68253/",
  },
  {
    name: "Emmanuel Hudson",
    role: "MERN stack developer",
    image: teamImg.hudson,
    description: `
    With his expertise in the MERN stack, Hudson, a dedicated developer, propels projects to excellence with his creative solutions and strong problem-solving abilities.    
    `,
    facebookLink: "#",
    twitterLink: "https://twitter.com/HudsonAdjetey",
    instagramLink: "#",
    githubLink: "https://github.com/hudsonAdjetey",
    linkedinLink: "https://www.linkedin.com/in/hudsonadjetey",
  },

  {
    name: "Jacinda Biney",
    role: "Product Designer",
    image: teamImg.jacinda,
    description: `
    With a keen eye for detail and a passion for creating intuitive user experiences, 
    Peace consistently delivers exceptional products that exceed expectations.
    `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Jacinda777",
    linkedinLink:
      "https://www.linkedin.com/in/jacinda-biney-210607292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Kwame Amponsah",
    role: "Reasearcher",
    image: teamImg.yeboah,
    description: `
    Yeboah is a dynamic researcher at Ideation Axis, renowned for his keen research skills and relentless pursuit of groundbreaking solutions, shaping the company's future direction.    `,
    facebookLink: "#",
    twitterLink: "https://x.com/yeboahk64982506?s=21&t=qG3BY_jRww_9m81LfMwc5g",
    instagramLink:
      "https://www.instagram.com/fashion_pryncez85?igsh=OGQ5ZDc2ODk2ZA==",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "https://www.linkedin.com/in/kwame-yeboah-a7b547234",
  },
  {
    name: "Miriam Aryeetey",
    role: "Database Administrator",
    image: teamImg.miriam,
    description: `
    Miriam, a dedicated Information System Professsional with rigorous analytical skills, 
    contributes valuable insights and collaborates 
    effectively to advance knowledge in her field.      
    `,
    facebookLink: "#",
    twitterLink: "https://twitter.com/MiriamAryeetey/",
    instagramLink:
      "https://www.instagram.com/aryeeteymiriam?igsh=aDF1d2NhMXptbnRz/",
    githubLink: "https://github.com/Miary123/",
    linkedinLink: "https://www.linkedin.com/in/miriam-aryeetey-38011b27b/",
  },
  {
    name: "Kwadwo Bediako",
    role: "Researcher",
    image: teamImg.bediako,
    description: `
    Bediako is a meticulous researcher at Ideation Axis, known for his thorough exploration of advanced technologies and innovative ideas, driving the company's progress.     `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "https://www.linkedin.com/in/bediako-osei-kwadwo-70880625a/",
  },

  {
    name: "Nicholas Lutterodt",
    role: "IOT & Robotics",
    image: teamImg.nic,
    description: `  
Nicholas, dedicated to innovation in IoT and Robotics, drives project success with his proficiency in cutting-edge technologies and collaborative problem-solving skills.
`,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "https://www.instagram.com/nic.lite?igsh=aXJpYmM2a2hiYW54",
    githubLink: "#",
    linkedinLink: "https://www.linkedin.com/in/nicholas-lutterodt-a7a813285/",
  },

  {
    name: "Peace Roberts",
    role: "UI/UX Designer",
    image: teamImg.peace,
    description: `
       Peace's creativity and expertise in UI/UX make her a valuable asset to any design team.
       She consistently delivers exceptional designs that captivate and engage users.       
       `,

    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "#",
    linkedinLink: "#",
  },
];

const productInfo = [
  {
    header: "smagritrade",
    text: "A revolutionary project aimed at transforming Ghana's agricultural sector by establishing a stock-based system for remote investment and streamlined operations, ultimately turning agriculture into a tradeable asset class. ",
    link: "",
    codeColor: "rgba(83, 132, 70, 1)",
    img: ServiceImages.leaf,
  },
  {
    header: "Smagritrade Marketplace",
    text: "247 SmAgriTrade: Empowering remote participation in agriculture, connecting farmers, traders, and consumers. Aligned with UN goals, it's revolutionizing the industry sustainably. Join us in shaping African innovation.",
    link: "",
    codeColor: "rgba(79, 70, 132, 1)",
    img: ServiceImages.marketCard,
  },
  {
    header: "CampusTradeHub",
    text: "A student-focused e-commerce platform designed to empower student entrepreneurs and provide them with opportunities to market their products on various campuses in Ghana. CampusTradeHub aims to train students in entrepreneurship and instill an investor mindset.",
    codeColor: "rgba(128, 52, 204, 1)",
    img: ServiceImages.campusCard,
  },
  {
    header: "IdeaSecurity",
    text: "An advanced intrusion detection and prevention system leveraging micro-controllers, vibration sensors and Raspberry Pi for video surveillance. Incorporating AI algorithms, IdeaSecurity distinguishes genuine from false alarms, enhancing home security and user experience.",
    codeColor: "rgba(51, 36, 66, 1)",
    img: ServiceImages.spyCard,
  },
  {
    header: "Electronica Express",
    text: "A multifaceted initiative starting an Arduino kit buying and selling business, Electronica Express will evolve into an IoT lab for research and manufacturing embedded systems. It serves as catalyst to generate funds for broader technological innovations.",
    img: ServiceImages.robotBoard,
    codeColor: "rgba(128, 52, 204, 1)",
  },
  {
    header: "Ideation Learn",
    text: "An upcoming affiliate marketing platform set to launch in September 2024, focusing on tech courses in AI, ML, data science, cybersecurity and software development. It will enable student to learn and earn by buying and selling courses, fostering a culture of continuous learning and entrepreneurship.",
    codeColor: "rgba(15, 128, 153, 1)",
    img: ServiceImages.learn,
  },
 
  {
    header: "Crop Life",
    text: "An AI-driven project targeting the prediction of crop lifespan post-harvest to reduce post-harvest losses. Utilizing advanced technologies like AI, IoT and data science. CropLife aims to provide accurate predictions and prevent spoilage through interventions.",
    codeColor: "rgba(83, 132, 70, 1)",
    img: ServiceImages.cropLife,
  },
];

// ------------board members--------
const boardMembers = [
  {
    name: "Philip Gyimah",
    role: "Founder & Lead Innovator",
    image: teamImg.founder,
    description: `
      A visionary leader with an unrelenting fire for innovation, Philip is the mastermind behind
      Ideation Axis. His passion for empowering African minds fuels our mission to transform ideas
      into groundbreaking solutions.`,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "https://www.linkedin.com/in/philip-gyimah-appiah-09006b26a/",
  },

  {
    name: "John Doe",
    role: "Co-Founder",
    image: teamImg.cofounder,
    description: `
    John is a forward-thinking leader (CTO) 
    dedicated to innovation. His expertise in advanced technologies 
    and strategic leadership drive technological excellence, 
    ensuring alignment with business objectives.

`,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "#",
  },

  {
    name: "Mensah Raymond",
    role: "Project Manager",
    description: `Raymond is the
      maestro behind the scenes, ensuring our projects stay on track and deadlines are met. His
      organizational skills and meticulous approach are instrumental in keeping our innovation engine
      running smoothly.`,
    image: teamImg.raymond,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink:
      "https://www.linkedin.com/in/raymond-mensah-b96b17239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/",
  },

  {
    name: "Godwin Mensah",
    role: "Business Development Executive",
    description: `
      Godwin is our champion for forging strategic partnerships. He leverages his expertise to connect
Ideation Axis with key players in the industry, amplifying our reach and impact.`,
    image: teamImg.godwin,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink:
      "https://www.instagram.com/its.godmenz?igsh=MTE1bmlmN21hc2oxZw==",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink:
      "https://www.linkedin.com/in/godwin5115?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Enyonam Beatson-Affram",
    role: "Software Engineer",
    image: teamImg.enyonam,
    description: `
      Software Engineer
      `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink:
      "https://www.linkedin.com/in/enyonam-beatson-affram-aba026231/",
  },
  {
    name: "David Arhin",
    role: "Chief Technology Officer",
    image: teamImg.david,
    description: `
  [Name] is a forward-thinking leader (CTO) 
  dedicated to innovation. His expertise in advanced technologies 
  and strategic leadership drive technological excellence, 
  ensuring alignment with business objectives.

`,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "https://www.instagram.com/jhunnie_kayroy/",
    githubLink: "https://github.com/Anonymous-Roys",
    linkedinLink: "https://www.linkedin.com/in/david-arhin-09a0a026a/",
  },

  {
    name: "Andreas Kodua",
    role: "Technical Mentorship Lead",
    image: teamImg.andreas,
    description: `
    Andreas is the knowledge architect who empowers future generations of
    innovators. Leading our mentorship and training programs, he equips young minds with the
    expertise and guidance needed to turn their ideas into reality.
    `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "#",
  },
  {
    name: "Kelvin Annorson",
    role: "Project Researcher",
    image: teamImg.kel,
    description: `
    Kelvin is a meticulous project researcher known for his valuable 
    insights and up-to-date knowledge. His keen eye for detail and 
    passion for research make him an invaluable asset to the team, 
    ensuring projects are grounded in current, relevant information.
    `,

    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "https://www.linkedin.com/in/kelvin-annorson-jnr-049b7326b",
  },
];

// ---------------------team members-----------------
const teamMembers = [
  {
    name: "Michael Asare",
    role: "IOT & Robotics",
    image: teamImg.user2,
    description: `
      An IOT
      `,
    facebookLink: "#",
    twitterLink: "",
    instagramLink: "#",
    githubLink: "",
    linkedinLink: "https://www.linkedin.com/in/michael-adu-asare-14b1b7303/",
  },

  {
    name: "Clement Asare",
    role: "Software Developer",
    image: teamImg.user2,
    description: `
    A flutter developer
    `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "#",
  },

  {
    name: "Bernard Ephraim",
    role: "IOT & Robotics",
    image: teamImg.user2,
    description: `
    An IOT
    `,
    facebookLink: "#",
    twitterLink: "#",
    instagramLink: "#",
    githubLink: "https://github.com/Ideation-Axis/",
    linkedinLink: "https://www.linkedin.com/in/bernard-ephraim-1ab980224/",
  },
];

export { infoData, productInfo, boardMembers, teamMembers };
