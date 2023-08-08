import { styled } from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: #f8f8f8;
    border: 2px solid #f8f8f8;
    padding: 0 14px;
    margin: 0 4px;
    border-radius: 4px;
`;

const InputSearch = styled(Input)`
    width: ${props => !props.actived ? '0' : 'calc(50vw - 300px)'};;
    opacity: ${props => !props.actived ? '0' : '1'};
    transition: all 1s ease;
`;

export {
    Input,
    InputSearch
}