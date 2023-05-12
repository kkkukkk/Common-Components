import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)}
            }
            &:active {
                background: ${darken(0.1, selected)}
            }
        `;
    }}
`;

const StyledButton = styled.button`
    /* 공통 */
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: var(--defaultShadow);
    cursor: pointer;
    color: white;
    letter-spacing: 0.5px;

    width: ${props => props.width || "fit-content"};
    height: ${props => props.height || "fit-content"};
    padding: ${props => props.padding || "5px 10px"};

    /* 색상 */
    ${colorStyles}

    &:disabled {
        cursor: initial;
        background: grey;
        pointer-events: none;
    }
`

const Button = ({ disabled = false, children, onClick, color, ...res }) => {
    return (
        <StyledButton
            type="button"
            onClick={onClick}
            disabled={disabled}
            color={color}
            {...res}
        >{children}</StyledButton>
    );
};

Button.defaultProps = {
    color: 'black'
}

export default Button;