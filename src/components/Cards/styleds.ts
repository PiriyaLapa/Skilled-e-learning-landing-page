import styled from "styled-components";

export const StyledCards = styled.div`
  max-width: 350px;
  max-height: 322px;
  margin: 20px auto;
  font-weight: 400;
  font-style: normal;
  border-radius: 10px;
  background-color: white;
  margin: 15px;
  display:inline-table;
  


  :nth-child(2) {
    color: #13183f;
    font-weight: 800;
  }
  :nth-child(3) {
    color: #838383;
  }
  :nth-child(4) {
    color: #f74780;
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
      padding-left: 25px;
    }
    :nth-child(3) {
      display: block;
      font-size: 16px;
      padding: 25px;
      font-weight: 400;
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

