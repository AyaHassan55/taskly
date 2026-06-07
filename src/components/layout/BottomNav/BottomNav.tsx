import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants/Navigation";

const BottomNav = () => {

  const location = useLocation()
  const navigate = useNavigate()


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] flex justify-around py-2 md:hidden z-40">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1"
          >
            <img src={item.icon} alt={item.label} className={`w-5 h-5 ${isActive ? "opacity-100" : "opacity-40"}`} />

            <span className={`text-[10px] leading-3.75 ${isActive ? "text-[#0052CC] font-semibold" : "text-[#041B3CB2] font-normal"} `}>
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