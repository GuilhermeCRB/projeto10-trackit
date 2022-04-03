import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import dayjs from "dayjs";
import styledComponents from "styled-components";

import Header from "./Header";
import Menu from "./Menu";
import TodayHabit from "./TodayHabit";

export default function TodayScreen({ weekDays }) {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const { user } = useContext(UserContext);
    const config = {
        headers: { "Authorization": `Bearer ${user.token}` }
    }
    let weekDay; let dateDay; let dateMonth;

    const [todayHabits, setTodayHabits] = useState(null);


    useEffect(() => {
        const promise = axios.get(URL, config);
        promise.then(displayTodayHabits); promise.catch(warnError);
    }, []);

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function displayTodayHabits(response) {
        setTodayHabits(response.data);
    }

    function saveDate() {
        weekDay = weekDays.get(dayjs().$W);
        dateDay = dayjs().$D;
        dateMonth = dayjs().$M + 1;

        if (parseInt(dateDay) < 10) {
            dateDay = "0" + dateDay;
        }

        if (parseInt(dateMonth) < 10) {
            dateMonth = "0" + dateMonth;
        }

    }

    saveDate();

    return (todayHabits &&
        <section>
            <Header />
            <MainStyle>
                <div className="today" >
                    <h2>{`${weekDay}, ${dateDay}/${dateMonth}`}</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </div>
                <ul>
                    {todayHabits.length === 0 ?
                        <p>Você não tem nenhum hábito para hoje. Adicione um hábito para começar a trackear!</p>
                        :
                        todayHabits.map(habit =>
                            <TodayHabit
                                key={habit.id}
                                habit={habit}
                                setTodayHabits={setTodayHabits}
                            />)
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
    margin: 70px 0;
    background-color: var(--background-screen);

    .today{
        width: 90vw;
        margin: 28px 0;
    }

    h2{
        font-size: 24px;
        color: var(--h2);
    }

    .today p{
        font-size: 18px;
        margin-top: 7px;
        color: var(--text2);
    }

    ul>p{
        font-size: 18px;
        color: var(--text);
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
    }
`