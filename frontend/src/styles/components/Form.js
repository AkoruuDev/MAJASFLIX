import styled from 'styled-components';

const Form = styled.form`
    width: 80%;
    height: 100%;
    padding: 50px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonForm = styled.button`
    padding: 8px 35px;
    margin: 15px 25px;
    border-radius: 50px;
    background-color: #aa2222;
    color: #ffdddd;
    border: transparent;
    transition: all 0.2s ease;
    cursor: pointer;
    transform: scale(1.3);

    &:hover {
        background-color: #dd1010;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: #f8f8f8;
    border: 2px solid #f8f8f8;
    padding: 0 14px;
    border-radius: 4px;
`;

const TextAreaInput = styled.input`
`;

const InputBox = styled.div`
    width: 100%;
    height: 120px;

    padding: 12px;
`;

const Link = styled.span`
    max-width: 80%;
    padding: 12px 0;
    color: #fafafa;
    font-size: 18px;

    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        color: #aa2222;
    }
`;

export {
    Form,
    ButtonForm,
    Input,
    TextAreaInput,
    InputBox,
    Link
}