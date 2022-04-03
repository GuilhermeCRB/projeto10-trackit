import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import dayjs from "dayjs";
import styledComponents from "styled-components";

import Header from "./Header";
import Menu from "./Menu";
import TodayHabit from "./TodayHabit";

export default function TodayScreen() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const {user} = useContext(UserContext);
    const config = {
        headers: { "Authorization": `Bearer ${user.token}` }
    }
    const weekDays = new Map([
        [1, "Segunda"], [2, "Terça"], [3, "Quarta"], [4, "Quinta"],
        [5, "Sexta"], [6, "Sábado"], [7, "Domingo"]
    ]);

    const [todayHabits, setTodayHabits] = useState(null);
    

    useEffect(() => {
        const promise = axios.get(URL, config);
        promise.then(sucesso); promise.catch(warnError);
    },[]);

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function sucesso(response) {
        setTodayHabits(response.data);
    }

    let day = dayjs();
    console.log(day)

    return (todayHabits &&
        <section>
            <Header />
            <MainStyle>
                <h2>{`${weekDays.get(dayjs().$W)}, ${dayjs().$D}/0${dayjs().$M + 1}`}</h2>
                <p>Nenhum hábito concluído ainda</p>
                <ul>
                    {todayHabits.length === 0 ?
                        <p>Você não tem nenhum hábito para hoje. Adicione um hábito para começar a trackear!</p>
                        :
                        todayHabits.map(habit => <TodayHabit key={habit.id} habit={habit} />)
                    }
                </ul>
            </MainStyle>
            <Menu />
        </section>
    );
}

const MainStyle = styledComponents.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 70px;
    background-color: var(--background-screen);

    h2{
        font-size: 24px;
        color: var(--h2);
    }

    >p{
        font-size: 18px;
        color: var(--text2);
    }

    ul>p{
        font-size: 18px;
        color: var(--text);
    }
`