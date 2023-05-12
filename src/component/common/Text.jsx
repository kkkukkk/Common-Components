import React from 'react';
import styled from 'styled-components';

const Text = ({ tag: Tag = 'span', className, children }) => {
    return (
        <Tag 
            className={className}
        >{children}</Tag>
    );
};

export default Text;