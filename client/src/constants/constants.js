import { FiBriefcase } from "react-icons/fi";
import { VscTerminalTmux } from "react-icons/vsc";
import { MdOutlinePeople, MdDesignServices as Design } from "react-icons/md";
import { RxSpeakerLoud as Marketing } from "react-icons/rx";
import { ImCoinDollar as Finance } from "react-icons/im";
import { FaChartBar as Business } from "react-icons/fa";
import { BiNews as Digital } from "react-icons/bi";
import { RiUserHeartLine as Customer } from "react-icons/ri";

const LINKS = [
  {
    path: "/jobseeker",
    title: "Home",
    private: true,
  },

  {
    path: "/jobs",
    private: true,
    title: "Jobs",
  },
  {
    path: "/companies",
    private: true,
    title: "Companies",
  },
  {
    path: "/career-tips",
    private: true,
    title: "Career Tips",
  },
];

const STATIC_DATA = [
  {
    icon: FiBriefcase,
    title: "Current Jobs",
    holdings: "8k",
    color: "#71BEFF",
  },
  {
    icon: VscTerminalTmux,
    title: "Startups",
    holdings: "400",
    color: "#FF8F43",
  },
  {
    icon: MdOutlinePeople,
    title: "Talents",
    holdings: "20k",
    color: "#DE72E8",
  },
];

const CATEGORIES = [
  {
    title: "Design & Development",
    positions: 150,
    icon: Design,
    color: "#E9F8FF",
    iconcolor: "#45A9FF",
  },
  {
    title: "Marketing & Communication",
    positions: 150,
    icon: Marketing,
    color: "#453FE0",
    iconcolor: "#FFFFFF",
  },
  {
    title: "Digital Marketing",
    positions: 150,
    icon: Digital,
    color: "#FFF5EF",
    iconcolor: "#FF944D",
  },
  {
    title: "Business & Consulting",
    positions: 150,
    icon: Business,
    color: "#FCEFEF",
    iconcolor: "#E98A78",
  },
  {
    title: "Finance Management",
    positions: 150,
    icon: Finance,
    color: "#FBEEFC",
    iconcolor: "#E07BEA",
  },
  {
    title: "Customer Service Care",
    positions: 150,
    icon: Customer,
    color: "#EEFCF5",
    iconcolor: "#66E19F",
  },
];

const CAREER_TIPS = [
  {
    title: "Pursue your passions",
    description: ` Choose a career that you are passionate about and that aligns with your interests and values. This will make your work more enjoyable and fulfilling.`,
  },
  {
    title: "Develop your skills:",
    description: ` Continuously develop your skills and stay up-to-date with the latest trends and technologies in your industry. This will help you stay relevant and valuable in the job market.`,
  },
  {
    title: "Build your personal brand",
    description: ` Create a strong personal brand by establishing a professional online presence and showcasing your skills, achievements, and expertise. This can help you stand out from the competition and attract new career opportunities.

`,
  },
  {
    title: "Network",
    description: ` Build and maintain a professional network by attending industry events, joining professional organizations, and connecting with colleagues and mentors. This can help you find new opportunities and gain valuable insights and advice.`,
  },
  {
    title: "Take on challenges",
    description: `Seek out new challenges and opportunities to stretch your skills and capabilities. This can help you grow and develop as a professional, and demonstrate your potential to employers.`,
  },
  {
    title: "Pursue your passions",
    description: ` Choose a career that you are passionate about and that aligns with your interests and values. This will make your work more enjoyable and fulfilling.`,
  },
  {
    title: "Pursue your passions",
    description: ` Choose a career that you are passionate about and that aligns with your interests and values. This will make your work more enjoyable and fulfilling.`,
  },
  {
    title: "Pursue your passions",
    description: ` Choose a career that you are passionate about and that aligns with your interests and values. This will make your work more enjoyable and fulfilling.`,
  },
];

const SUGGESTED_JOBS = [
  {
    jobTitle: "Software Engineer",
    company: "Acme Corporation",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    jobType: "Remote",
  },
  {
    jobTitle: "Product Manager",
    company: "XYZ Inc.",
    location: "New York, NY",
    jobType: "Onsite",
    salary: "$130,000 - $160,000",
  },
  {
    jobTitle: "Marketing Specialist",
    company: "ABC Company",
    location: "Los Angeles, CA",
    jobType: "Remote",
    salary: "$70,000 - $90,000",
  },

  {
    jobTitle: "Data Analyst",
    company: "Beta Corp.",
    jobType: "Hybrid",
    location: "Seattle, WA",
    salary: "$80,000 - $100,000",
  },
  {
    jobTitle: "Graphic Designer",
    company: "Gamma Inc.",
    jobType: "Part-time",
    location: "Chicago, IL",
    salary: "$60,000 - $80,000",
  },

  {
    jobTitle: "Sales Manager",
    company: "Delta Corporation",
    jobType: "Full-time",
    location: "Miami, FL",
    salary: "$100,000 - $130,000",
  },
  {
    jobTitle: "Human Resources Generalist",
    company: "Epsilon Inc.",
    jobType: "Hybrid/Remote",
    location: "Houston, TX",
    salary: "$75,000 - $95,000",
  },
  {
    jobTitle: "Business Development Associate",
    jobType: "Full-time",
    company: "Zeta Corp.",
    location: "Boston, MA",
    salary: "$90,000 - $110,000",
  },
];

export { LINKS, STATIC_DATA, CATEGORIES, SUGGESTED_JOBS };
