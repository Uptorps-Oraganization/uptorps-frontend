import { AuthInterceptorManager } from "@/api/ApiInterceptorManager";
import { ProtectedRoutes } from "@/components/PageComponents/sharedcomponents/ProtectedRoutes";
import { Toaster } from "@/components/ui/sonner";
import Homepage from "@/pages/HomePage";
import { AdminAccounts } from "@/pages/adminpage/Accounts";
import { AdminActionLayout } from "@/pages/adminpage/AdminActionLayout";
import { AdminCourses } from "@/pages/adminpage/Courses";
import { AdminDashboard } from "@/pages/adminpage/Dashboard";
import { AdminQuizzes } from "@/pages/adminpage/Quizzes";
import { AdminSettings } from "@/pages/adminpage/Settings";
import { LearnerReports } from "@/pages/adminpage/reports/LearnerReports";
import { TutorReports } from "@/pages/adminpage/reports/TutorReports";
import { AccountPasswordReset } from "@/pages/authpage/AccountPasswordReset";
import { AccountReset } from "@/pages/authpage/AccountReset";
import { AccountResetLinkSent } from "@/pages/authpage/AccountResetLinkSent";
import { AuthLayout } from "@/pages/authpage/AuthLayout";
import { SignIn } from "@/pages/authpage/SignIn";
import { SignUp } from "@/pages/authpage/SignUp";
import { VerificationConfirm } from "@/pages/authpage/VerificationConfirm";
import { VerificationLinkSent } from "@/pages/authpage/VerificationLinkSent";
import { LearnerCourses } from "@/pages/userpage/learnerpage/Courses";
import { LearnerDashboard } from "@/pages/userpage/learnerpage/Dashboard";
import { LearnerActionLayout } from "@/pages/userpage/learnerpage/LearnerActionLayout";
import { LearnerQuizzes } from "@/pages/userpage/learnerpage/Quizzes";
import { LearnerReferrals } from "@/pages/userpage/learnerpage/Referrals";
import { LearnerSettings } from "@/pages/userpage/learnerpage/Settings";
import { LearnerWallet } from "@/pages/userpage/learnerpage/Wallet";
import { TutorCourses } from "@/pages/userpage/tutorpage/Courses";
import { TutorDashboard } from "@/pages/userpage/tutorpage/Dashboard";
import { TutorQuizzes } from "@/pages/userpage/tutorpage/Quizzes";
import { TutorSettings } from "@/pages/userpage/tutorpage/Settings";
import { TutorActionLayout } from "@/pages/userpage/tutorpage/TutorActionLayout";
import { TutorWallet } from "@/pages/userpage/tutorpage/Wallet";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import { RememberAuthState } from "./components/PageComponents/authpage/RememberAuthState";

function App() {
  return (
    <>
      <HashRouter>
        <AuthInterceptorManager>
          <Routes>
            <Route index element={<Homepage />} />

            <Route path="/auth" element={<AuthLayout />}>
              <Route element={<RememberAuthState />}>
                <Route path="signup" element={<SignUp />} />
                <Route path="signin" element={<SignIn />} />
              </Route>

              <Route path="verificationemailsent" element={<VerificationLinkSent />} />
              <Route path="verifyemaillink/:token" element={<VerificationConfirm />} />
              <Route path="passwordreset" element={<AccountReset />} />
              <Route path="passwordreset/resetlinksent" element={<AccountResetLinkSent />} />
              <Route path="passwordreset/:resetlink" element={<AccountPasswordReset />} />
            </Route>

            <Route path="/adminpage" element={<AdminActionLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="courses" element={<AdminCourses />} />
                <Route path="quizzes" element={<AdminQuizzes />} />
                <Route path="accounts" element={<AdminAccounts />} />
                <Route path="settings" element={<AdminSettings />} />

                <Route path="reports">
                  <Route path="tutorreports" element={<TutorReports />} />
                  <Route path="learnerreports" element={<LearnerReports />} />
                </Route>
              </Route>
            </Route>

            <Route path="/userpage">
              <Route index element={<Navigate to="/auth/signin" replace />} />

              <Route path="learneractionpage" element={<LearnerActionLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />

                <Route element={<ProtectedRoutes />}>
                  <Route path="dashboard" element={<LearnerDashboard />} />
                  <Route path="courses" element={<LearnerCourses />} />
                  <Route path="quizzes" element={<LearnerQuizzes />} />
                  <Route path="referrals" element={<LearnerReferrals />} />
                  <Route path="wallet" element={<LearnerWallet />} />
                  <Route path="settings" element={<LearnerSettings />} />
                </Route>
              </Route>

              <Route path="tutoractionpage" element={<TutorActionLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />

                <Route element={<ProtectedRoutes />}>
                  <Route path="dashboard" element={<TutorDashboard />} />
                  <Route path="courses" element={<TutorCourses />} />
                  <Route path="quizzes" element={<TutorQuizzes />} />
                  <Route path="wallet" element={<TutorWallet />} />
                  <Route path="settings" element={<TutorSettings />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthInterceptorManager>
      </HashRouter>

      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
