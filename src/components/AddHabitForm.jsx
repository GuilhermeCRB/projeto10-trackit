import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import getHabits from "../assets/getHabits";
import styledComponents from "styled-components";

import Day from "./Day";

export default function AddHabitForm({ setHabits, setAddHabit, weekDays }) {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const {user} = useContext(UserContext);
    const config = {
        headers: {"Authorization": `Bearer ${user.token}`}
    }
    
    const [habit, setHabit] = useState({ name: "", days: [] });
    const [disable, setDisable] = useState(false);

    function saveHabit(e) {
        e.preventDefault();
        const promise = axios.post(URL, habit, config);
        promise.then(endAddHabit); promise.catch(warnError);
        setDisable(true);
    }

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
        setDisable(false);
    }

    function endAddHabit(response) {
        setAddHabit(false);
        getHabits(URL, config, setHabits);
    }

    return (
        <FormStyle onSubmit={saveHabit} >
            <input
                value={habit.name}
                type="text"
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                disabled={disable}
                required
            />
            <WeekDays weekDays={weekDays} habit={habit} setHabit={setHabit} />
            <div className="add-form-buttons">
                <button disabled={disable} onClick={() => setAddHabit(false)}>Cancelar</button>
                <button disabled={disable} type="submit" >Salvar</button>
            </div>
        </FormStyle>
    );
}

function WeekDays({ weekDays, habit, setHabit }) {
    return (
        <div className="week-days">
            {[...weekDays.keys()].map((day) => {
                return (
                    <Day
                        key={day}
                        weekDays={weekDays}
                        day={day}
                        habit={habit}
                        setHabit={setHabit}
                    />
                )
            })}
        </div>
    );
}

const FormStyle = styledComponents.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    margin-bottom: 29px;
    background-color: var(--background-habit);

    .week-days{
        display: flex;
        margin-top: 10px;
    }

    .add-form-buttons{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 176px;
    }
`