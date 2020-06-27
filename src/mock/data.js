import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Jitsu MacMaster | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jitsu MacMaster',
  subtitle: "I am a Software Engineer with a passion for code with a hint of social justice!",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1OOKLbng1Y_2EDzyDqxbFi5h-oCzEGvDNUHBFKxGGTsY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'deathstarlogo.jpg',
    title: 'Death Star Trench',
    info: 'Fly an X-Wing down the infamous Deathstar Trench, and take your shot at blowing up the Deathstar. May the force be with you!',
    info2: '',
    url: 'https://jitsumacmaster.github.io/Deathstar-Run/dist/',
    repo: 'https://github.com/jitsumacmaster/Deathstar-Run', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'babblelogo.jpg',
    title: 'BabbleChat',
    info: 'At BabbleChat, we strive to make learning languages an enjoyable experience for all language learners, from the conversational newbie to the linguistic expert, to the dabbling hobbyist in between. Through our chat dynamic platform, connect with people from across the world. Master fluency in a language, one word a time, with exciting conversational partners along the way.',
    info2: '',
    url: 'http://babble-chat-app.herokuapp.com/#/',
    repo: 'https://github.com/jitsumacmaster/BabbleChat', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jitsu.macmaster@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv4(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jitsu-macmaster-41b86967/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/jitsumacmaster',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
