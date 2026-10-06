import { AuthLayout } from "@/pages/authpage/AuthLayout";
import { SignIn } from "@/pages/authpage/Signin";
import { SignUp } from "@/pages/authpage/Signup";
import { VerificationConfirm } from "@/pages/authpage/VerificationConfirm";
import { VerificationSent } from "@/pages/authpage/VerificationSent";
import Homepage from "@/pages/HomePage";
import { Courses } from "@/pages/userpage/Courses";
import { Dashboard } from "@/pages/userpage/Dashboard";
import { LearnerActionLayout } from "@/pages/userpage/LearnerActionLayout";
import { Quizzes } from "@/pages/userpage/Quizzes";
import { Referrals } from "@/pages/userpage/Referrals";
import { Route, BrowserRouter as Router, Routes } from "react-router";

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

          <Route path="learneractionpage" element={<LearnerActionLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Courses />} />
            <Route path="quizzes" element={<Quizzes />} />
            <Route path="referrals" element={<Referrals />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
