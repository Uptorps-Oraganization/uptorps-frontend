import type { FeatureDataType, TestimonialDataType } from "@/typesnschemas/types/DataTypes";
import {
  BrainIcon,
  ChartPieIcon,
  DollarSignIcon,
  GraduationCapIcon,
  HandCoinsIcon,
  LayoutDashboard,
  MessageSquareWarningIcon,
  UserGroupIcon,
  WalletIcon,
} from "@animateicons/react/lucide";
import { BadgeDollarSign, BrainCircuit, ChartNoAxesCombined, GraduationCap, MessagesSquareIcon, Trophy, UserGroup, WrenchIcon } from "lucide-react";

export const featuresData: FeatureDataType[] = [
  {
    icon: GraduationCap,
    title: "Courses and Lessons",
    description: "Develop and Access courses and lessons with detailed progress tracking.",
  },
  {
    icon: BrainCircuit,
    title: "Quizzes",
    description: "Access and try your hands on quizzes to help practice what you learn and compete with others.",
  },
  {
    icon: UserGroup,
    title: "Referrals",
    description: "Refer people who are interested in learning what you are learning and earn commission.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Organize competitions that other users can participate and earn rewards based on your specifications.",
  },
  {
    icon: BadgeDollarSign,
    title: "Earn",
    description: "Earn from referrals, courses, lessons, and competitions. You can also earn from your content if you are a tutor.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Insight Analytics",
    description: "Get access to a real-time analytical dashboard that tracks your performance on our platform.",
  },
];

export const testimonialsData: TestimonialDataType[] = [
  {
    statement: "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Peter",
    user_type: "Learner",
    ratings: 4,
  },
  {
    statement: "This platform is by far the best I have seen. Uploading my lesssons and courses for my students to get access has been great so far.",
    user_name: "Enock",
    user_type: "Tutor",
    ratings: 5,
  },
  {
    statement: "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Amos",
    user_type: "Tutor",
    ratings: 3,
  },
  {
    statement: "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Peter",
    user_type: "Learner",
    ratings: 4,
  },
  {
    statement: "This platform is by far the best I have seen. Uploading my lesssons and courses for my students to get access has been great so far.",
    user_name: "Enock",
    user_type: "Tutor",
    ratings: 5,
  },
  {
    statement: "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Amos",
    user_type: "Tutor",
    ratings: 3,
  },
  {
    statement: "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Cynthia",
    user_type: "Learner",
    ratings: 2,
  },
  {
    statement: "UPTorps has a great customer care system. I had a challenge withdrawing my earnings and I reached out to them. The problem was solved swiftly",
    user_name: "Fred",
    user_type: "Learner",
    ratings: 4,
  },
  {
    statement:
      "UPTorps has a great customer care system. I had a challenge withdrawing my earnings and I reached out to them. The problem was solved swiftly.UPTorps has a great customer care system. I had a challenge withdrawing my earnings and I reached out to them. The problem was solved swiftly",
    user_name: "Duniar",
    user_type: "Learner",
    ratings: 4,
  },
];

export const adminMenuOptions = [
  { name: "Admin Dashboard", link: "/adminpage/dashboard", icon: LayoutDashboard },
  { name: "Account Management", link: "/adminpage/accountmanagement", icon: UserGroupIcon },
  { name: "Analytics", link: "/adminpage/analytics", icon: ChartPieIcon },
  {
    name: "Configurations",
    icon: WrenchIcon,
    subOptions: [
      { name: "Quizzes", link: "/adminpage/configurations/quizzes", icon: BrainIcon },
      { name: "Courses", link: "/adminpage/configurations/courses", icon: GraduationCapIcon },
    ],
  },
  {
    name: "Finance",
    icon: WalletIcon,
    subOptions: [
      { name: "Revenue", link: "/adminpage/finance/revenue", icon: DollarSignIcon },
      { name: "Payouts", link: "/adminpage/finance/payouts", icon: HandCoinsIcon },
    ],
  },
  {
    name: "Reports",
    icon: MessagesSquareIcon,
    subOptions: [
      { name: "Tutor Reports", link: "/adminpage/reports/tutorreports", icon: MessageSquareWarningIcon },
      { name: "Learner Reports", link: "/adminpage/reports/learnerreports", icon: MessageSquareWarningIcon },
    ],
  },
];

export const userMenuOptions = [
  { name: "Dashboard", link: "/userpage/learneractionpage/dashboard", icon: LayoutDashboard },
  { name: "Quizzes", link: "/userpage/learneractionpage/quizzes", icon: BrainIcon },
  { name: "Courses", link: "/userpage/learneractionpage/courses", icon: GraduationCapIcon },
  { name: "Referrals", link: "/userpage/learneractionpage/referrals", icon: UserGroupIcon },
  { name: "Wallet", link: "/userpage/learneractionpage/wallet", icon: WalletIcon },
];

export const tutorMenuOptions = [
  { name: "Dashboard", link: "/userpage/tutoractionpage/dashboard", icon: LayoutDashboard },
  { name: "Quizzes", link: "/userpage/tutoractionpage/quizzes", icon: BrainIcon },
  { name: "Courses", link: "/userpage/tutoractionpage/courses", icon: GraduationCapIcon },
  { name: "Wallet", link: "/userpage/tutoractionpage/wallet", icon: WalletIcon },
];

//AdminPageData

export const accountQueryChoiceOptions = [
  { label: "All Users", value: "allusers" },
  { label: "Learners", value: "learners" },
  { label: "Tutors", value: "tutors" },
  { label: "Administrators", value: "administrators" },
];

export const rowsPerPageOption = [
  { label: "5", value: "5" },
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
];
