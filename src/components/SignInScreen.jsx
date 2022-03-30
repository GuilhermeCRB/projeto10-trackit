import { Link } from "react-router-dom";
import styledComponents from "styled-components";

export default function SignInScreen(){
    return(
        <Section>
            <img src="./../src/assets/imgs/logo.svg" alt="logo" />
            <h1>TrackIt</h1>
            <form action="">
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="senha" required />
                <button>Entrar</button>
            </form>
            <Link to={"/cadastro"} >Não tem uma conta? Cadastre-se!</Link>
        </Section>
    );
}

const Section = styledComponents.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-top: 70px;
    background-color: var(--background-sign);

    h1{
        font-family: 'Playball';
        font-size: 68px;
        margin-bottom: 33px;
        color: var(--logo);
    }

    form{
        display: flex;
        flex-direction: column;
        width: 90vw;

        input{
            font-size: 21px;
            height: 45px;
            padding: 0 11px 2px 11px;
            margin-bottom: 6px;
            border-radius: 5px;
            border: 1px solid var(--input-border);
        }
    
        input::placeholder{
            color: var(--placeholder);
        }

        button{
            font-size: 21px;
            height: 45px;
            margin-bottom: 25px;
            border-radius: 5px;
            border: none;
            color: var(--button);
            background-color: var(--background-button)
        }
    }

    a{
        font-size: 14px;
        text-decoration: underline;
        color: var(--link);
    }
`