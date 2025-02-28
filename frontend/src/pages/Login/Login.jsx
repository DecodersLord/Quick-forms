import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.jsx";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const { loading, handleLogin } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(inputs);

        await handleLogin({
            email: inputs.email,
            password: inputs.password,
        });
    };

    return (
        <>
            {/* component */}
            <div className="relative flex min-h-screen text-white font-bold antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <span className="text-2xl">Login to your account</span>
                    <form
                        className="mt-4 rounded-lg text-left shadow-xl shadow-accent"
                        onSubmit={handleSubmit}
                    >
                        <div className="h-2 bg-accent rounded-t-md " />
                        <span className="flex content-centerborder p-2 text-sm border-accent border-2 justify-center">
                            Use 'testuser@test.com' and '123456' as password
                        </span>
                        <div className="px-8 py-6 ">
                            <label className="block"> Email </label>
                            <input
                                type="text"
                                placeholder="Email"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        email: e.target.value,
                                    })
                                }
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                            />
                            <label className="block mt-3">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        password: e.target.value,
                                    })
                                }
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                            />
                            <Link
                                to="/signup"
                                className="block link hover:link-accent my-2"
                            >
                                New User? Register Here
                            </Link>
                            <div className="flex justify-between items-baseline">
                                <button
                                    type="submit"
                                    className="mt-4 bg-accent text-white py-2 px-6 rounded-md hover:bg-accent"
                                    {...(loading && { disabled: true })}
                                >
                                    {loading ? (
                                        <span className="loading loading-spinner"></span>
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                                <a href="#" className="text-sm hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
