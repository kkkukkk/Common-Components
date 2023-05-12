import React from 'react';
import styled from 'styled-components';

const StyledTableColumn = styled.div`
    width: ${props => props.width || "unset"};
    cursor: ${props => props.cursor || "normal"};

    &:hover {
        text-decoration: ${props => props.cursor ? "underline" : "none"};
        text-underline-position : under;
    }
`;

const TableColumn = ({ children, onClick, ...res }) => {
    return (
        <StyledTableColumn
            {...res}
            onClick={onClick}
        >{children}</StyledTableColumn>
    );
};

export default TableColumn;