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
                placeholder="nome do hábito"
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                disabled={disable}
                required
            />
            <WeekDays weekDays={weekDays} habit={habit} setHabit={setHabit} />
            <div className="add-form-buttons">
                <button className="cancel-button" disabled={disable} onClick={() => setAddHabit(false)}>Cancelar</button>
                <button className="save-button" disabled={disable} type="submit" >Salvar</button>
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
    border-radius: 5px;
    background-color: var(--background-habit);

    input{
        font-size: 20px;
        width: 303px;
        height: 45px;
        margin: 18px 18px 10px 18px;
        padding: 0 10px;
        border: 1px solid var(--input-border);
        border-radius: 5px;
        color: var(--text);
    }

    input::placeholder{
        font-size: 20px;
        color: var(--placeholder);
    }

    .week-days{
        display: flex;
        font-size: 20px;
        margin-left: 18px;
    }

    .add-form-buttons{
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    .cancel-button{
        font-size: 16px;
        margin-right: 20px;
        border: none;
        color: var(--background-icon);
        background-color: var(--background-habit);
    }

    .save-button{
        width: 84px;
        height: 35px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        color: var(--background-habit);
        background-color: var(--background-icon);
    }
`