import { useEffect, useState } from "react"
import { getUSer } from "../../../services/user.service";
import type { User } from "../../../types/user";
import { getAvatarLetters } from "../../../utils/get-avatar-letter";
import IconBurger from "../../../assets/icons/Icon-burger.svg"
interface NavbarProps {

onMenuClick: () => void;
}

const Navbar = ({ onMenuClick}: NavbarProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUSer();
                setUser(data);
                console.log(data)
                console.log('donreee')
            } catch (err) {
                console.log(err)
            }
        }
        fetchUser()


    }, []);




    if (!user) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <header className="h-16 bg-white border-b border-[#0000001A] px-3 py-6 flex items-center justify-between">
                    <div className="px-6 py-3 md:px-0 md:0 ">
                        <button className="md:hidden text-2xl cursor-pointer"  onClick={onMenuClick}>
                            <img src={IconBurger} className="h-3 w-4.5 " />
                        </button>
                        <span className="md:hidden ml-3 text-[#041B3C] font-bold text-[20px] leading-7 tracking-[-0.5px] ">TASKLY</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="font-semibold text-[14px] leading-5 text-slate-900 ">
                                {user.user_metadata.name}
                            </p>

                            <p className="text-bold text-[10px] leading-5 tracking-[1px] uppercase text-[#003D9B]">
                                {user.user_metadata.job_title}
                            </p>
                        </div>

                        <div className="w-10 h-10 rounded-lg bg-[#0052CC] shadow-[0px_1px_2px_0_#0000000D] text-white text-[16px] leading-6 font-bold flex items-center justify-center ">
                            {getAvatarLetters(user.user_metadata.name)}
                        </div>
                    </div>
                </header>

            </div>);
    }


}

export default Navbar