import { useState } from "react";
import Navbar from "../../components/layout/Navbar/Navbar"
import Sidebar from "../../components/layout/Sidebar/Sidebar"
import BottomNav from "../../components/layout/BottomNav/BottomNav";

interface IProps {



}

const Dashboard = ({ }: IProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="flex min-h-screen">

            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex-1 ">
                <Navbar onMenuClick={() => setOpenMenu(true)} />
                {openMenu && (
                    <div className="fixed inset-0 z-50">

                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setOpenMenu(false)}
                        />

                        <div className="absolute left-0 top-0 h-full w-64 bg-[#F1F3FF]">
                            <Sidebar />
                        </div>

                    </div>
                )}
            </div>
            {
                !openMenu && <BottomNav />
            }
           
        </div>
    )
}

export default Dashboard