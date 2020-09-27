import React from 'react';
import styled from 'styled-components';
import equipmentImg from '../../imgs/Equipped_Equipment.png';
import { TextWrap, Text } from './ProjectCSS';

const EquippedUI = styled.img`
    height: auto;
    width: 100%;
    margin: 0 auto;
    max-width: 620px;
    display: block;
`
const Equipped = () => {
    return (
        <>
            <EquippedUI src={equipmentImg} />
            <TextWrap>
                <Text>
                    Equipped is a video & photography equipment management application, 
                    meant to help film collectives, media companies, or rental houses 
                    keep track of all their equipment. A user can browse a catalog of items 
                    and stash the ones they own into their company inventory. There is a feature 
                    that allows you to see who has what piece of equipment checked out, along with 
                    a history of the usage. There is also a message board that can utilized.
                </Text>
                <Text>
                    I made this app after thinking about my time work for this small media company that
                    was a little disorganized with their equipment. This could have been a useful way to keep track 
                    of who was using what and when.
                </Text>
            </TextWrap>
        </>
    )
}

export default Equipped;