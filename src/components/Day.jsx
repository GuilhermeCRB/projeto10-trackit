import { useState } from "react";
import styledComponents from "styled-components";

export default function Day({ weekDays, day, habit, setHabit }) {
    const [selected, setSelected] = useState(false);

    function toggleDay(){

        if(!selected){
            setHabit({...habit, days: [...habit.days, day]});
        }else{
            const newDays = habit.days.filter(selectedDay => selectedDay !== day);
            setHabit({...habit, days: newDays});
        }

        setSelected(!selected);
    }

    return (
        <DayStyle selected={selected} onClick={toggleDay}>
            {weekDays.get(day).slice(0,1)}
        </DayStyle>

    );
}

const DayStyle = styledComponents.div`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    border-radius: 5px;
    color: ${({selected}) => selected ? "red" : "var(--addHabit-day)"};
    border: 1px solid var(--addHabit-day);
`
