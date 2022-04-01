import { useState } from "react";
import styledComponents from "styled-components";

import Day from "./Day";

export default function AddHabitForm({ setAddHabit, days }) {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const [habit, setHabit] = useState({ name: "", days: [] });

    function saveHabit() {
        console.log(habit);
    }

    return (
        <FormStyle onSubmit={saveHabit} >
            <input
                value={habit.name}
                type="text"
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                required
            />
            <WeekDays days={days} />
            <div className="add-form-buttons">
                <button onClick={() => setAddHabit(false)}>Cancelar</button>
                <button type="submit" >Salvar</button>
            </div>
        </FormStyle>
    );
}

function WeekDays({days}) {
    return (
        <div className="week-days">
            {[...days.keys()].map((day) => {
                return (
                    <Day key={day} days={days} day={day} />
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
    background-color: var(--background-addHabit-form);

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