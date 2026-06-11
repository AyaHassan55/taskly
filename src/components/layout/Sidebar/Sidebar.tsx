import iconLogo from "../../../assets/icons/Icon_logo.svg";
import collapseIcon from "../../../assets/icons/collabse-Icon.svg";
import logoutIcon from "../../../assets/icons/Icon-logout.svg"
import logoutUser from "../../../services/auth/logout.service";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { clearAuthStorage } from "../../../utils/clear-auth";
import Cookies from "js-cookie";
import { ROUTES } from "../../../constants/Routes";




import { useParams } from "react-router-dom";
import { getNavigationItems } from "../../../constants/Navigation";
interface IProps {
collapsed:boolean,
setCollapsed:React.Dispatch<React.SetStateAction<boolean>>;
}



const Sidebar = ({collapsed,setCollapsed}:IProps) => {
    

    const location = useLocation()
    const navigate = useNavigate();


const { projectId } = useParams();
const navigationItems = getNavigationItems(projectId);

    // logout logic
    const handleLogout = async () => {
        const token = Cookies.get("access_token");

        if (!token) {
            toast.error("No token found");
            navigate(ROUTES.LOGIN);
            return;
        }

        try {

            await logoutUser(token);
            clearAuthStorage()
            toast.success("Logged out successfully! ")
            navigate(ROUTES.LOGIN);

        } catch (err: any) {
            toast.error(err.message)

        }


    }
const isActive = (itemPath: string) => {
  if (itemPath === "/project") {
    return location.pathname === "/project"|| location.pathname === "/project/add";
  }

  return (
    location.pathname === itemPath ||
    location.pathname.startsWith(`${itemPath}/`)
  );
};

    return (
        <aside
            className={`bg-[#F1F3FF] text-black flex flex-col     fixed left-0 top-0
    h-screen
 transition-all duration-300  ${collapsed ? "w-20" : "w-64"
                }`}
        >
            {/* header */}
            <div
                className={`h-20 flex items-center  ${collapsed ? "justify-center px-0" : "px-6 gap-2"
                    }`}
            >
                <img src={iconLogo} alt="Logo" />

                {!collapsed && (
                    <h1 className="font-bold text-[20px] text-[#041B3C]">
                        TASKLY
                    </h1>
                )}
            </div>

            {/* items nav */}
            <div className="flex-1 px-2 space-y-2 mt-4">
                {navigationItems.map((item) => {
                    const active =isActive(item.path)
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            className={`flex items-center rounded-md cursor-pointer transition-all 
                ${collapsed
                                    ? "justify-center px-0 py-3"
                                    : "gap-3 px-3 py-3"
                                }
                ${active
                                    ? "bg-white text-[#003D9B] "
                                    : "text-[#041B3C] hover:bg-white/60"
                                }
              `}
                        >
                            <Icon
                                className={`w-5 h-5 ${active ? "text-[#003D9B]" : "text-[#041B3C] "
                                    }`}
                            />

                            {!collapsed && (
                                <span className="font-medium text-[14px]">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>



            <div className="border-t border-[#C3C6D633] mt-auto pt-6 px-2 ">
                {/* collapse */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`hidden md:flex items-center w-full px-3 py-2.5 transition-all cursor-pointer ${collapsed ? "justify-center" : "gap-3"
                        }`}
                >
                    <img
                        src={collapseIcon}
                        alt="toggle sidebar"
                        className={`w-[11.77px] h-5 transition-transform duration-300  ${collapsed ? "rotate-180 justify-center px-0" : ""
                            }`}
                    />{
                        !collapsed && (
                            <h1 className="font-medium text-[14px] leading-5  text-center text-[#041B3C]">Collapse</h1>
                        )
                    }

                </button>

                <div onClick={handleLogout}
                    className={`h-18 flex items-center gap-3 px-3 py-3 cursor-pointer ${collapsed ? "justify-center " : ""
                        }`}
                >
                    <img src={logoutIcon} alt="Logout" className="w-5 h-5" />

                    {!collapsed && (
                        <h1 className="font-medium text-[14px] text-[#BA1A1A] leading-5">
                            Logout
                        </h1>
                    )}
                </div>

            </div>

        </aside>
    );
};

export default Sidebar;