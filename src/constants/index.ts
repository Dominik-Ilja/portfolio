import memories from '../assets/memories.png';
import messenger from '../assets/messenger.jpg';
import videoChat from '../assets/video-chat.jpg';
import webShop from '../assets/web-shop.png';

export const links = {
  home: '#home',
  projects: '#projects',
  about: '#about',
  contact: '#contact',
  linkedin: 'https://www.linkedin.com/in/dominik-kulak/',
  github: 'https://github.com/Dominik-Ilja',
};
export type Project = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  stack: [] | String[];
  codeURL: string;
  sourceURL: string;
};
export const projects: Project[] = [
  {
    image: memories,
    imageAlt: 'Memories App',
    title: 'MERN Memories',
    description: ` Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: messenger,
    imageAlt: 'Unichat App',
    title: 'Unichat',
    description: `This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application.`,
    stack: ['React', 'ChatEngine', 'Firebase'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: webShop,
    imageAlt: 'Web Shop App',
    title: 'E-Commerce',
    description: ` Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    stack: ['React', 'JavaScript'],
    codeURL: '#',
    sourceURL: '#',
  },
  {
    image: videoChat,
    imageAlt: 'Video Chat App',
    title: 'WebRTC App',
    description: `This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.`,
    stack: ['React', 'WebRTC'],
    codeURL: '#',
    sourceURL: '#',
  },
];