import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

interface IProps {



}

const AuthRedirect = ({ }: IProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        const hash = window.location.hash.replace('#', "")
        const params = new URLSearchParams(hash)
        const type = params.get("type");
        const accessToken = params.get("access_token");

        if (type === "recovery" && accessToken) {

            navigate(
                `/reset-password?access_token=${accessToken}`,
                { replace: true }
            );
        }
        console.log(window.location.href);
console.log(hash);
console.log(type);
console.log(accessToken);
    }, [navigate]);
   
    return null;
}

export default AuthRedirect