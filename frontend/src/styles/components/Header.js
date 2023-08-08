import { styled } from "styled-components";

const BoxHeader = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 80px;
    background-image: linear-gradient(#000000, #00000050);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;

    &>div {
        display: flex;
        align-items: center;
    }
`;

export {
    BoxHeader,
}