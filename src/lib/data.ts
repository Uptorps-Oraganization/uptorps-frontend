import type { FeatureDataType, TestimonialDataType } from "@/typesnschemas/types/DataTypes";
import {
  BrainIcon,
  ChartPieIcon,
  DollarSignIcon,
  GraduationCapIcon,
  HandCoinsIcon,
  LayoutDashboard,
  MessageSquareDotIcon,
  MessagesSquareIcon,
  UserGroupIcon,
  WalletIcon,
  WrenchIcon,
} from "@animateicons/react/lucide";
import { BadgeDollarSign, BrainCircuit, ChartNoAxesCombined, GraduationCap, Trophy, UserGroup } from "lucide-react";

//Page Navigation Data
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
      { name: "Tutor Reports", link: "/adminpage/reports/tutorreports", icon: MessageSquareDotIcon },
      { name: "Learner Reports", link: "/adminpage/reports/learnerreports", icon: MessageSquareDotIcon },
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

//Table Query Options
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

// Placeholder Data
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
    statement:
      "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
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
    statement:
      "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Amos",
    user_type: "Tutor",
    ratings: 3,
  },
  {
    statement:
      "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
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
    statement:
      "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Amos",
    user_type: "Tutor",
    ratings: 3,
  },
  {
    statement:
      "UPTORPS transformed my learning journey. I have earned over $500 in rewards while completing courses that actually improved my skills.",
    user_name: "Cynthia",
    user_type: "Learner",
    ratings: 2,
  },
  {
    statement:
      "UPTorps has a great customer care system. I had a challenge withdrawing my earnings and I reached out to them. The problem was solved swiftly",
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

export const quizConfigurationData = [
  {
    difficulty: "Beginner",
    description: "This level is designed for individuals who are new to the subject matter and have little to no prior knowledge or experience.",
    levels: [
      {
        level: "Level 1",
        programmes: [
          { programme: "Arts", courses: ["Dance", "Play", "Drama"] },
          { programme: "Music", courses: ["Soul", "R&B"] },
        ],
      },
      {
        level: "Level 2",
        programmes: [
          { programme: "Science", courses: ["Biology", "Chemistry"] },
          { programme: "Technology", courses: ["Coding", "Robotics"] },
        ],
      },
      {
        level: "Level 3",
        programmes: [
          { programme: "History", courses: ["World History", "Civics"] },
          { programme: "Literature", courses: ["Poetry", "Essay Writing"] },
        ],
      },
    ],
  },
  {
    difficulty: "Basic",
    description:
      "This level is designed for individuals who have a basic understanding of the subject matter and are looking to expand their knowledge and skills.",
    levels: [
      {
        level: "Level 1",
        programmes: [
          { programme: "Mathematics", courses: ["Arithmetic", "Geometry"] },
          { programme: "Language", courses: ["Reading", "Writing"] },
        ],
      },
      {
        level: "Level 2",
        programmes: [
          { programme: "Science", courses: ["Plants", "Animals"] },
          { programme: "Social Studies", courses: ["Community", "Geography"] },
        ],
      },
    ],
  },
  {
    difficulty: "Secondary",
    description:
      "This level is designed for individuals who have a solid understanding of the subject matter and are looking to further develop their skills and knowledge.",
    levels: [
      {
        level: "Level 1",
        programmes: [
          { programme: "Mathematics", courses: ["Algebra", "Statistics"] },
          { programme: "Science", courses: ["Physics", "Biology"] },
        ],
      },
      {
        level: "Level 2",
        programmes: [
          { programme: "Humanities", courses: ["History", "Geography"] },
          { programme: "Technology", courses: ["Computer Science", "Engineering"] },
        ],
      },
    ],
  },
  {
    difficulty: "Tertiary",
    description:
      "This level is designed for individuals who have an advanced understanding of the subject matter and are looking to specialize in a particular area of study.",
    levels: [
      {
        level: "Level 1",
        programmes: [
          { programme: "Computer Science", courses: ["Data Structures", "Databases"] },
          { programme: "Business", courses: ["Accounting", "Economics"] },
        ],
      },
      {
        level: "Level 2",
        programmes: [
          { programme: "Engineering", courses: ["Electronics", "Thermodynamics"] },
          { programme: "Arts", courses: ["Research Methods", "Critical Theory"] },
        ],
      },
    ],
  },
];

export const pendingQuizzes = [
  {
    title: "Algebra Basics",
    description: "Practice foundational algebra concepts and equations.",
    timing: 15,
    numbOfQuestions: 10,
    remainingTime: 8,
    numbOfAnsweredQuestions: 3,
  },
  {
    title: "World History",
    description: "Review key events and civilizations from world history.",
    timing: 20,
    numbOfQuestions: 15,
    remainingTime: 12,
    numbOfAnsweredQuestions: 5,
  },
  {
    title: "Cell Biology",
    description: "Test your knowledge of cells and their functions.",
    timing: 15,
    numbOfQuestions: 10,
    remainingTime: 6,
    numbOfAnsweredQuestions: 4,
  },
  {
    title: "Essay Writing",
    description: "Explore the essentials of clear, effective essay writing.",
    timing: 20,
    numbOfQuestions: 12,
    remainingTime: 14,
    numbOfAnsweredQuestions: 6,
  },
  {
    title: "Geometry",
    description: "Solve problems involving shapes, angles, and measurement.",
    timing: 15,
    numbOfQuestions: 10,
    remainingTime: 9,
    numbOfAnsweredQuestions: 2,
  },
  {
    title: "Physics",
    description: "Review core principles of motion, forces, and energy.",
    timing: 20,
    numbOfQuestions: 15,
    remainingTime: 11,
    numbOfAnsweredQuestions: 7,
  },
  {
    title: "Literature",
    description: "Show what you know about literary works and techniques.",
    timing: 15,
    numbOfQuestions: 10,
    remainingTime: 5,
    numbOfAnsweredQuestions: 8,
  },
  {
    title: "Chemistry",
    description: "Practice concepts related to matter and chemical reactions.",
    timing: 20,
    numbOfQuestions: 15,
    remainingTime: 16,
    numbOfAnsweredQuestions: 10,
  },
];

export const availableQuizzes = [
  { title: "Algebra Basics", description: "Practice foundational algebra concepts and equations.", timing: 15, numbOfQuestions: 10 },
  { title: "World History", description: "Review key events and civilizations from world history.", timing: 20, numbOfQuestions: 15 },
  { title: "Cell Biology", description: "Test your knowledge of cells and their functions.", timing: 15, numbOfQuestions: 10 },
  { title: "Essay Writing", description: "Explore the essentials of clear, effective essay writing.", timing: 20, numbOfQuestions: 12 },
  { title: "Geometry", description: "Solve problems involving shapes, angles, and measurement.", timing: 15, numbOfQuestions: 10 },
  { title: "Physics", description: "Review core principles of motion, forces, and energy.", timing: 20, numbOfQuestions: 15 },
  { title: "Literature", description: "Show what you know about literary works and techniques.", timing: 15, numbOfQuestions: 10 },
  { title: "Chemistry", description: "Practice concepts related to matter and chemical reactions.", timing: 20, numbOfQuestions: 15 },
  { title: "Geography", description: "Test your knowledge of places, maps, and environments.", timing: 15, numbOfQuestions: 10 },
  { title: "Grammar", description: "Review grammar rules, punctuation, and sentence structure.", timing: 10, numbOfQuestions: 10 },
  { title: "Computer Science", description: "Explore fundamental computing and programming concepts.", timing: 20, numbOfQuestions: 15 },
  { title: "Economics", description: "Review basic economic ideas, markets, and choices.", timing: 15, numbOfQuestions: 10 },
  { title: "Art History", description: "Identify influential periods, artists, and works of art.", timing: 15, numbOfQuestions: 10 },
];
