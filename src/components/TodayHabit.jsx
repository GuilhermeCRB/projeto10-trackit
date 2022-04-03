import styledComponents from "styled-components";

export default function TodayHabit({ habit }) {

    const { id, name, done, currentSequence, highestSequence } = habit;

    return (
        <LiStyle done={done} >
            <h3>{name}</h3>
            <p>{`Sequência atual: ${currentSequence} dias`}</p>
            <p>{`Seu recorde: ${highestSequence} dias`}</p>
            <div className="checkbox-icon">
                <ion-icon name="checkbox"></ion-icon>
            </div>
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
        color: ${({done}) => done ? "var(--checkbox-done)" : "var(--checkbox-not-done)"};
    }
`