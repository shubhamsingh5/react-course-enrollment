import styled from "styled-components";

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    &:focus {
        outline: 0;
    }
`;

export const AddToCart = styled(Button)``;

export const OpenCart = styled(Button)``;

export const CloseCart = styled(Button)`
    background: none;
    color: red;
    font-size: 3rem;
    border: 0;
    position: absolute;
    z-index: 2;
    right: 0;

    &:focus {
        outline: 0;
    }
`;

export const RemoveFromCart = styled(Button)``;

export const RemoveTag = styled(Button)``;
