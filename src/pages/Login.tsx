

import { useForm } from 'react-hook-form';
import visualShadow from '../assets/images/Visual Accents (Editorial Texture).svg'
import { loginSchema, type LoginFormData } from '../schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';
import { useState } from 'react';
import loginUser from '../services/auth/login.service';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { saveTokens } from '../utils/auth-storage';
interface IProps {



}

const Login = ({ }: IProps) => {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});

// handle form submission
 const onSubmit = async (data: LoginFormData) => {
        try{
            setLoading(true);
            const res=await loginUser(data);
            saveTokens(res.access_token, res.refresh_token,data.rememberMe ?? false);
            console.log(res.access_token, res.refresh_token);
            toast.success("Logged in successfully! 🎉🎉");
            Navigate("/")
            
        }catch(error: any) {
          toast.error(error.message || "Something went wrong");

        }finally{
          setLoading(false);
        }
}
  return (
    <div className='w-full flex-1  md:min-h-screen flex md:items-center md:justify-center relative overflow-x-hidden'>
      <div className="hidden md:block">
        <img
          src={visualShadow}
          className="absolute bottom-0 right-0 w-64 h-64 z-50 object-cover"
        />
      </div>

      {/* <div className='flex justify-start md:justify-center px-6 md:px-0 mb-10 pb-10 '> */}
        <div className=" md:w-xl  flex flex-col items-center justify-start md:justify-center px-6 md:px-0 pb-10 border border-transparent rounded-lg  md:shadow-[0px_24px_48px_0px_#041B3C0F]  md:p-12 ">
          {/* header form */}
          <header className="w-full max-w-[384px] h-16 flex-col gap-2 pb-10  md:mb-0 mb-6" >
            <h1 className="text-center md:text-[30px] text-[28px] font-semibold md:leading-9 leading-10 md:tracking-[-0.75px] tracking-[-0.8px] mb-2">Welcome Back</h1>
            <p className="w-full max-w-[384px] h-5 text-center text-[14px] font-normal md:leading-5 leading-[22.75px] tracking-normal text-slate-700">
              Please enter your details to access your workspace.
            </p>


          </header>

          <main className="w-full max-w-97.5 md:w-120 mx-auto mt-7 md:mt-5">
            <form className="w-full " onSubmit={handleSubmit(onSubmit)} >
              {/* email input */}
              <FormInput 
                label="Email" placeholder="yourname@company.com" type="email" registration={register("email")} error={errors.email}
              
              />
              
              {/* password input */}
              <FormInput 
                label="Password" placeholder="Enter your password" type="password" registration={register("password")} error={errors.password}
              />

              

              {/* remember me and forgot password */}
              <div className="w-full flex items-center justify-between mt-5">
                <div className="flex items-center gap-2 md:w-[121.23px] ">
                  <input type="checkbox" id="remember" className="w-4 h-4 rounded-xs border border-[#C3C6D6] bg-(--color-surface-low) " {...register("rememberMe")} />
                  <label htmlFor="remember" className="text-[#434654] text-[14px] font-medium leading-5 tracking-normal">Remember Me</label>
                </div>
                <a href="/forgot-password" className="text-[var(--color-primary)] text-[14px] font-medium leading-5 tracking-normal">Forgot password?</a>
              </div>

              {/* login button */}
              <button className="mt-7 w-full h-12 flex items-center justify-center cursor-pointer bg-linear-to-r from-[#0052CC] to-[#003D9B] rounded-sm text-white font-bold text-[16px] leading-[100%] tracking-normal shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]" type="submit" disabled={loading}>
                {
                  loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin center"></div>
                  ) : ( 
                    <>
                      {/* mobile */}
                      <span className="md:hidden flex items-center gap-2"> Sign In<span>→</span></span>
                      {/* desktop */} 
                      <span className="hidden md:inline">Log in</span>
                    </>
                  )
                }
               
              </button>
              <div className="md:hidden flex justify-center mt-4">
                <img
                  src={visualShadow}
                  alt="visual shadow"
                  className="w-64 h-64 object-cover"
                />
              </div>


            </form>
          </main>
          {/* footer form */}
          <footer className="md:mt-20 flex justify-center">
            <p className="flex items-center gap-1 text-center text-[14px] font-normal leading-5 tracking-normal text-slate-700 ">Don't have an account?  <a href="/sign-up" className="text-(--color-primary) font-semibold "> Sign Up</a></p>
          </footer>

        </div>


      {/* </div> */}

    </div >
  )
}

export default Login