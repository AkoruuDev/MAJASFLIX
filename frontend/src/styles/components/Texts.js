import styled from "styled-components";

const Title = styled.h1`
    margin: 0 12px;
    font-size: 32px;
    color: #ffd700;
    z-index: 1;
`;

const Title_tl = styled(Title)`
    position: absolute;
    left: 32px;
    top: 32px;
`;

export {
    Title,
    Title_tl,
}