import React from 'react';
import styled from 'styled-components';
import TableColumn from './TableColumn';
import TableSortButton from './TableSortButton';

const StyledTableRow = styled.div`
    display: flex;
    
    border-bottom: ${props => props.borderBottom || "none"};
    
    padding: ${props => props.headRow ? (props.padding || "10px 10px") : (props.padding || "5px 10px")};
    font-weight: ${props => props.headRow ? "bold" : "normal"};
    background: ${props => props.headRow ? "#dfdfdf" : "current-color"};
    cursor: ${props => props.headRow ? "normal" : "pointer"};

    &:hover {
        background: ${props => props.headRow ? "current-color" : "#efefef"};
    }
`;

const TableRow = ({ data, colWidthList, sortableColumn, handleSort, headRow, onHandleClick, ...res }) => {
    const handleData = () => {
        const checkSortable = (idx) => {
            if (sortableColumn[idx].toLowerCase() === "y") {
                return true;
            } else {
                return false;
            }
        }

        if(headRow) {
            return <StyledTableRow 
                {...res}
                headRow
            >
                {
                    data.map((item, idx) => (checkSortable(idx) ? 
                        <TableColumn 
                            key={idx}
                            width={colWidthList[idx] || 100 / data.length + "%"}
                            cursor={"pointer"}
                            onClick={handleSort}
                        >{item}<TableSortButton></TableSortButton></TableColumn>
                        :
                        <TableColumn 
                            key={idx}
                            width={colWidthList[idx] || 100 / data.length + "%"}
                        >{item}{checkSortable(idx)}</TableColumn>
                    ))
                }
            </StyledTableRow>
        } else {
            return data.map((item, idx) => (
                <StyledTableRow 
                    key={idx}
                    onClick={onHandleClick}
                    {...res}
                >
                    {
                        Object.values(item).map((item, idx) => (
                            <TableColumn 
                                key={idx}
                                width={colWidthList[idx] || 100 / data.length + "%"}
                            >{item}</TableColumn>
                        ))
                    }
                </StyledTableRow>
            ));
        }
    }

    return (
        <>
            {handleData()}
        </>
    );
};

export default TableRow;