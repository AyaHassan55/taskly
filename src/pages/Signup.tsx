import { useForm, type SubmitHandler } from "react-hook-form";
interface IProps {



}
type Inputs = {
    fullName: string
    email: string
    jobTitle: string
    password: string
    confirmPassword: string
}
const Signup = ({ }: IProps) => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors },

    } = useForm<Inputs>();
    const password = watch('password');

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
    <div className='w-full flex justify-center mb-20'>
        <div className=" w-xl flex flex-col items-center justify-center pb-10 border border-transparent rounded-lg  shadow-[0px_24px_48px_0px_#041B3C0F]  p-[48px]">
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

                        <input className="w-120 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "
                            placeholder="Enter your full name" type="text"
                            {...register("fullName", {
                                required: "3-50 characters, letters only.",
                            })}
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
                            {...register("email", {
                                required: "Please enter a valid email address.",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email address."
                                }
                            })}
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
                        <div className="flex flex-col gap-2 w-120 h-23.25">
                            <label htmlFor="password" className='text-slate-700 font-bold text-[11px] tracking-[0.55px] leading-[16.5px] uppercase '>Password</label>

                            <input className="w-58 h-12 border border-transparent rounded-sm py-3.5 px-4 bg-(--color-surface-highest)
                        placeholder:text-[#737685] 
                        placeholder:text-[16px] 
                        placeholder:leading-[100%] 
                        placeholder:tracking-normal 
                        placeholder:font-normal
                        
                        
                        "
                                placeholder="Password"
                                type="password"
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 6 characters long."
                                    }
                                })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}

                        </div>
                       
                        {/* --------confirm password-------------- */}
                        <div className="flex flex-col gap-2 w-120 h-23.25">
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
                                        value === password ||
                                        "Passwords do not match",
                                })}
                            />
                        </div>
                    </div>

                    {/* submit button */}
                    <button className="w-120 h-12 cursor-pointer bg-linear-to-r from-[#0052CC] to-[#003D9B] rounded-sm text-white font-bold text-[16px] leading-[100%] tracking-normal mt-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit">Create Account</button>
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