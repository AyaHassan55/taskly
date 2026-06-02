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
import signupUser from "../services/auth/signup.service";
import toast from "react-hot-toast";
import FormInput from "../components/FormInput";

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
            navigate('/')
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
        <div className='flex justify-start md:justify-center px-6 md:px-0 mb-20'>
            <div className=" md:w-xl flex flex-col items-center justify-center pb-10 border border-transparent rounded-lg  md:shadow-[0px_24px_48px_0px_#041B3C0F]  p-12">
                {/* header form */}
                <header className="w-85.5 md:w-120 h-16 flex-col gap-2 pb-10 " >
                    <h1 className="md:text-center md:text-[30px] text-[28px] font-semibold md:leading-9 leading-10 md:tracking-[-0.75px] tracking-[-0.8px]">Create your workspace</h1>
                    <p className="w-120 h-5 md:text-center text-[14px] font-normal md:leading-5 leading-[22.75px] tracking-normal text-slate-700">
                        Join the editorial approach to task management.</p>

                </header>

                {/* main form */}
                <main className="w-85.5 md:w-120">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name input */}
                        <FormInput
                            label="Full Name"
                            placeholder="Enter your full name"
                            registration={register("fullName")}
                            error={errors.fullName}
                        />
                       

                        {/* email input */}
                        <FormInput
                            label="Email"
                            placeholder="Enter your email address"
                            registration={register("email")}
                            error={errors.email}
                        />

                        {/* Job title */}
                        <FormInput
                            label="Job Title (optional)"
                            placeholder="Enter your job title"
                            registration={register("jobTitle")}
                            error={errors.jobTitle}
                        />
                        {/* password */}
                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 w-120 mt-3'>
                            <div className="flex flex-col gap-2 w-full md:h-23.25 pb-2 relative">
                                <label htmlFor="password" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Password</label>

                                <input className="md:w-58 w-85.5  h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
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
                                    className="absolute md:left-50 left-70 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"

                                />
                                {errors.password && <p className=" text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal">{errors.password.message}</p>}

                            </div>

                            {/* --------confirm password-------------- */}
                            <div className="flex flex-col gap-2  w-full md:h-23.25">
                                <label htmlFor="confirmPassword" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Confirm Password</label>

                                <input className="md:w-58 w-85.5 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
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
                                {errors.confirmPassword && (
                                    <p className="text-[#C3C6D6] text-[11px] leading-[16.5px] tracking-normal">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* validation password */}
                        <div className="md:block hidden mt-2 bg-[#E8EDFF] rounded-lg p-4">
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
                        <button className="md:w-120 w-85.5  h-12 flex items-center justify-center cursor-pointer bg-linear-to-r from-[#0052CC] to-[#003D9B] rounded-sm text-white font-bold text-[16px] leading-[100%] tracking-normal mt-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit">
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
                    <p className="flex items-center gap-1 text-center text-[14px] font-normal leading-5 tracking-normal text-slate-700 ">Already have an account? <a href="/login" className="text-(--color-primary) font-semibold "> Log in</a></p>
                </footer>
            </div>
        </div>

    )
}

export default Signup