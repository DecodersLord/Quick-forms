import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import CreateForm from "./pages/CreateForm/CreateForm.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";

function App() {
    const { authUser } = useAuthContext();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Navigate to="/dashboard" /> : <Home />}
                />
                <Route
                    path="/dashboard"
                    element={authUser ? <Dashboard /> : <Navigate to={"/"} />}
                />
                <Route
                    path="/login"
                    element={
                        authUser ? <Navigate to="/dashboard" /> : <Login />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        authUser ? <Navigate to="/dashboard" /> : <Signup />
                    }
                />
                <Route
                    path="/create-form"
                    element={authUser ? <CreateForm /> : <Navigate to={"/"} />}
                />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
