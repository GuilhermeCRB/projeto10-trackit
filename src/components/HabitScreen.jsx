import styledComponents from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

export default function HabitScreen() {

    return (
        <section>
            <Header />
            <MainStyle>
                <div className="add-habits">
                    <h2>Meus hábitos</h2>
                    <div className="add-habits-icon">
                        <ion-icon name="add"></ion-icon>
                    </div>
                </div>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </MainStyle>
            <Menu />
        </section>
    );
}

const MainStyle = styledComponents.main`
    background-color: var(--background-screen);
    margin-top: 70px;
    padding: 0 18px;

    .add-habits{
        display: flex;
        align-items:center;
        justify-content: space-between;
        padding: 25px 0;
    }

    h2{
        font-size: 24px;
        color: var(--h2);
    }

    .add-habits-icon{
        display: flex;
        align-items:center;
        justify-content: center;
        font-size: 24px;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        color: var(--add-icon);
        background-color: var(--background-icon);
    }

    p{
        font-size: 18px;
        color: var(--text);
    }
`