import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

function LogoutButton() {
    const { logout } = useLogout();

    return (
        <div className="fixed bottom-4 left-4">
            <div
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-500 cursor-pointer"
                onClick={logout}
            >
                <CiLogout className="h-6 w-6 text-gray-700 hover:text-white" />
            </div>
        </div>
    );
}

export default LogoutButton;
