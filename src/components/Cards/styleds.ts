import styled from "styled-components";

export const StyledCards = styled.div`
  max-width: 350px;
  max-height: 322px;
  margin: 20px auto;
  font-weight: 400;
  font-style: normal;
  border-radius: 10px;
  background-color: white;
  margin: 25px 15px;
  display:inline-table;
  /* display:inset-inline; */ 
  /* display:table-row; */
  /* display:list-item; */
  /* display:inherits; */
 /* display:block flex;  */
 /* display:block flow; */
  /* display:block flow-root; */


  :nth-child(2) {
    color: #13183f;
    font-weight: 800;
    /* margin:0 auto; */

  }
  :nth-child(3) {
    color: #838383;
    width:268px;
    height:90px;
  }
  :nth-child(4) {
    color: #f74780;
    margin:0 auto;
  }

  @media screen and (min-width: 375px) {
    width: 343px;
    height: 259px;
    text-align: left;
    :nth-child(1) {
      font-size: 20px;
    }
    :nth-child(2) {
      display: block;
      font-size: 28px;
      padding-left: 20px;
    }
    :nth-child(3) {
      display: block;
      font-size: 16px;
      padding: 25px;
      font-weight: 400;

    }
    :nth-child(4) {
      padding-left: 25px;
      font-size: 18px;
      font-weight: 700;
      
    }
  }

  @media screen and (min-width:768px){
    width:340px;
    height:259px;
    font-size:24px;

    :nth-child(1) {
      font-size: 20px;
    }
    :nth-child(2) {
      display: block;
      font-size: 28px;
      padding-left: 20px;
    }
    :nth-child(3) {
      display: block;
      font-size: 18px;
      padding: 25px;
      font-weight: 400;
    }
    :nth-child(4) {
      padding-left: 27px;
      font-size: 18px;
      font-weight: 700;
    }
    
  }

  @media screen and (min-width:1440px){
    width:350px;
    height:322px;
    font-size:24px; 

    :nth-child(1) {
      font-size: 24px;
    }
    :nth-child(2) {
      display: block;
      font-size: 28px;
      padding-left: 20px;
    }
    :nth-child(3) {
      display: block;
      font-size: 16px;
      padding: 25px;
      font-weight: 400;
    width:268px;
    }
    :nth-child(4) {
      padding-left: 35px;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

export const StyledInitialCard = styled.div`
  width:339px;
  height:259px;
  font-size:24px;
  font-weight:800;
  font-style:normal;
  line-height:32px;
   display:inline-block;
`;

