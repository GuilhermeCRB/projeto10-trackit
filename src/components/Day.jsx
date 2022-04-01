import { useState } from "react";
import styledComponents from "styled-components";

export default function Day({ days, day }) {
    const [selected, setSelected] = useState(false);
    console.log(selected)

    return (
        <DayStyle selected={selected} onClick={() => setSelected(!selected)}>
            {days.get(day)}
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
