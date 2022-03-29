import styledComponents from "styled-components";

export default function SignInScreen(){
    return(
        <Section>
            <div>Logo</div>
            <h1>TrackIt</h1>
            <form action="">
                <input type="email" placeholder="email" />
                <input type="text" placeholder="senha" />
                <button>Entrar</button>
            </form>
            <p>Não tem uma conta? Cadastre-se!</p>
        </Section>
    );
}

const Section = styledComponents.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-bottom: 120px;
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

    p{
        font-size: 14px;
        text-decoration: underline;
        color: var(--link);
    }
`