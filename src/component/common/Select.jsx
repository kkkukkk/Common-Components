import React, { useState } from 'react';
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

const SelectBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: var(--defaultShadow);

    width: ${props => props.width || "fit-content"};
    height: ${props => props.height || "fit-content"};
    background: ${props => props.background || "black"};
    color: ${props => props.color || "white"};
    
    opacity: ${props => props.listOn ? ".8" : "1"};

    &::before {
        content: "⌵";
        position: absolute;
        top: 45%;
        right: 5px;
        color: white;
        font-size: 16px;
        transform: translate(-50%, -50%) rotate(0deg);
        transform: ${props => props.rotateDirection ? "translate(-50%, -50%) rotate(180deg)" : "" };
    }
`;

const Label = styled.label`
    margin-left: 10px;
`;

const Options = styled.ul`
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    overflow-y: scroll;
    height: 120px;
    max-height: ${props => props.show ? "none" : "0"};
    border-radius: 5px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    background: ${props => props.background || "black"};
    color: ${props => props.color || "white"};

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Option = styled.li`
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;

    color: ${props => props.color || "white"};
    background: ${props => props.background || "black"};

    &:hover {
        background-color: #595959;
    }
`;

const Select = ({optionData, ...res}) => {
    const [currentValue, setCurrentValue] = useState("선택");
    const [listOn, setListOn] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [rotateDirection, setRotateDirection] = useState(false);

    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        setCurrentValue(innerText)
    }

    const onSelectClick = (e) => {
        setShowOptions((prev) => !prev);
        setListOn((prev) => !prev);
        setRotateDirection(rotateDirection => !rotateDirection);
        console.log(rotateDirection);
    }

    const optionList = optionData.map((data, idx) => (
        <Option
            key={idx}
            value={data}
            onClick={handleOnChangeSelectValue}
        >{data}</Option>
    ));

    
    return (
        <SelectBox 
            listOn={listOn} 
            {...res} 
            onClick={onSelectClick}
            rotateDirection={rotateDirection}
            >
            <Label>{currentValue}</Label>
            <Options 
                show={showOptions}
            >
                {optionList}
            </Options>
        </SelectBox>
    );
};

export default Select;