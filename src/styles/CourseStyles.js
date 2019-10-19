import styled from "styled-components";

const subjectColors = subject => {
    switch (subject) {
        case "Psychology":
            return "#e7bb41";
        case "ComputerScience":
            return "#ab2346";
        case "Chemistry":
            return "#44bba4";
        case "Mathematics":
            return "#dd614a";
        case "Biology":
            return "#7fb069";
        default:
            return "#231f20";
    }
};

export const CourseStyles = styled.div`
    margin: 20px;
    padding: 16px;
    width: 60%;
    background-color: white;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

export const Metadata = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const Subject = styled.div`
    font-weight: 400;
    color: white;
    padding: 2px 4px;
    background-color: ${({ subject }) => subjectColors(subject)};
`;

export const Credits = styled.div`
    color: #0b5563;
    font-style: italic;
`;

export const Action = styled.div`
    display: flex;
    justify-content: space-between;

    h1 {
        cursor: pointer;
        font-size: 24px;
        color: #006dcc;
    }
    
    button {
        margin: 0;
    }
`;

export const Times = styled.div`
    display: flex;
    justify-content: flex-start;

    p {
        font-size: 16px;
        color: #2c363f;
    }
`;

export const Sections = styled.div`
    margin-top: 8px;
`;

export const Subsections = styled.div`
    margin-top: 8px;
    margin-left: 4rem;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    padding-left: 4rem;
`;
