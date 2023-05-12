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
    
    const onHandleClick = () => {
        console.log("clicked");
    }

    const orderByNumber = (a, b) => a.seq - b.seq
    const orderByNumberDesc = (a, b) => b.seq - a.seq

    const handleSort = (e) => {
        const tg = e.target;

        // tg.childNodes.style.transform = 'rotate(180deg)';

        setTableBody(
            [...tableBody.sort(orderByNumberDesc)]
        );
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