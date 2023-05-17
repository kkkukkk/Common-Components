import React, { useEffect } from 'react';
import styled from 'styled-components';
import MasonryCard from './MasonryCard';

const StyledMasonryBase = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 5px;
    row-gap: 5px;
    border-radius: 5px;
    
    padding: ${props => props.padding || "20px" };
    width: ${props => props.width || "100vw"};
    min-height: ${props => props.minHeight || "500px"};
    border: ${props => props.border || "1px solid black"};
`;

const MasonryBase = ({...res}) => {
    const SetGridItem = () => {
        let base = document.querySelector(".base");
        let rowHeight = parseInt(window.getComputedStyle(base).getPropertyValue("grid-auto-rows"));
        let rowGap = parseInt(window.getComputedStyle(base).getPropertyValue("row-gap"));

        let item = base.getElementsByClassName("item");
        for(let i = 0; i < item.length; i++) {
            item[i].style.gridRowEnd = `span ${Math.ceil((item[i].offsetHeight)/(rowHeight + rowGap))}`;
        }
    }

    useEffect(() => {
        SetGridItem();
    }, []);

    return (
        <StyledMasonryBase
            {...res}
            className={"base"}
        >
            <MasonryCard>1.test</MasonryCard>
            <MasonryCard
                height={"120px"}
            >2.def</MasonryCard>
            <MasonryCard>3.test</MasonryCard>
            <MasonryCard>4.test</MasonryCard>
            <MasonryCard>5.test</MasonryCard>
            <MasonryCard
                height={"160px"}
            >6.def</MasonryCard>
            <MasonryCard>7.test</MasonryCard>
            <MasonryCard>8.test</MasonryCard>
            <MasonryCard
                height={"180px"}
            >9.def</MasonryCard>
            <MasonryCard>10.test</MasonryCard>
            <MasonryCard>11.test</MasonryCard>
            <MasonryCard>12.test</MasonryCard>
            <MasonryCard>13.test</MasonryCard>
            <MasonryCard>14.test</MasonryCard>
            <MasonryCard>15.test</MasonryCard>
            <MasonryCard
                height={"200px"}
            >16.def</MasonryCard>
            <MasonryCard>17.test</MasonryCard>
            <MasonryCard>18.test</MasonryCard>
            <MasonryCard>19.test</MasonryCard>

        </StyledMasonryBase>
    );
};

export default MasonryBase;