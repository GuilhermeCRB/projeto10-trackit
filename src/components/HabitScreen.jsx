import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styledComponents from "styled-components";

import Header from "./Header";
import AddHabitForm from "./AddHabitForm";
import Habit from "./Habit";
import Menu from "./Menu";

export default function HabitScreen() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const { user } = useContext(UserContext);
    const config = {
        headers: {"Authorization": `Bearer ${user.token}`}
    }
    const days = new Map([
        [1, "S"], [2, "T"], [3, "Q"], [4, "Q"], [5, "S"], [6, "S"], [7, "D"]
    ]);
    
    const [addHabit, setAddHabit] = useState(false);

    useEffect(() => {
        const promise = axios.get(URL, config);
        promise.then(sucesso); promise.catch(warnError);
    }, []);

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function sucesso(response) {
        console.log(response);
    }

    return (
        <section>
            <Header />
            <MainStyle>
                <AddHabitHeader setAddHabit={setAddHabit} />
                {addHabit && <AddHabitForm setAddHabit={setAddHabit} days={days} />}
                <ul>
                    <Habit />
                </ul>
            </MainStyle>
            <Menu />
        </section>
    );
}

function AddHabitHeader({ setAddHabit }) {
    return (
        <div className="add-habits">
            <h2>Meus hábitos</h2>
            <div className="add-habits-icon" onClick={() => setAddHabit(true)} >
                <p>+</p>
            </div>
        </div>
    );
}

const MainStyle = styledComponents.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 70px;
    background-color: var(--background-screen);

    .add-habits{
        display: flex;
        align-items:center;
        justify-content: space-between;
        width: 90vw;
        padding: 25px 0;
    }

    h2{
        font-size: 24px;
        color: var(--h2);
    }

    .add-habits-icon{
        display: flex;
        align-items:center;
        justify-content: center;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: var(--background-icon);
    }

    .add-habits-icon p{
        align-items:center;
        justify-content: center;
        font-size: 28px;
        margin-bottom: 2px;
        color: var(--add-icon);
    }

    ul>p{
        font-size: 18px;
        width: 90vw;
        color: var(--text);
    }
`