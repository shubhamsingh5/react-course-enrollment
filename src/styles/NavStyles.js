import styled from "styled-components";

const NavStyles = styled.ul`
    background-color: white;
    width: 5%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;

    li {
        list-style: none;
    }
    li:not(:first-child) {
        margin-top: 50px;
    }
    svg {
        fill: #515C6F;
        overflow: hidden;
        vertical-align: middle;
    }

    svg:hover {
        fill: #006dcc;
    }
`;

export default NavStyles;
