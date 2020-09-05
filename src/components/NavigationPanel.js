import React from 'react';
import Folder from './Folder';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(79, 79, 79, 0.73);
    height: 100%;
    width: 325px;
`
const NavigationPanel = () => {
    return (
        <NavWrapper>
            <Folder title={"Projects"} />
            <Folder title={"About"} />
            <Folder title={"Contact"} />
        </NavWrapper>
    )
}

export default NavigationPanel;