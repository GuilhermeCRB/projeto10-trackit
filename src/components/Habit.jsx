import styledComponents from "styled-components";
import trashIcon from "./../assets/imgs/trash.svg";

export default function Habit({ days, habit, setHabits }) {

    return (
        <LiStyle>
            <div>
                <p>{habit.name}</p>
                <img src={trashIcon} alt="" />
            </div>
            <WeekDays days={days} />
        </LiStyle>
    );
}

function WeekDays({ days }) {
    return (
        <div className="week-days">
            {[...days.keys()].map((day) => {
                return (
                    <div className="day">
                        {days.get(day)}
                    </div>
                );
            })}
        </div>
    );
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

    .day{
        display: flex;
        align-items:center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border-radius: 5px;
        // color: ${({selected}) => selected ? "red" : "var(--addHabit-day)"};
        border: 1px solid var(--addHabit-day);
    }
`