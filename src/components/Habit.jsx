import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import styledComponents from "styled-components";

import trashIcon from "./../assets/imgs/trash.svg";
import getHabits from "../assets/getHabits";

export default function Habit({ days, habit, setHabits, GET_HABITS_URL}) {

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
    const { user } = useContext(UserContext);
    const config = {
        headers: { "Authorization": `Bearer ${user.token}` }
    }

    function deleteHabit() {
        let confirmation = window.confirm("Tem certeza que deseja deletar esse hábito?");
        if(confirmation){
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
            <WeekDays days={days} habit={habit} />
        </LiStyle>
    );
}

function WeekDays({ days, habit }) {

    return (
        <div className="week-days">
            {[...days.keys()].map((day) => {
                return (
                    <DayStyle key={day} day={day} habitDays={habit.days}>
                        {days.get(day)}
                    </DayStyle>
                );
            })}
        </div>
    );
}

function showHabitDays(day, habitDays) {
    const match = habitDays.filter(habitDay => habitDay === day);
    return (match.length !== 0 ? "red" : "var(--addHabit-day)");
}

const LiStyle = styledComponents.li`
    position: relative;
    width: 340px;
    height: 91px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: var(--background-habit);

    img{
        position: absolute;
        top: 0;
        right: 0;
    }

    .week-days{
        display: flex;
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
    color: ${({ day, habitDays }) => showHabitDays(day, habitDays)};
    border: 1px solid var(--addHabit-day);
`