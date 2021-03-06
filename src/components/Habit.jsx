import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import styledComponents from "styled-components";

import trashIcon from "./../assets/imgs/trash.svg";
import getHabits from "../assets/getHabits";

export default function Habit({ weekDays, habit, setHabits, GET_HABITS_URL }) {

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
    const { user } = useContext(UserContext);
    const config = {
        headers: { "Authorization": `Bearer ${user.token}` }
    }

    function deleteHabit() {
        let confirmation = window.confirm("Tem certeza que deseja deletar esse hábito?");
        if (confirmation) {
            const promise = axios.delete(URL, config);
            promise.then(saveNewHabits); promise.catch(warnError);
        }
    }


    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
    }

    function saveNewHabits(response) {
        getHabits(GET_HABITS_URL, config, setHabits);
    }

    return (
        <LiStyle>
            <div>
                <p>{habit.name}</p>
                <img src={trashIcon} alt="trash icon" onClick={deleteHabit} />
            </div>
            <WeekDays weekDays={weekDays} habit={habit} />
        </LiStyle>
    );
}

function WeekDays({ weekDays, habit }) {

    return (
        <div className="week-days">
            {[...weekDays.keys()].map((day) => {
                return (
                    <DayStyle key={day} day={day} habitDays={habit.days}>
                        {weekDays.get(day).slice(0, 1)}
                    </DayStyle>
                );
            })}
        </div>
    );
}

function showHabitDays(day, habitDays, type) {
    const match = habitDays.filter(habitDay => habitDay === day);
    if (type === "color") {
        return (match.length !== 0 ? "var(--background-habit)" : "var(--addHabit-day)");
    } else {
        return (match.length !== 0 ? "var(--addHabit-day)" : "var(--background-habit)");
    }
}

const LiStyle = styledComponents.li`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    height: 91px;
    margin-bottom: 10px;
    padding: 0 15px;
    border-radius: 5px;
    background-color: var(--background-habit);

    p{
        font-size: 20px;
        color: var(--text);
    }

    img{
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .week-days{
        display: flex;
        font-size: 20px;
        margin-top: 10px;
    }
`

const DayStyle = styledComponents.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border-radius: 5px;
    border: 1px solid var(--addHabit-day);
    color: ${({ day, habitDays }) => showHabitDays(day, habitDays, "color")};
    background-color: ${({ day, habitDays }) => showHabitDays(day, habitDays, "background")}
`