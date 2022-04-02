import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "./../contexts/UserContext";
import styledComponents from "styled-components";
import axios from "axios";

import logo from "./../assets/imgs/logo.svg"

export default function SignInScreen() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const [data, setData] = useState({ email: "", password: "" });
    const [disable, setDisable] = useState(false);
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    function signIn(e) {
        e.preventDefault();
        const promise = axios.post(URL, data);
        promise.then(saveUserInformation); promise.catch(warnError);
        setDisable(true);
    }

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
        setDisable(false);
    }

    function saveUserInformation(response) {
        setUser(response.data);
        navigate("/habitos");
    }

    return (
        <Section>
            <img src={logo} alt="logo" />
            <form onSubmit={signIn}>
                <input
                    value={data.email}
                    type="email"
                    placeholder="email"
                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                    disabled={disable}
                    required
                />
                <input
                    value={data.password}
                    type="password"
                    placeholder="senha"
                    onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                    disabled={disable}
                    required
                />
                <button disabled={disable} type="submit">
                    {disable === false ? "Entrar" : <ThreeDots color="white" width={60} />}
                </button>
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
            display: flex;
            align-items: center;
            justify-content: center;
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