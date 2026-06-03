import { useState } from "react"
import eyeShow from "../assets/icons/Icon_show_pass.svg"
import iconEmptyCheck from "../assets/icons/icon_empty_check.svg"
import iconSelect from "../assets/icons/icon_right.svg"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { resetPasswordSchema, type ResetPasswordFormData } from "../schemas/reset_password.schema"
import updatePassword from "../services/auth/reset-password.service"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface IProps {



}

const Reset_Password = ({ }: IProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        watch,
       
        formState: { errors },

    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        mode: 'onChange',
    });
    const password = watch('password', "");
    const passwordChecks = {
        length: password.length >= 8 && password.length < 64,
        uppercase: /[A-Z]/.test(password) ,
        lowercase :/[a-z]/.test(password),

        digit: /\d/.test(password),
        special: /[!@#$%^&*]/.test(password),
    }
    const hash = window.location.hash;

const accessToken = new URLSearchParams(
  hash.replace("#", "")
).get("access_token");

// handel submit 
    const onSubmit = async (data: ResetPasswordFormData) => {
  try {
    setLoading(true);

    if (!accessToken) {
      toast.error("Invalid or expired reset link");
      return;
    } 

    await updatePassword(
      data.password,
      accessToken
    );

    toast.success(
      "Your password has been updated successfully. You can now log in"
    );

    setTimeout(() => {
      navigate("/login");
    }, 3000);

  } catch (error: any) {
    toast.error(
      error.message || "Failed to update password"
    );
  } finally {
    setLoading(false);
  }
};
    return (
        <div className="flex justify-center align-center min-h-screen w-full ">
            <div className=" md:w-lg flex-col  justify-start border border-transparent rounded-lg md:shadow-[0px_24px_48px_-12px_#041B3C0F] md:p-10">
                {/* Header */}
                <header className="flex flex-col justify-start align-center  mt-10 gap-1.75">
                    <h1 className="md:text-[32px] font-semibold leading-10 tracking-[-0.8px] ">Create a New Password</h1>
                    <p className="mt-2 text-[#434654] md:text-[14px] font-normal leading-5 tracking-normal md:pb-[0.75px]">
                        Create a new, strong password to secure your workstation
                        access.
                    </p>
                </header>
                <form className="w-full gap-6 mt-7" onSubmit={handleSubmit(onSubmit)}>
                    {/* create new pass */}
                    <div className="flex flex-col gap-2 w-full md:h-23.25 pb-2 relative">
                        <label htmlFor="password" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>New Password</label>

                        <input className="h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                        {...register("password")}

                        />
                        <img
                            src={eyeShow}
                            alt="toggle password"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute md:left-98 left-70 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"

                        />
                        {errors.password && <p className=" text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal mb-1">{errors.password.message}</p>}

                    </div>
                    {/* confirm new pass */}
                    <div className="flex flex-col gap-2  w-full md:h-23.25  mt-2">
                        <label htmlFor="confirmPassword" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Confirm Password</label>

                        <input className="h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                                      placeholder:text-[#737685] 
                                        placeholder:text-[16px] 
                                        placeholder:leading-[100%] 
                                        placeholder:tracking-normal 
                                        placeholder:font-normal
                        
                        
                        "
                            placeholder="Repeat password" type="password"
                        {...register("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                                    <p className="text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                    </div>

                    {/* password instructions */}
                    <div className="border border-[#C3C6D61A] p-5  gap-4  ">
                        {/*------------ title--------------- */}
                        <div className="border-b border-b-[#C3C6D633]  pb-2">
                            <p className="text-[#434654] font-bold text-[11px] leading-[16.5px] tracking-[0.55px] uppercase   ">Security Requirements</p>
                        </div>
                        {/* ------instructions ---------------- */}
                        <div className="md:grid md:grid-cols-2 grid-cols-1 hidden mt-2  rounded-lg p-4">
                            <div className="flex items-center gap-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.length
                                                ? iconSelect
                                                : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className={`font-normal text-[13px] leading-[19.5px] tracking-normal ${passwordChecks.length? "text-[#041B3C]":"text-slate-400"}`}>
                                    8-64 characters
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.uppercase
                                                ? iconSelect
                                                : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className={`font-normal text-[13px] leading-[19.5px] tracking-normal ${passwordChecks.uppercase? "text-[#041B3C]":"text-slate-400"}`}>
                                    Uppercase letter 
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.lowercase
                                                ? iconSelect
                                                : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className={`font-normal text-[13px] leading-[19.5px] tracking-normal ${passwordChecks.lowercase? "text-[#041B3C]":"text-slate-400"}`}>
                                    Lowercase letter 
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.digit
                                                ? iconSelect
                                                : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className={`font-normal text-[13px] leading-[19.5px] tracking-normal ${passwordChecks.digit? "text-[#041B3C]":"text-slate-400"}`}>
                                    One Digit
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.special ? iconSelect : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className={`font-normal text-[13px] leading-[19.5px] tracking-normal ${passwordChecks.special? "text-[#041B3C]":"text-slate-400"}`} >
                                    Special character
                                </p>
                            </div>
                        </div>

                        {/*------- update pass button---------------- */}
                         <button className="w-full h-12 flex items-center justify-center cursor-pointer bg-linear-to-r 
                        from-[#0052CC] to-[#003D9B] rounded-sm text-white font-bold text-[16px] leading-[100%] tracking-normal mt-6
                         shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit" disabled={loading}>
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin center"></div>
                            ) : (
                                "Update Password"
                            )}
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Reset_Password