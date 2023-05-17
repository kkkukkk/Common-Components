import React from 'react';
import styled, { keyframes } from 'styled-components';

const upRotate = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(180deg);
    }
`;

const downRotate = keyframes`
    0% {
        transform:rotate(180deg);
    }
    100% {
        transform:rotate(0deg);
    }
`;

const StyledTableSortButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //transform-origin: center;
    height: fit-content;
    border: none;
    background: transparent;
    cursor: pointer;
    pointer-events: none;

    &.on {
        animation: ${upRotate} .3s linear forwards;
    }

    &.off {
        animation: ${downRotate} .3s linear forwards;
    }
`;

const TableSortButton = () => {

    return (
        <StyledTableSortButton
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
        </StyledTableSortButton>
    );
};

export default TableSortButton;