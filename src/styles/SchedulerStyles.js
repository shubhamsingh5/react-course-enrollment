import styled from "styled-components";

export const Sidebar = styled.div`
    background-color: tomato;
    width: 20vw;
    min-width: 40rem;
    height: 100vh;
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-rows: auto 1fr auto;

    ul {
        padding: 20px;
        margin-bottom: 0;
        margin-top: 32px;
    }
`;

export const Calendar = styled.div`
    background-color: blanchedalmond;
    width: 120rem;
    height: 80rem;
    margin: 5rem;
`;
