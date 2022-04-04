import { useContext } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import DailyProgress from "../contexts/DailyProgress";

export default function Menu() {

    const { dailyProgress } = useContext(DailyProgress);

    return (
        <FooterStyle>
            <Link to={"/habitos"} >
                <p>Hábitos</p>
            </Link>
            <Link to={"/hoje"}>
                <div className="CircularProgressbar-container">
                    <CircularProgressbar
                        value={dailyProgress}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "var(--footer-main)",
                            textColor: "var(--footer)",
                            pathColor: "var(--footer)",
                            trailColor: "transparent"
                        })}
                    />
                </div>
            </Link>
            <Link to={"/historico"}>
                <p>Histórico</p>
            </Link>
        </FooterStyle>
    );
}

const FooterStyle = styledComponents.footer`
    position: fixed;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    padding: 0 35px;
    background-color: var(--footer);

    p{
        font-size: 18px;
        line-height: 22px;
        color: var(--footer-main);
    }

    .CircularProgressbar-container{
        margin-top: -40px;
        width: 91px;
    }

    a{
        text-decoration: none;
    }
`