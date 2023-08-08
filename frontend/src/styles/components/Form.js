import styled from 'styled-components';

const Form = styled.form`
    width: 80%;
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

const TextAreaInput = styled.input`
`;

const InputBox = styled.div`
    width: 100%;
    padding: 4px;

    display: flex;
    align-items: center;
`;

const Link = styled.span`
    max-width: 80%;
    padding: 12px 0;
    color: #fafafa;
    font-size: 18px;

    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        color: #ffd700;
    }
`;

export {
    Form,
    ButtonForm,
    TextAreaInput,
    InputBox,
    Link
}