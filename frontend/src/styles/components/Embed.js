import { Title } from "./Texts";
import styled from "styled-components";

const Embed_icon = styled(Title)`
    font-size: 25px;
    position: absolute;
    left: 0px;
    top: 8px;
`;

const Embed_title = styled(Title)`
    font-size: 25px;
    position: absolute;
    left: 0px;
    bottom: 8px;
    color: ${props => props.color};
`;

const Embed_titleBox = styled.p`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${props => props.color};
`;

const Embed_button = styled.span`
    padding: 8px 15px;
    border-radius: 36px;
    background-color: #888;

    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        margin-left: 5px;
    }
`

const Embed_buuttonBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 15px 0;
`

export {
    Embed_icon,
    Embed_title,
    Embed_titleBox,
    Embed_button,
    Embed_buuttonBox
}