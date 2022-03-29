import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import HabitScreen from "./components/HabitScreen";
import TodayScreen from "./components/TodayScreen";
import HistoryScreen from "./components/HistoryScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInScreen />} />
                <Route path="/cadastro" element={<SignUpScreen />} />
                <Route path="/habitos" element={<HabitScreen />} />
                <Route path="/hoje" element={<TodayScreen />} />
                <Route path="/historico" element={<HistoryScreen />} />
            </Routes>
        </BrowserRouter>
    );
}