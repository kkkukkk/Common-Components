import React from 'react';
import styled from 'styled-components';

const StyledMasonryCard = styled.div`
    padding: ${props => props.padding || "5px" };
    height: ${props => props.height || "100px"};

    width: 100%;
    overflow: hidden;

    & > div {
        width: 100%;
        height: 100%;
        padding: 10px;
        border: ${props => props.border || "1px solid black"};
    }
`;

const MasonryCard = ({children, ...res}) => {
    return (
        <StyledMasonryCard
            className={"item"}
            {...res}
        >
            <div>{children}</div>
        </StyledMasonryCard>
    );
};

export default MasonryCard;