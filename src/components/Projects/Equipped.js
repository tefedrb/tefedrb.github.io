import React from 'react';
import styled from 'styled-components';
import equipmentImg from '../../imgs/Equipped_Equipment.png';

const EquippedUI = styled.img`
    height: auto;
    width: 110%;
    display: block;
`

const Equipped = () => {
    return (
        <>
            <EquippedUI src={equipmentImg} />
        </>
    )
}

export default Equipped;