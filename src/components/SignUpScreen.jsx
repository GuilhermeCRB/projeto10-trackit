import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styledComponents from "styled-components";

export default function SignUpScreen() {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const [data, setData] = useState({
        email: "", name: "", image: "", password: ""
    });
    const [disable, setDisable] = useState(false);
    const Navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();

        const promise = axios.post(URL, data);
        promise.then(() => Navigate("/")); promise.catch(warnError);
        setDisable(true);
    }

    function warnError(error) {
        alert("Parece que algo de errado não está certo. Por favor, tente novamente mais tarde.");
        setDisable(false);
    }

    return (
        <Section>
            <img src="./../src/assets/imgs/logo.svg" alt="logo" />
            <h1>TrackIt</h1>
            <form onSubmit={signUp} >
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
                <input
                    value={data.name}
                    type="text"
                    placeholder="nome"
                    onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                    disabled={disable}
                    required
                />
                <input
                    value={data.image}
                    type="url"
                    placeholder="foto"
                    onChange={(e) => { setData({ ...data, image: e.target.value }) }}
                    disabled={disable}
                    required
                />
                <button type="submit" >
                    {disable === false ? "Cadastrar" : <ThreeDots color="white" width={60} />}
                </button>
            </form>
            <Link to={"/"} >Já tem uma conta? Faça login!</Link>
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