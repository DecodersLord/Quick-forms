import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom";
const Signup = () => {
    const { loading, handleSignUp } = useSignup();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await handleSignUp(inputs);
    };

    return (
        <>
            {/* component */}
            <div className="relative flex min-h-screen text-white font-bold antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div className="relative py-3 sm:w-96 mx-auto text-center">
                    <span className="text-2xl">Sign Up</span>
                    <form
                        className="mt-4 rounded-lg text-left shadow-xl shadow-accent"
                        onSubmit={handleSubmit}
                    >
                        <div className="h-2 bg-accent rounded-t-md " />
                        <div className="px-8 py-6">
                            <label className="block"> Name </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <label className="block mt-3"> Email </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        email: e.target.value,
                                    })
                                }
                            />
                            <label className="block mt-3">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        password: e.target.value,
                                    })
                                }
                            />
                            <label className="block mt-3">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-accent focus:ring-1 rounded-md"
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        confirmPassword: e.target.value,
                                    })
                                }
                            />
                            <Link
                                to="/login"
                                className="block link hover:link-accent my-3"
                            >
                                Already have an account? Login Here
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
                                        "Sign Up"
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
