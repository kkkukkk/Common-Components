import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        border: 1px solid var(--lllb);
    }
    to {
        border: 1px solid var(--lb);
    }
`

const StyledInput = styled.input`
    padding: 5px 0px 5px 5px;
    border: 1px solid var(--lllb);
    border-radius: 5px;
    box-shadow: var(--defaultShadow);
    box-sizing: border-box;

    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    
    &:focus {
        outline: none;
        animation-duration: .25s;
        animation-timing-function: ease-out;
        animation-name: ${fadeIn};
        animation-fill-mode: forwards
    }
`;

const Input = ({initial, value = '', ...res}) => {
    return (
        <StyledInput 
            name={initial} 
            id={initial} 
            value={value} 
            {...res}
            readOnly
        />
    );
};

export default Input;