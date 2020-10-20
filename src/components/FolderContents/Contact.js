import React from 'react';
import styled from 'styled-components';
import gitHubImg from '../../imgs/icons/github.png';
import linkedInImg from '../../imgs/icons/linkedin.png';
import gmailImg from '../../imgs/icons/gmail.png';
import twitterImg from '../../imgs/icons/twitter.png';

const ContactOuterWrap = styled.div`
    border: 2px solid black;
    height: 70%;
    width: 70%;
    margin: auto;
    text-align: center;
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
            contact.js
            <ContactInnerWrap>
                <ContactDiv>
                    <Icon src={gitHubImg}/>
                    <a href="https://github.com/tefedrb">GitHub</a>
                </ContactDiv>
                <ContactDiv>
                    <Icon src={linkedInImg}/>
                    <a href="https://www.linkedin.com/in/tefedrb/">LinkedIn</a>  
                </ContactDiv>
                <ContactDiv>
                    <Icon src={gmailImg}/>
                    tefebell@gmail.com
                </ContactDiv>
                <ContactDiv>
                    <Icon src={twitterImg}/>
                    <a href="https://twitter.com/HypedOnTofu">Twitter</a>
                </ContactDiv>
            </ContactInnerWrap>
        </ContactOuterWrap>
    )
}

export default Contact;