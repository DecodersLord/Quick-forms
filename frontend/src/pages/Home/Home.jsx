import { useNavigate } from "react-router";
import landingPageForm from "../../assets/landingPageForm.jpg";
function Home() {
    const navigate = useNavigate();
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={landingPageForm}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Quick Forms</h1>
                    <p className="py-6">
                        Welcome to Quick Forms! Simplify your data collection
                        with our easy-to-use form builder.
                    </p>
                    <button
                        className="btn btn-accent"
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
