import styled from 'styled-components';

export const StyledCards = styled.div`
    max-width:350px;
    max-height:322px;
    width:100%; 
    height:100%;
    border: 1px solid black;
    margin:0 auto;
    font-weight:400;
    font-style:normal;
    display:inline-block;
    margin: 10px;
    @media screen and (min-width:375px){
        font-size:16px;
        text-align:left;
        padding:15px;
    }
`;