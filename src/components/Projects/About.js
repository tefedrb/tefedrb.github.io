import React from 'react';
import styled from 'styled-components';

const AboutWrap = styled.div`
    max-width: 600px;
`
const Text = styled.p`
    text-align: center;
`

const About = () => {
    return (
        <AboutWrap>
            <Text>
            I've found myself in the art world since I was young, 
            and in front of a computer since I was younger. I've always had an affinity for problem-solving and creativity,
            and using software to craft what I am imagining has always been a passion of mine.
            </Text>
            <Text>
            I've worn the hat of a developer, filmmaker, photographer, customer service representative 
            & teacher. In every role, I've always had an incessant drive to create things that those around me can enjoy and/or 
            benefit from in.
            </Text>
            <Text>
            I am currently volunteering with Code Nation and working at Nebula Academy as an Associate Teacher & Software Enginee,
            where I am hoping I can make a difference by teaching Software Engineering and Web Development to 
            students who are from underrepresented & underserved populations, like myself, to get ready for a career in tech.
            </Text>
        </AboutWrap> 
    )
}

export default About;