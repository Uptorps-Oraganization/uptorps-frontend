import { AuthLayout } from "@/pages/authpage/AuthLayout";
import { SignIn } from "@/pages/authpage/Signin";
import { SignUp } from "@/pages/authpage/Signup";
import Homepage from "@/pages/HomePage";
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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
