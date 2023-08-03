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

    & h1, h2, h3, h4, h5, h6 {
        font-family: 'Jost', sans-serif;
    }

    & p, span, input, button {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
    }
`;

const CBox = styled.div`
    width: 60%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #dddddd;
    z-index: 1;

    & h1 {
        font-size: 28px;
    }
`;

const Bg = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${props => props.image});

    position: fixed;
`;

const Bgd = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: linear-gradient(#00000050, #000000);
    opacity: .7;
`;


export {
    Container,
    CBox,
    Bg,
    Bgd
}