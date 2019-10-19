import styled from "styled-components";

const Collapsible = styled.div`
    max-height: ${props => props.expanded ? '2000px' : '0'};
    overflow: hidden;
    transition: ${props => props.expanded ? 
        'max-height 0.5s ease;' : 'max-height 0.5s cubic-bezier(0, 1, 0, 1)'};
`;

export default Collapsible;