import toast from "react-hot-toast";
import iconTimer from "../assets/icons/Icon_timer.svg"
import { formatTime } from "../utils/format-time";
interface IProps {
    timeLeft: number;
    canResend: boolean;
    attempts: number;
    hasReachedLimit: boolean;
    restartTimer: () => void;
    incrementAttempts: () => void;


}

const ResendSection = ({timeLeft,canResend,attempts,hasReachedLimit,restartTimer,incrementAttempts }: IProps) => {
    
    const handleResend = async () => {
        if (!canResend) return;

        try {
            // await resendEmail();

            incrementAttempts();
            
            restartTimer();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        // desktop resend
        <div className="hidden md:flex flex-col items-center justify-center mt-6 gap-3 ">
            
            <h3 className="text-[11px] font-bold text-[#434654] leading-[16.5px] tracking-[0.55px] uppercase">Didn't receive the email?</h3>
            <button disabled={!canResend || hasReachedLimit} type="button"
                onClick={handleResend}
                className="w-full h-12 flex items-center justify-center cursor-pointer bg-[#F1F3FF]
                     rounded-sm text-[#737685] font-semibold text-[16px] leading-6 tracking-normal 
            ">
                <span><img src={iconTimer} /></span>
                <span className="ml-2"> {canResend ? `Resend Email` : `Resend in ${formatTime(timeLeft)}`}</span>
            </button>

        </div>
       

    )
}

export default ResendSection;