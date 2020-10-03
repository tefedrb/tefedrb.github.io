import React from 'react';
import { TextWrap, Text } from './ProjectCSS';

const About = () => {
    return (
        <TextWrap name={"textWrap"}>
            <Text>about.java</Text>
            <Text>Tefé Del Rosario-Bell</Text>
            <Text>
            I've found myself in the world of performing arts since I was young, 
            and in front of a computer since I was younger. I've always had an affinity for problem-solving and creativity,
            and using software to craft what I am imagining has always been a passion of mine.
            </Text>
            <Text>
            I've worn the hat of a developer, filmmaker, photographer, customer service representative 
            & teacher. Although the context varies, the essence of what drives me has been the same: 
            an incessant drive to create things that others can enjoy and/or benefit from.
            </Text>
            <Text>
            I am currently volunteering with Code Nation and working at Nebula Academy as an Associate Teacher & Software Engineer,
            where I am hoping I can make an impact teaching Software Engineering to 
            students who are from underrepresented & underserved populations, like myself, to get ready for a career in tech.
            </Text>
        </TextWrap> 
    )
}

export default About;