import Cookies from "js-cookie";
export const clearAuthStorage = ()=>{
    Cookies.remove("access_token");
            Cookies.remove("refresh_token");

            sessionStorage.clear();


            document.cookie.split(";").forEach((cookie) => {
                document.cookie = cookie
                    .replace(/^ +/, "")
                    .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
            });

}