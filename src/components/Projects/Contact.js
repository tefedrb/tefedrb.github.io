import React from 'react';
import styled from 'styled-components';
import { AppUI } from './ProjectCSS';

const ContactOuterWrap = styled.div`
    border: 2px solid black;
    height: 70%;
    width: 70%;
    margin: auto;
`
const ContactInnerWrap = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(0, .5fr));
    grid-template-columns: repeat(2, minmax(0, .5fr));
    align-items: center;
    height: 100%;
    width: 100%;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 5px;
    padding: 20px;
`
const Icon = styled.img`
    height: 60px;
    width: 60px;
`

const WindowTop = styled.div`
    width: 100%;
    height: 10px;
    background-color: black;
    margin: 0;
    padding: 0;
`


const Contact = () => {
    return (
        <ContactOuterWrap>
            <WindowTop />
            <ContactInnerWrap>
                <ContactDiv>
                    <Icon src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                    https://github.com/tefedrb
                </ContactDiv>
                <ContactDiv>
                    <Icon src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"/>
                    https://www.linkedin.com/in/tefedrb/
                </ContactDiv>
                <ContactDiv>
                    <Icon src="https://img.icons8.com/ios-filled/50/000000/gmail.png"/>
                    tefebell@gmail.com
                </ContactDiv>
                <ContactDiv>
                    <Icon src="https://img.icons8.com/ios/50/000000/twitter.png"/>
                    https://twitter.com/HypedOnTofu
                </ContactDiv>
            </ContactInnerWrap>
        </ContactOuterWrap>
    )
}

export default Contact;