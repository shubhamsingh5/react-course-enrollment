import React from "react";
import styled from "styled-components";
import { RemoveTag } from "./styles/ButtonStyles";

const TagStyles = styled.div`
    margin: 4px;
    padding: 0 8px;
    background-color: #006dcc;
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-start;
    color: white;

    p {
        margin-right: 4px;
        margin-bottom: 0;
    }
`;

const Tag = ({ tagName, removeTag }) => {
    return (
        <TagStyles>
            <p>{tagName}</p>
            <RemoveTag onClick={e => removeTag(tagName, e)}>
                <span>&times;</span>
            </RemoveTag>
        </TagStyles>
    );
};

export default Tag;
