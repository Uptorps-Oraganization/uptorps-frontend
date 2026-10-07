import Homepage from "@/pages/HomePage";
import { AdminAccounts } from "@/pages/adminpage/Accounts";
import { AdminActionLayout } from "@/pages/adminpage/AdminActionLayout";
import { AdminCourses } from "@/pages/adminpage/Courses";
import { AdminDashboard } from "@/pages/adminpage/Dashboard";
import { AdminQuizzes } from "@/pages/adminpage/Quizzes";
import { LearnerReports } from "@/pages/adminpage/reports/LearnerReports";
import { TutorReports } from "@/pages/adminpage/reports/TutorReports";
import { AuthLayout } from "@/pages/authpage/AuthLayout";
import { SignIn } from "@/pages/authpage/Signin";
import { SignUp } from "@/pages/authpage/Signup";
import { VerificationConfirm } from "@/pages/authpage/VerificationConfirm";
import { VerificationSent } from "@/pages/authpage/VerificationSent";
import { LearnerCourses } from "@/pages/userpage/learnerpage/Courses";
import { LearnerDashboard } from "@/pages/userpage/learnerpage/Dashboard";
import { LearnerActionLayout } from "@/pages/userpage/learnerpage/LearnerActionLayout";
import { LearnerQuizzes } from "@/pages/userpage/learnerpage/Quizzes";
import { LearnerReferrals } from "@/pages/userpage/learnerpage/Referrals";
import { LearnerWallet } from "@/pages/userpage/learnerpage/Wallet";
import { TutorCourses } from "@/pages/userpage/tutorpage/Courses";
import { TutorDashboard } from "@/pages/userpage/tutorpage/Dashboard";
import { TutorQuizzes } from "@/pages/userpage/tutorpage/Quizzes";
import { TutorActionLayout } from "@/pages/userpage/tutorpage/TutorActionLayout";
import { TutorWallet } from "@/pages/userpage/tutorpage/Wallet";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="auth" element={<AuthLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="verificationemailsent" element={<VerificationSent />} />
            <Route path="verifyemaillink/:token" element={<VerificationConfirm />} />
          </Route>

          <Route path="adminpage" element={<AdminActionLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="quizzes" element={<AdminQuizzes />} />
            <Route path="accounts" element={<AdminAccounts />} />
            <Route path="reports">
              <Route path="tutorreports" element={<TutorReports />} />
              <Route path="learnerreports" element={<LearnerReports />} />
            </Route>
          </Route>

          <Route path="userpage">
            <Route index element={<Navigate to="/auth/signin" replace />} />

            <Route path="learneractionpage" element={<LearnerActionLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<LearnerDashboard />} />
              <Route path="courses" element={<LearnerCourses />} />
              <Route path="quizzes" element={<LearnerQuizzes />} />
              <Route path="referrals" element={<LearnerReferrals />} />
              <Route path="wallet" element={<LearnerWallet />} />
            </Route>

            <Route path="tutoractionpage" element={<TutorActionLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<TutorDashboard />} />
              <Route path="courses" element={<TutorCourses />} />
              <Route path="quizzes" element={<TutorQuizzes />} />
              <Route path="wallet" element={<TutorWallet />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
