import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styledComponents from "styled-components";

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <HeaderStyle>
            <h1>TrackIt</h1>
            <div>
                <img src={user.image} alt="user profile image" />
            </div>
        </HeaderStyle>
    );
}

const HeaderStyle = styledComponents.header`
    display: flex;
    align-itens:center;
    justify-content: space-between;
    width: 100vw;
    height: 70px;
    padding: 0 18px;
    background-color: var(--header);

    h1{
        font-family: 'Playball';
        font-size: 40px;
        margin-bottom: 33px;
        color: var(--logo-header);
    }

    div{
        width: 51px;
        heith: 51px;
    }

    img{
        width: 100%;
    }
`