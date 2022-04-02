import styledComponents from "styled-components";
import trashIcon from "./../assets/imgs/trash.svg";

export default function Habit({ days, habit, setHabits }) {

    console.log(habit);

    return (
        <LiStyle>
            <div>
                <p>{habit.name}</p>
                <img src={trashIcon} alt="" />
            </div>
            <WeekDays days={days} habit={habit} />
        </LiStyle>
    );
}

function WeekDays({ days, habit }) {

    return (
        <div className="week-days">
            {[...days.keys()].map((day) => {
                // console.log("Dia do Map", day, "///  Dias do hábito", habit.id)
                return (
                    <DayStyle day={day} habitDays={habit.days}>
                        {days.get(day)}
                    </DayStyle>
                );
            })}
        </div>
    );
}

function showHabitDays(day, habitDays){
    const match = habitDays.filter(habitDay => habitDay === day);
    return(match.length !== 0 ? "red" : "var(--addHabit-day)");
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