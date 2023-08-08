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

export {
    Embed_icon,
    Embed_title
}