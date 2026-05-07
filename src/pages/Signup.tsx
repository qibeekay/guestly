import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { UserRole } from "../components/auth/UserRole";
import { SignupForm } from "../components/auth/SignupForm";
import { VerifyForm } from "../components/auth/VerifyForm";
import { InterestPick } from "../components/auth/InterestPick";
import { LocationForm } from "../components/auth/LocationForm";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRoleNext = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleFormSubmit = (data: any) => {
    setEmail(data.email);
    setStep(3);
    // Send OTP API call here
  };

  const handleVerify = (code: string) => {
    console.log("Verify OTP:", code);
    setStep(4);
    // Verify OTP API call here
    // Redirect to dashboard on success
  };

  const handleLocation = () => {
    setStep(5);
    // Send OTP API call here
  };

  const handleResend = () => {
    console.log("Resend OTP to:", email);
    // Resend OTP API call
  };

  const handleInterests = (selected: string[]) => {
    navigate("/");
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <AuthLayout>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <UserRole onNext={handleRoleNext} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SignupForm onSubmit={handleFormSubmit} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <VerifyForm
              email={email}
              onVerify={handleVerify}
              onResend={handleResend}
            />
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LocationForm onSubmit={handleLocation} />
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <InterestPick onNext={handleInterests} onSkip={handleSkip} />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
