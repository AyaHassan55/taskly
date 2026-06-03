import SuccessIcon from "../assets/icons/Icon_success.svg"

interface IProps {



}

const SuccessAlert=({}:IProps)=> {
  return (
    <div className="w-full flex items-start bg-[#82F9BE33] border border-transparent text-green-700 p-4 gap-3 rounded-lg relative" >
      <img src={SuccessIcon} alt="Success" className="inline-block" />
      <p className="md:pr-[24.78px] text-[#005235] font-normal md:text-[14px] leading-[17.5px] ">If an account exists with this email, we’ve
sent a password reset link.</p>
      

    </div>
  )
}

export default SuccessAlert