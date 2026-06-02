import iconLogo from "../assets/icons/Icon_logo.svg"
interface IProps {



}

const Header=({}:IProps)=> {
  return (
    <header className="flex items-center  md:px-10 px-6 gap-1 h-20 ">
        <img src={iconLogo} alt="Logo" />
        <h1 className="h-7 w-[177.66px] text-slate-900 font-bold text-[20px] leading-7 tracking-[-0.5px]">TASKLY</h1>
    </header>
  )
}

export default Header