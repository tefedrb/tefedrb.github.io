import React from 'react';
import bookshopImg from '../../imgs/Bookshop-Crutch.png';
import { TextWrap, Text, AppUI } from './ProjectCSS';

const Bookshop = () => {
    return (
        <>
            <h1>Bookshop-Crutch</h1>
            <AppUI src={bookshopImg} />
            <TextWrap>
                <p style={{textAlign: "center"}}>
                    [NAMES, ADDRESSES AND NUMBERS HAVE BEEN MODIFIED TO PROTECT PRIVACY]
                </p>

                <Text>
                    Bookshop-Crutch is a customer service assistance tool that aggregates a customers order information and displays 
                    it in one place. I decided to build this for myself while working as a contractor for Bookshop, 
                    after realizing how cumbersome the process was to get information. The data was not only spread out in different 
                    places but you also had to navigate through a dated customer portal and parse through a PDF file in order to 
                    find what you needed. This app cuts a 6+ step process into one.
                </Text>
            </TextWrap>
        </>
    )
}

export default Bookshop;