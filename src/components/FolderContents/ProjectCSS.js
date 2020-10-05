import styled from 'styled-components';

export const TextWrap = styled.div`
    max-width: 650px;
    margin: 0 auto;
    @media(max-height: 825px){
        margin: 0 auto;
    }
`
export const Text = styled.p`
    font-size: 1.4em;
    text-align: center;
`
export const DisplayWrap = styled.div`
    
`
export const ProjNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;
`
export const ProjLink = styled.a`
    // background-color: rgba(216,212,79,1);
    background-color: transparent;
    // box-shadow: 1px -5px 16px -7px rgba(216,212,79,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
export const AppUI = styled.img`
    height: auto;
    width: 100%;
    margin: 0 auto;
    max-width: 715px;
    display: block;
    box-shadow: 1px 1px 16px -3px rgba(0,0,0,1);
`