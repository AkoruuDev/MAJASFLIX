import { useState } from "react";
import { ButtonForm, Container, Input, Link } from "../../styles/components";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import bgi from "../../assets/bgi.png"

function SignIn () {
    const [login, setLogin] = useState({});
    const navigate = useNavigate();
    
    function getLog(name, value) {
        setLogin({
            ...login,
            [name]:value
        })
    }
    
    function saveLog(e) {
        e.preventDefault();
        console.log(login)
    }

    return (
        <Container>
            <Title>MAJASFLIX</Title>
            <Bg image={bgi}>
                <Bgd></Bgd>
                <Box>
                    <h1>Entrar</h1>
                    <FormLog onSubmit={saveLog}>
                        <Input type="email" name="email" placeholder="email" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                        <div>
                            <Input type="password" name="password" placeholder="senha" onChange={e => {
                                getLog(
                                    e.target.name,
                                    e.target.value
                                )
                            }} required/>
                            <ButtonForm type="submit">Acessar</ButtonForm>
                        </div>
                        <Link onClick={() => navigate('/sign-up')}>Não tem uma conta?</Link>
                    </FormLog>
                </Box>
            </Bg>
        </Container>
    )
}

const Title = styled.h1`
    position: absolute;
    left: 32px;
    top: 32px;
    color: #ffd700;
    z-index: 1;
`;

const Bg = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${props => props.image});

    display: flex;
    justify-content: center;
    z-index: -1;
`;

const Bgd = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: linear-gradient(#ffd70012, #000000);
    opacity: .7;
    z-index: -1;
`;

const Box = styled.div`
    width: 60%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #dddddd;
`;

const FormLog = styled.form`
    width: 80%;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
        width: 100%;
        display: flex;
        align-items: center;
    }
`;

export {
    SignIn,
}