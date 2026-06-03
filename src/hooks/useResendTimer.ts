import { useEffect, useState } from "react";


const max_attempts=3;
const inital_time=300;
export const useResendTimer=()=>{
    const [timeLeft, setTimeLeft] = useState(inital_time);
    const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const restartTimer = () => {
    setTimeLeft(inital_time);
  };

  const incrementAttempts = () => {
    setAttempts((prev) => prev + 1);
  };

  const canResend =
    timeLeft === 0 &&
    attempts < max_attempts;

  const hasReachedLimit =
    attempts >= max_attempts;

  return {
    timeLeft,
    attempts,
    canResend,
    hasReachedLimit,
    restartTimer,
    incrementAttempts,
  };



}

