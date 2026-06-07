import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/ui/FormInput";
import { forgotPasswordSchema, type ForgotPasswordFormData } from "../../schemas/forgot_password.schema";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import backToLoginIcon from "../../assets/icons/backlogin.svg"
import SuccessAlert from "../../components/SuccessAlert";
import { useResendTimer } from "../../hooks/useResendTimer";
import ResendSection from "../../components/ResendSection";
import toast from "react-hot-toast";
import forgotPassword from "../../services/auth/forgot-password.service";
import ResendIcon from "../../assets/icons/resend-Icon.svg"
import SuccessIcon from "../../assets/icons/Icon_success.svg"
import { formatTime } from "../../utils/format-time";
import  { ROUTES } from "../../constants/Routes";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    if (hasReachedLimit) {
      toast.error('You have reached the maximum number of resend attempts.')
    }
  }, [hasReachedLimit])
  // handle form submission
  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setLoading(true);
      await forgotPassword(data.email)
      toast.success('success')

      setIsSuccess(true);
      restartTimer()
      
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
      
    } finally { setLoading(false) }
  }
  return (
     <div className="min-h-screen flex items-center justify-center"  >
     
    {/* card */}
      <div className="card md:w-md flex flex-col  md:justify-start justify-center border border-transparent rounded-lg 
      md:shadow-[0px_24px_48px_-12px_#041B3C0F] p-10
      shadow-[0px_24px_48px_-12px_#041B3C0F ]  "
      >
        <div className="md:hidden w-12 h-12 rounded-xl bg-[#D7E2FF] flex items-center justify-center mx-auto">
          <img src={ResendIcon} alt="resend icon " />
        </div>
        {/* Header */}
        
        <header className="flex flex-col justify-start items-center md:items-start  md:mt-10 gap-1.75">
          <h1 className="md:text-[32px] text-[24px] font-semibold md:leading-10 leading-8 md:tracking-[-0.8px] tracking-normal text-[#041B3C] md:mt-0 mt-5 ">Forgot password?</h1>
          <p className="text-[#434654] text-center md:text-start md:text-[14px] font-normal md:leading-[22.75px] leading-5 tracking-normal md:pb-[0.75px] pb-8 ">
            No worries, we'll send you reset instructions.
          </p>
        </header> 
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col justify-start items-center gap-6 mt-6 w-full" >
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

          <div className="w-full flex items-center justify-center md:gap-[3.99px] mb-4">
            <Link to={ROUTES.LOGIN} className="text-(--color-primary) text-[14px] font-medium leading-5 tracking-normal"> <span>
              <img src={backToLoginIcon} className="inline-block mr-1" />
            </span>Back to Login</Link>
          </div>
          <div className="md:block hidden">
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

          </div>


        </form>
        <div className="md:hidden block">
          {isSuccess && (
            <>
              <div className="w-full flex flex-col items-start bg-[#82F9BE33] border border-transparent text-green-700 p-4 gap-3 rounded-lg relative" >
                <div className="flex items-start justify-center gap-3">
                  <img src={SuccessIcon} alt="Success" className="inline-block" />
                  <p className=" md:pr-[24.78px] text-[#005235] md:font-normal font-medium md:text-[14px] text-[12px] md:leading-[17.5px] leading-[19.5px] ">If an account exists with this email, we’ve
                    sent a password reset link.</p>
                </div>
                 
                <div className="border-t border-slate-300 flex items-center justify-between gap-3 pt-3">
                   <h3 className="text-[11px] font-bold text-[#00523599] leading-[16.5px] tracking-[1.1px] uppercase">Didn't receive the email?</h3>
                   <button className="text-[#003D9B] font-bold text-[11px] leading-[16.5px] tracking-[1.1px] uppercase    ">
                     {canResend ? `Resend Email` : `Resend in ${formatTime(timeLeft)}`}
                   </button>

                </div>




              </div></>
          )}

        </div>

      </div>

    </div >
  );
}

export default Forgot_Password