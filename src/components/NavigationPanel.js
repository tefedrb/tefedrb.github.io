import React from 'react';
import Folder from './Folder';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(79, 79, 79, 0.73);
    height: 100%;
    width: 325px;
`

const NavigationPanel = () => {
    const content = "Projects"
    return (
        <NavWrapper>
            <Folder content={content}/>
        </NavWrapper>
    )
}

export default NavigationPanel;