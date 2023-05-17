import React, { useState } from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

const StyledTable = styled.div`
    border: ${props => props.border || "none"};
    width: ${props => props.width || "500px"};
`;

const StyledTableHead = styled.div`
`;

const StyledTableBody = styled.div`
    & > div:nth-child(even) {
    }
`;

const Table = ({ data, ...res }) => {
    const tableHead = data.tableHead;
    const [tableBody, setTableBody] = useState(data.tableBody);
    const colWidthList = data.colWidthList;
    const sortableColumn = data.sortableColumn;
    const [isOn, setOn] = useState(false);
    
    const orderByNumber = (a, b) => a.seq - b.seq
    const orderByNumberDesc = (a, b) => b.seq - a.seq
    
    const onHandleClick = () => {
        console.log("clicked");
    }
    
    const handleSort = (e) => {
        setOn(isOn => !isOn);
        const tg = e.target;

        if (!isOn) {
            tg.lastChild.classList.add("on");
            tg.lastChild.classList.remove("off");
            setTableBody(
                [...tableBody.sort(orderByNumberDesc)]
            );
        } else {
            tg.lastChild.classList.add("off");
            tg.lastChild.classList.remove("on");
            setTableBody(
                [...tableBody.sort(orderByNumber)]
            );
        } 
    }

    return (
        <StyledTable
            {...res}
        >
            <StyledTableHead>
                <TableRow
                    data={tableHead}
                    colWidthList={colWidthList}
                    sortableColumn={sortableColumn}
                    borderBottom={"1px solid rgba(0,0,0,.5)"}
                    handleSort={handleSort}
                    headRow
                ></TableRow>

            </StyledTableHead>
            <StyledTableBody>
                <TableRow
                    data={tableBody}
                    colWidthList={colWidthList}
                    borderBottom={"1px solid rgba(0,0,0,.3)"}
                    onHandleClick={onHandleClick}
                ></TableRow>

            </StyledTableBody>
        </StyledTable>
    );
};

export default Table;