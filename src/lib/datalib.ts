import type { FeatureDataType } from "@/typesninterfaces/datatypes";
import { BrainCircuit, ChartNoAxesCombined, GraduationCap, Trophy, UserGroup } from "lucide-react";

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
    icon: ChartNoAxesCombined,
    title: "Insight Analytics",
    description: "Get access to a real-time analytical dashboard that tracks your performance on our platform.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Organize competitions that other users can participate and earn rewards based on your specifications.",
  },
];
