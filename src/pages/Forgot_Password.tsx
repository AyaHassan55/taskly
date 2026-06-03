import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../schemas/forgot_password.schema";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import backToLoginIcon from "../assets/icons/backlogin.svg"
import SuccessAlert from "../components/SuccessAlert";
import { useResendTimer } from "../hooks/useResendTimer";
import ResendSection from "../components/ResendSection";
import toast from "react-hot-toast";
import forgotPassword from "../services/auth/forgot-password.service";
interface IProps {



}

const Forgot_Password = ({ }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const {
    timeLeft,
    attempts,
    canResend,
    hasReachedLimit,
    restartTimer,
    incrementAttempts,
  } = useResendTimer();

   useEffect(()=>{
     if(hasReachedLimit){
      toast.error('You have reached the maximum number of resend attempts.')
     }
   },[hasReachedLimit])
  // handle form submission
  const onSubmit =async (data: ForgotPasswordFormData) => {
    try {
      setLoading(true);
      await forgotPassword(data.email)
      
      setIsSuccess(true);
      restartTimer()
      console.log(data)
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      console.log(error.message)
    } finally { setLoading(false) }
  }
  return (
    <div className="flex justify-center align-center min-h-screen w-full " >
      {/* card */}
      <div className="card md:w-md flex-col  justify-start border border-transparent rounded-lg md:shadow-[0px_24px_48px_-12px_#041B3C0F] md:p-10" >
        {/* Header */}
        <header className="flex flex-col justify-start align-center  mt-10 gap-1.75">
          <h1 className="md:text-[32px] font-semibold leading-10 tracking-[-0.8px] ">Forgot Password</h1>
          <p className="text-[#434654] md:text-[14px] font-normal leading-[22.75px] tracking-normal md:pb-[0.75px]">
            No worries, we'll send you reset instructions.
          </p>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start align-center gap-6 mt-6 w-full" >
          <FormInput label="Email address" placeholder="Enter your email" type="email" registration={register("email")} error={errors.email} />
          {/* submit button */}
          <button className="w-full  h-12 flex items-center justify-center cursor-pointer bg-linear-to-r 
                        from-[#0052CC] to-[#003D9B] rounded-sm text-white font-semibold text-[16px] leading-6 tracking-normal mt-6
                         shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit" disabled={loading}>
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin center"></div>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <div className="w-full flex items-center justify-center md:gap-[3.99px]">
            <a href="/login" className="text-[var(--color-primary)] text-[14px] font-medium leading-5 tracking-normal"> <span>
              <img src={backToLoginIcon} className="inline-block mr-1" />
            </span>Back to Login</a>
          </div>
          {isSuccess && (
            <div className="flex flex-col gap-3">
              <SuccessAlert />
              <ResendSection timeLeft={timeLeft}
                canResend={canResend}
                attempts={attempts}
                hasReachedLimit={hasReachedLimit}
                restartTimer={restartTimer}
                incrementAttempts={incrementAttempts} />
            </div>
          )}



        </form>


      </div>

    </div>
  );
}

export default Forgot_Password