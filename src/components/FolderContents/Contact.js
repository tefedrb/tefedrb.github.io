import React from 'react';
import styled from 'styled-components';
import gitHubImg from '../../imgs/icons/github.png';
import linkedInImg from '../../imgs/icons/linkedin.png';
import gmailImg from '../../imgs/icons/gmail.png';
import twitterImg from '../../imgs/icons/twitter.png';

const ContactOuterWrap = styled.div`
    height: 70%;
    width: 70%;
    margin: auto;
    text-align: center;
    border: 2px solid black;

`
const ContactInnerWrap = styled.div`
    display: grid;
    grid-template-rows: repeat(2, minmax(0, .5fr));
    grid-template-columns: repeat(2, minmax(0, .5fr));
    align-items: center;
    height: 93%;
    width: 100%;
`
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
`
const Icon = styled.img`
    height: 60px;
    width: 60px;
`

const WindowTop = styled.div`
    color: white;
    width: 100%;
    height: 15px;
    background-color: black;
    margin: 0;
    padding: 0;
`

const Contact = () => {
    return (
        <ContactOuterWrap name={"contact-outer-wrap"}>
            
            <WindowTop><h1 style={{margin: "0", fontSize: "inherit"}}>contact.js</h1></WindowTop>
            <ContactInnerWrap name={"contact-inner-wrap"}>
                <ContactDiv>
                    <Icon src={gitHubImg}/>
                    <a href="https://github.com/tefedrb" target="_blank" rel="noopener">GitHub</a>
                </ContactDiv>
                <ContactDiv>
                    <Icon src={linkedInImg}/>
                    <a href="https://www.linkedin.com/in/tefedrb/" target="_blank" rel="noopener">LinkedIn</a>  
                </ContactDiv>
                <ContactDiv>
                    <Icon src={gmailImg}/>
                    tefebell@gmail.com
                </ContactDiv>
                <ContactDiv>
                    <Icon src={twitterImg}/>
                    <a href="https://twitter.com/HypedOnTofu" target="_blank" rel="noopener">Twitter</a>
                </ContactDiv>
            </ContactInnerWrap>
       
        </ContactOuterWrap>
    )
}

export default Contact;