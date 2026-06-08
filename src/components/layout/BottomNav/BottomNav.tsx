import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants/Navigation";

const BottomNav = () => {

  const location = useLocation()
  const navigate = useNavigate()


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] flex justify-around py-2 md:hidden z-40">
      {NAVIGATION_ITEMS.map((item) => {
        const active = item.activePaths.some(
                        (route) =>
                            location.pathname === route ||
                            location.pathname.startsWith(`${route}/`)
                    );
         const Icon = item.icon;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1"
          >
            <Icon
                                className={`w-5 h-5 ${active ? "text-[#003D9B]" : "text-[#041B3C] hover:text-[#003D9B]"
                                    }`}
                            />


            <span className={`text-[10px] leading-3.75 ${active ? "text-[#0052CC] font-semibold" : "text-[#041B3CB2] font-normal"} `}>
              {item.label}
            </span>
          </button>
        );



      }
      )}
    </div>
  );
};

export default BottomNav;