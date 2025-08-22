import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nader Abdessaied",
  initials: "RF",
  url: "https://chaima.vercel.app",
  location: "Tunis, TN",
  locationLink: "https://www.google.com/maps/place/tunis",
  description:
    "Développeur Web Full-Stack ",
  summary:
    "Développeur full-stack titulaire d'un diplôme d'ingénieur logiciel et doté d'une expertise reconnue dans la création d'applications web hautes performances. Maîtrisant Python, Angular, je maitrise aussi  dans l'extraction de données avancées et les systèmes d'intégration sécurisés. Mon expérience couvre tout ce qui est JavaScript ou TypeScript, l'optimisation de bases de données et le déploiement évolutif à l'aide d'outils modernes. Passionné et rigoureux, je m'épanouis dans des environnements dynamiques et stimulants et m'engage à promouvoir l'innovation numérique.",
  avatarUrl: "/DSC_1271.jpg",
  skills: [
    "Python",
    "ReactJS",
    "NodeJS",
    "VueJS",
    "Java",
    "JEE",
    "Spring Boot",
    "MongoDB",
    "RESTful API",
    "NextJS",
    "NestJS",
    "MySQL", 
    "Angular",
    "JavaScript", 
    "Typescript", 
    "HTML5", 
    "CSS3", 
    "Bootstrap", 
    "Wordpress",
    "Php",
    "Git&GitHub", 
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "naderabdessaied8@gmail.com",
    tel: "+216 50 409 085",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nader2356",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nader-abdessaied-952bb9177/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [

     {
      company: "GPRO Consulting",
      href: "",
      badges: [],
      location: "On-site",
      title: "Développeur Fullstack Web ",
      logoUrl: "GPRO Consulting",
      start: "Juillet 2024",
      end: "juillet 2025",
    },

     {
      company: "Billcom Consulting",
      href: "",
      badges: [],
      location: "Hybrid",
      title: "Développeur Fullstack Web",
      logoUrl: "/Biilcom Consulting.jpg",
      start: "mai 2023",
      end: "Jui 2024",
      
    },

    {
      company: "Devokt",
      href: "",
      badges: [],
      location: "On-site",
      title: " Développeur Fullstack Web",
      logoUrl: "/Devokt.png",
      start: "Juillet 2023",
      end: "avril 2023",
    },

   

   
  ],


  education: [
    {
      school: "École Pluridisciplinaire de Sousse (EPI)",
      href: "https://www.episup.com/fr",
      degree: "Licence applique en développement web et multimédia",
      logoUrl: "/téléchargement.jpeg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Institut Supérieur des Études Technologiques de Sousse (IsetSo)",
      href: "https://isetso.rnu.tn/",
      degree: "Ingénierie logicielle",
      logoUrl: "/1280px-Logo_EPI_Sousse.png",
      start: "2020",
      end: "2023",
    },

  ],



  projects: [
     {
      title: "site eskooly",
      href: "https://eskooly.com/",
      dates: "Jan 2024 - jun 2024",
      active: true,
      description: "Nous avons conçu une solution robuste qui sert à gérer d'un système des établissements d'enseignement. Doté d'une interface de configuration basée sur NextJS, d'une automatisation des tâches cron nocturnes, ce projet est déployé sur un VPS évolutif utilisant Gunicorn et Nginx.",    
      technologies: [
        "Angular",
        "Gunicorn",
        "Nginx",
      ],
      links: [
        {
          type: "Website",
          href: "https://eskooly.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "Captureeskooly.png"
    },

     {
      title: "site de livraison de repas sous abonnement ",
      href: "https://www.lyveat.com",
      dates: "Mai 2023 - Octobre 2023",
      active: true,
      technologies: [
        "VueJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lyveat.com",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/lyveatcapture.png",
      video:"",
    },

     {
      title: "site ehs",
      href: "https://www.ehs.com",
      dates: "Décembre 2023 - Avril 2023",
      active: true,
      technologies: [
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "Typescript"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ehs.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Captureehs.png",
      video: "",
    },



     {
      title: "leboncoin",
      href: "https://www.leboncoin.fr",
      dates: "Janvier 2024 - Mai 2024",
      active: true,
      technologies: [
        "NextJS",
        "NodeJS",
        "MongoDB",
        "Typescript"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.leboncoin.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Captureleboncoin.png",
      video: "",
    },


     {
      title: "site workly",
      href: "https://workly.io/en",
      dates: "Juin 2024 - Novembre 2024",
      active: true,

      technologies: [
        "Angular",
      ],
      links: [
        {
          type: "Website",
          href: "https://workly.io/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CaptureWorkly.png",
      video: "",
    },



   

     {
      title: "site Elzei Portage ",
      href: "https://elzei-uat.esy.es",
      dates: "Décembre 2024 - Juin 2025",
      active: true,
      technologies: [
        "Angular",
      ],
      links: [
        {
          type: "Website",
          href: "https://elzei-uat.esy.es",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/elzeiPortageWebsite.png",
      video:"",
    },


  


  ],





  clubs: [

    {
      name: "ARSII  - EPI Sousse",
      description: "",
      logoUrl: "/ARSII.jpg",
      start: "2020",
      end: "2022",
      role: "Member",
      
    },

    {
      name: "Google Developer Student Clubs - ISSET Sousse",
      description: "",
      logoUrl: "/gdsc.png",
      start: "2017",
      end: "2018",
      role: "Member",
      
    },

  ],
} as const;

