import styled from 'styled-components';

export const StyledCards = styled.div`
    max-width:350px;
    max-height:322px;
    margin:20px auto;
    font-weight:400;
    font-style:normal;
    display:inline-block;
    background-color:#fff;

    @media screen and (min-width:375px){
        width:343px;
        height:259px;
        text-align:left;
        :nth-child(2){
            display:block;
            font-size:28px;
            padding-left:25px;
            
        }
        :nth-child(3){
            display:block;
            font-size:18px;
            padding:25px;
        }
    }
`;