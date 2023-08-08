import { styled } from "styled-components";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    
    & p {
        color: #dddddd;
        margin: 0 15px;
        transition: all 0.2s ease;
        cursor: pointer;

        &:hover {
            color: #ffd700;
        }
    }
`;

export {
    Nav,
}