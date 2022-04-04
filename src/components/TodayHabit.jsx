import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import getTodayHabits from "../assets/getTodayHabits";
import styledComponents from "styled-components";

export default function TodayHabit({ habit, setTodayHabits, GET_URL, setDailyProgress }) {

    const { id, name, done, currentSequence, highestSequence } = habit;
    // const CHECK_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    // const UNCHECK_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/`;
    const { user } = useContext(UserContext);
    const config = {
        headers: { "Authorization": `Bearer ${user.token}` }
    }

    function toggleDone() {

        if (!done) {
            URL += "check";
        } else {
            URL += "uncheck";
        }

        const promise = axios.post(URL, {}, config);
        promise.then(toggleHabit); promise.catch(warnError);

        function warnError(error) {
            alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
        }

        function toggleHabit(response) {
            getTodayHabits(GET_URL, config, setTodayHabits, setDailyProgress);
        }

    }

    return (
        <LiStyle done={done} >
            <h3>{name}</h3>
            <p>{`Sequência atual: ${currentSequence} dias`}</p>
            <p>{`Seu recorde: ${highestSequence} dias`}</p>
            <ion-icon onClick={toggleDone} name="checkbox"></ion-icon>
        </LiStyle>
    );
}

const LiStyle = styledComponents.li`
    position: relative;
    width: 340px;
    height: 94px;
    padding: 13px 13px 13px 15px;
    margin-bottom: 10px;
    background-color: var(--background-habit);

    h3{
        font-size: 20px;
        margin-bottom: 7px;
        color: var(--text);
    }

    p{
        font-size: 13px;
        color: var(--text);
    }

    ion-icon{
        position: absolute;
        top: 0px;
        right: 13px;
        font-size: 84px;
        color: ${({ done }) => done ? "var(--checkbox-done)" : "var(--checkbox-not-done)"};
    }
`