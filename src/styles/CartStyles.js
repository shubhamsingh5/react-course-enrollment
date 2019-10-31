import styled from "styled-components";

const CartStyles = styled.div`
    padding: 20px;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 25%;
    min-width: 40rem;
    bottom: 0;

    transform: ${props =>
        props.cartOpen ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.3s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    display: grid;
    grid-template-rows: auto 1fr auto;

    ul {
        padding: 20px;
        margin-bottom: 0;
        margin-top: 32px;
    }

    .cart__info {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        p {
            display: flex;
            align-items: center;
            margin: 0;
            margin-top: 1rem;
            font-size: 2.4rem;
            font-weight: 100;
        }

        span {
            margin-right: 1rem;
            margin-left: 1rem;
        }

        .count {
            font-size: 4.3rem;
            font-weight: 400;
        }

        .title {
            font-size: 4.3rem;
            font-weight: 400;
        }

        .divider {
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 4rem;
            font-weight: 100;
            margin-top: -1rem
        }
    }
`;

export default CartStyles;
