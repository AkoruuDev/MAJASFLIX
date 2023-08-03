import { useState } from "react";
import { ButtonForm, Container, Bg, Bgd, Input, Link, Title_tl, CBox, InputBox } from "../../styles/components";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import bgi from "../../assets/bgi.png";

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
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Title_tl>MAJASFLIX</Title_tl>
            <Bg image={bgi}></Bg>
            <Bgd></Bgd>
            <CBox>
                <h1>Entrar</h1>
                <FormLog onSubmit={saveLog}>
                    <InputBox>
                        <Input type="email" name="email" placeholder="email" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                    </InputBox>
                    <InputBox>
                        <Input type="password" name="password" placeholder="senha" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required/>
                        <ButtonForm type="submit">Acessar</ButtonForm>
                    </InputBox>
                    <Link onClick={() => navigate('/sign-up')}>Não tem uma conta?</Link>
                </FormLog>
            </CBox>
        </Container>
    )
};

const FormLog = styled.form`
    width: 80%;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export {
    SignIn,
}