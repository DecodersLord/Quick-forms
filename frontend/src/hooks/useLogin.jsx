import { useState } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

function useLogin() {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const handleLogin = async ({ email, password }) => {
        const isSuccess = handleInputValidation({
            email,
            password,
        });
        console.log(email, password);
        if (!isSuccess) return;
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            //localstorage
            localStorage.setItem("form-app-user", JSON.stringify(data));
            //context
            setAuthUser(data);
        } catch (error) {
            console.log("Here " + error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, handleLogin };
}

export default useLogin;

function handleInputValidation({ email, password }) {
    if (email === "" || password === "") {
        toast.error("Please fill all the fields");
        return false;
    }

    return true;
}
