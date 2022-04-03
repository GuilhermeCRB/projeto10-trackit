import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export default function Menu() {
    return (
        <FooterStyle>
            <Link to={"/habitos"} >
                <p>Hábitos</p>
            </Link>
            <Link to={"/hoje"}>
                <p>Hoje</p>
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
`