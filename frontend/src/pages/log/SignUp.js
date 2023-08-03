import { Bg, Bgd, CBox, Container, Form, Input, InputBox, Title_tl, ButtonForm, Link } from "../../styles/components"
import bgi from "../../assets/bgi.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp () {
    const [login, setLogin] = useState({});
    const navigate = useNavigate();

    function getLog(name, value) {
        setLogin({
            ...login,
            [name]: value
        })
    };

    function saveLog(e) {
        e.preventDefault();
        console.log("Dados: ", login);
        navigate("/")
    }

    return (
        <Container>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Title_tl>MAJASFLIX</Title_tl>
            <Bg image={bgi}></Bg>
            <Bgd></Bgd>
            <CBox>
                <h1>Registrar</h1>
                <Form onSubmit={saveLog}>
                    <InputBox>
                        <Input type="text" placeholder="Nome completo" name="name" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                    </InputBox>
                    <InputBox>
                        <Input type="email" placeholder="E-mail" name="email" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                    </InputBox>
                    <InputBox>
                        <Input type="password" placeholder="Senha" name="password" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                        <Input type="password" placeholder="Confirme sua senha" name="password" onChange={e => {
                            getLog(
                                e.target.name,
                                e.target.value
                            )
                        }} required />
                    </InputBox>
                    <Link onClick={() => navigate('/')}>Já tem uma conta?</Link>
                    <ButtonForm type="submit">Registrar</ButtonForm>
                </Form>
            </CBox>
        </Container>
    )
}

export {
    SignUp,
}