import { useEffect } from "react";
import { logout } from "../../utils/auth";
import Toast from "../plugin/Toast";
import { useNavigate } from "react-router-dom";
function Logout() {

        const navigate = useNavigate();

        useEffect(() => {
                logout();
                Toast().fire({
                        icon: "success",
                        title: "You have been logged out",
                });
                navigate("/");

        }, []);
        return (
                <>
                        
                </>
        );
}

export default Logout;


// //<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// <div className="bg-white shadow-md rounded-lg p-4">
// 1
// </div>
// <div className="bg-white shadow-md rounded-lg p-4">
// 2
// </div>
// <div className="bg-white shadow-md rounded-lg p-4">
// 3
// </div>

// </div>