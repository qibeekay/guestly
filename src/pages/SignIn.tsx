import { motion } from "framer-motion";
import { AuthLayout } from "../components/auth/AuthLayout";
import { SigninForm } from "../components/auth/SignInForm";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <AuthLayout>
      <motion.div
        key="step2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <SigninForm onSubmit={handleLogin} />
      </motion.div>
    </AuthLayout>
  );
}
