import {Routes, Route, useNavigate} from "react-router-dom";
import MainPage from "./components/MainPage.tsx"
import LoginSignupPage from "./components/account/LoginSignupPage.tsx";
import DeleteAccountPage from "./components/account/DeleteAccountPage.tsx";
import PasswordResetPage from "./components/account/PasswordResetPage.tsx";
import {useEffect} from "react";

function App() {

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();

    const checkCookie = async () => {
        let responseJson;
        try {
            const response = await fetch(baseUrl + '/user/validate', {
                method: "post",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
            });
            responseJson = await response.json();
            console.log(responseJson.message);
        } catch(err) {
            navigate("/loginSignup");
        }
        console.log(responseJson);
    }

    useEffect(() => {
        checkCookie();
    }, []);

    return (
        <Routes>
            <Route index element={<MainPage/>}></Route>
            <Route path={"/loginSignup"} element={<LoginSignupPage/>}></Route>
            <Route path={"/deleteAccount"} element={<DeleteAccountPage/>}></Route>
            <Route path={"/passwordReset"} element={<PasswordResetPage/>}></Route>
        </Routes>
    );
}

export default App
