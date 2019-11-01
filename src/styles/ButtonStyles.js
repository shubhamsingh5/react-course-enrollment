import styled from "styled-components";

const Button = styled.button`
    font-size: 1.6rem;
    background: none;
    padding: 0.25em 1em;
    border-radius: 3px;
    transition: 0.2s all;
    max-height: 4rem;
    overflow: hidden;
    text-overflow: none;
    white-space: nowrap;

    &:focus {
        outline: 0;
    }
`;

export const AddToCart = styled(Button)`
    border: 2px solid #006dcc;

    &:hover {
        background: #006dcc;
        color: #fff;
    }
`;

export const OpenCart = styled(Button)`
    margin: 1em;
    border: 2px solid #006dcc;
    background: #006dcc;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
    }
`;

export const CloseCart = styled(Button)`
    background: none;
    color: red;
    font-size: 4rem;
    border: 0;
    /* position: absolute; */
    padding: 0 8px;
    z-index: 2;
    /* right: 3rem; */
    &:focus {
        outline: 0;
    }
`;

export const RemoveFromCart = styled(Button)`
    font-size: 2rem;
    background: none;
    border: 0;
    padding: 0;
    padding-right: 8px;
    transform: translateY(-4px);

    &:hover {
        fill: red;
        cursor: pointer;
    }
`;

export const RemoveTag = styled(Button)`
    font-size: 2rem;
    background: none;
    border: 0;
    padding: 0;
    padding-left: 1rem;
    color: white;
`;

export const SearchToggle = styled(Button)`
    border: 2px solid #006dcc;
    margin: 0 1em 1em 0;
    background: ${({ selected }) => (selected ? "#006dcc" : "none")};
    color: ${({ selected }) => (selected ? "#fff" : "inherit")};

    &:hover {
        background: #006dcc;
        color: #fff;
    }
`;

export const ChangeSchedule = styled(Button)`
    font-size: 2rem;
    background: none;
    border: 0;
    padding: 0;
`;
