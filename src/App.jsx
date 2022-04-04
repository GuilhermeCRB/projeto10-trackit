import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import DailyProgress from "./contexts/DailyProgress";
import UserContext from "./contexts/UserContext";

import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import HabitScreen from "./components/HabitScreen";
import TodayScreen from "./components/TodayScreen";
import HistoryScreen from "./components/HistoryScreen";

export default function App() {
    const weekDays = new Map([
        [1, "Segunda"], [2, "Terça"], [3, "Quarta"], [4, "Quinta"],
        [5, "Sexta"], [6, "Sábado"], [0, "Domingo"]
    ]);
    const [user, setUser] = useState();
    const [dailyProgress, setDailyProgress] = useState();

    return (
        <DailyProgress.Provider value={{dailyProgress, setDailyProgress}}>
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInScreen />} />
                    <Route path="/cadastro" element={<SignUpScreen />} />
                    <Route path="/habitos" element={<HabitScreen weekDays={weekDays} />} />
                    <Route path="/hoje" element={<TodayScreen weekDays={weekDays} />} />
                    <Route path="/historico" element={<HistoryScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </DailyProgress.Provider>
    );
}