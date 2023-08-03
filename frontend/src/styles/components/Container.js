import { styled } from "styled-components";

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #101010;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: -10;

    & h1, h2, h3, h4, h5, h6 {
        font-family: 'Jost', sans-serif;
    }

    & p, span, input, button {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
    }
`
export {
    Container,
}