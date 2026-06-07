import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecoveryHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const hash = window.location.hash?.substring(1);
    const search = window.location.search;

    const hashParams = new URLSearchParams(hash);
    const searchParams = new URLSearchParams(search);

   
    const type =hashParams.get("type") || searchParams.get("type");

    const accessToken =hashParams.get("access_token") || searchParams.get("access_token");

    if (type === "recovery" && accessToken) {
    
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );

     
      navigate(
        `/reset-password?access_token=${accessToken}`,
        { replace: true }
      );
    }
  }, [navigate]);

  return null;
}