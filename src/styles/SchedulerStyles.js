import styled from "styled-components";

export const Sidebar = styled.div`
    background-color: white;
    border-left: 0.1rem solid rgba(81, 92, 111, 0.36);
    width: 25%;
    min-width: 40rem;
    margin: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: auto;

    ul {
        padding: 2rem;
        width: 90%;
        margin-bottom: 0;
        margin-top: 2rem;
        align-self: flex-start;
    }

    .plus-icon {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        min-height: 40px;
        background-color: #006dcc;
        margin-right: 2rem;
        box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);

        svg {
            fill: white;
        }
    }

    .schedule-heading {
        align-self: flex-start;
        margin-left: 2rem;
    }

    .schedule-item {
        /* display: flex;
        justify-content: flex-start; */
    }
`;

export const CalendarArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .heading {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 6rem;
        margin-left: 10rem;
        font-weight: 400;

        .count {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        .text {
            font-weight: 100;
        }

        .schedule-buttons {
            margin-left: 3rem;
            button {
                padding: 1rem;
                font-size: 3rem;
                cursor: pointer;
            }
        }
    }
`;
export const Calendar = styled.div`
    background-color: white;
    margin-left: 10rem;
    margin-top: 4rem;
    width: 55vw;
    height: 65vh;
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
`;
