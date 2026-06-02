import iconEmptyCheck from "../assets/icons/icon_empty_check.svg"
import iconSelect from "../assets/icons/icon_right.svg"
import eyeShow from "../assets/icons/Icon_show_pass.svg"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import { zodResolver } from "@hookform/resolvers/zod";
import {
    signupSchema,
    type SignupFormData,
} from "../schemas/signup.schema";
import { useState } from "react";
import signupUser from "../services/auth.service";
import toast from "react-hot-toast";

interface IProps {


}

const Signup = ({ }: IProps) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },

    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        mode: 'onChange',
    });
    const password = watch('password', "");
    const passwordChecks = {
        length: password.length >= 8,
        upperLower: /[A-Z]/.test(password) && /[a-z]/.test(password),

        digit: /\d/.test(password),
        special: /[!@#$%^&*]/.test(password),
    }

    const onSubmit = async (data: SignupFormData) => {
        try {
            setLoading(true);
            await signupUser(data);
            toast.success("Account created successfully! 🎉🎉");
            navigate('/project')
        }
        catch (error: any) {
            toast.error(error.message || "Something went wrong");
            console.error(error.message);
        }
        finally {
            setLoading(false)
        }

    }
    return (
        <div className='w-full flex justify-center mb-20'>
            <div className=" w-xl flex flex-col items-center justify-center pb-10 border border-transparent rounded-lg  shadow-[0px_24px_48px_0px_#041B3C0F]  p-12">
                {/* header form */}
                <header className=" w-120 h-16 flex-col gap-2 pb-10" >
                    <h1 className="w-120 h-9 text-center text-[30px] font-semibold leading-9 tracking-[-0.75px]">Create your workspace</h1>
                    <p className="w-120 h-5 text-center text-[14px] font-normal leading-5 tracking-normal text-slate-700">
                        Join the editorial approach to task management.</p>

                </header>

                {/* main form */}
                <main>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name input */}
                        <div className="flex flex-col gap-2 w-120 h-23.25">
                            <label htmlFor="fullName" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Full Name</label>

                            <input className="w-120 h-12 border border-transparent rounded-sm  focus:border-blue-500 py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "

                                placeholder="Enter your full name" type="text"
                                {...register("fullName")}
                            />
                        </div>
                        {errors.fullName && <p className="text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal">{errors.fullName.message}</p>}
                        {/* email input */}
                        <div className="flex flex-col gap-2 w-120 h-23.25">
                            <label htmlFor="email" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Email</label>

                            <input className="w-120 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "
                                placeholder="yourname@company.com" type="email"
                                {...register("email")}

                            />
                        </div>
                        {errors.email && <p className="text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal">{errors.email.message}</p>}

                        {/* Job title */}
                        <div className="flex flex-col gap-2 w-120 h-23.25">
                            <label htmlFor="jobTitle" className='text-slate-700 font-bold 
                        text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '
                            >Job Title <span className="font-[400px] text-[11px] leading-[100%] tracking-normal lowercase text-[#737685] ">(optional)</span></label>

                            <input className="w-120 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "
                                placeholder="e.g. Project Manager"
                                {...register("jobTitle")}
                            />
                        </div>

                        {/* password */}
                        <div className='grid grid-cols-2 gap-4 w-120 '>
                            <div className="flex flex-col gap-2 w-full h-23.25 relative">
                                <label htmlFor="password" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Password</label>

                                <input className="w-58 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
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
                                    className="absolute left-50 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"

                                />
                                {errors.password && <p>{errors.password.message}</p>}

                            </div>

                            {/* --------confirm password-------------- */}
                            <div className="flex flex-col gap-2 w-full h-23.25">
                                <label htmlFor="confirmPassword" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Confirm Password</label>

                                <input className="w-58 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                                      placeholder:text-[#737685] 
                                        placeholder:text-[16px] 
                                        placeholder:leading-[100%] 
                                        placeholder:tracking-normal 
                                        placeholder:font-normal
                        
                        
                        "
                                    placeholder="Repeat password" type="password"
                                    {...register("confirmPassword", {
                                        required: "Confirm your password",

                                        validate: (value) =>
                                            value === getValues("password") ||
                                            "Passwords do not match",
                                    })}
                                />
                            </div>
                        </div>
                        <div className="mt-2 bg-[#E8EDFF] rounded-lg p-4">
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

                                <p className="text-[11px] text-[#434654] ">
                                    At least 8 characters
                                </p>
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <span>
                                    <img
                                        src={
                                            passwordChecks.upperLower && passwordChecks.digit
                                                ? iconSelect
                                                : iconEmptyCheck
                                        }
                                        alt="check icon"
                                    />
                                </span>

                                <p className="text-[11px] text-[#434654] ">
                                    One uppercase, lowercase and
                                    digit
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

                                <p className="text-[11px] text-[#434654] ">
                                    One special character
                                </p>
                            </div>
                        </div>

                        {/* submit button */}
                        <button className="w-120 h-12 flex items-center justify-center cursor-pointer bg-linear-to-r from-[#0052CC] to-[#003D9B] rounded-sm text-white font-bold text-[16px] leading-[100%] tracking-normal mt-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit">
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin center"></div>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>
                </main>
                {/* footer form */}
                <footer className="mt-6 flex justify-center">
                    <p className="flex items-center gap-1 text-center text-[14px] font-normal leading-5 tracking-normal text-slate-700 ">Already have an account? <a href="#" className="text-(--color-primary) font-semibold "> Log in</a></p>
                </footer>
            </div>
        </div>

    )
}

export default Signup