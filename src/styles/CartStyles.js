import styled from "styled-components";

const CartStyles = styled.div`
    padding: 20px;
    position: relative;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 25%;
    /* min-width: 500px; */
    bottom: 0;

    transform: ${props =>
        props.cartOpen ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.3s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    display: grid;
    grid-template-rows: auto 1fr auto;

    ul {
        margin-bottom: 0;
        margin-top: 8px;
    }
`;

const CartItemStyles = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    list-style: none;

    &__details p {
        margin: 0;
    }
`;

export { CartStyles, CartItemStyles };
