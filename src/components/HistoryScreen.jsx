import styledComponents from "styled-components";

import Header from "./Header";
import Menu from "./Menu";

export default function HistoryScreen(){
    return (
        <section>
            <Header />
            <MainStyle>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </MainStyle>
            <Menu />
        </section>
    );
}


const MainStyle = styledComponents.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 140px);
    margin: 70px 0;
    background-color: var(--background-screen);

    h2{
        font-size: 24px;
        width: 90vw;
        margin-top: 28px;
        color: var(--h2);
    }

    p{
        font-size: 18px;
        width: 90vw;
        margin-top: 17px;
        color: var(--text2);
    }
`