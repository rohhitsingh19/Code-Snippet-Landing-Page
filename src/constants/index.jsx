import { BotMessageSquare } from "lucide-react";
import { ContactRound } from 'lucide-react';
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Pointer } from 'lucide-react';
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Snippet",
    description:
      "Type what you need in plain English, and our AI instantly generates optimized, ready-to-use code snippets.",
  },
  {
    icon: <Fingerprint />,
    text: "Smart Auto-Completion",
    description:
      "Get intelligent, context-aware suggestions as you type — just like your favorite IDE, but smarter.",
  },
  {
    icon: <ShieldHalf />,
    text: "Multi-Language Support",
    description:
      "Supports a wide range of languages — from Python and JavaScript to Java, C++, Go, and more.",
  },
  {
    icon: <ContactRound />,
    text: "Community Snippet Hub",
    description:
      "Explore curated snippets created and shared by developers worldwide. Like, comment, and contribute.",
  },
  {
    icon: <Pointer />,
    text: "One-Click Sharing",
    description:
      "Instantly share your snippets with teammates or the community using a public or private link.",
  },
  {
    icon: <GlobeLock />,
    text: "Cloud Sync & Backup",
    description:
      "Your snippets are securely stored in the cloud and synced across devices — so you never lose your work.",
  },
];

export const checklistItems = [
  {
    title: " Access Anytime, Anywhere",
    description:
      "Your snippets are securely backed up and accessible across all your devices via cloud sync.",
  },
  {
    title: "Explore & Collaborate",
    description:
      "Browse community-contributed snippets, leave feedback, and collaborate with your team using shared folders.",
  },
  {
    title: "Get AI-Generated Code",
    description:
      "Our AI instantly generates an optimized code snippet tailored to your request. You can review, edit, and customize it as needed.",
  },
  {
    title: "Describe Your Need",
    description:
      "Type what you’re trying to build or solve — in plain language. Example: “Create a responsive navbar using TailwindCSS”",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
