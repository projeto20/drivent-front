import styled from 'styled-components';
export const Subtitle = styled.h2`
  font-size: 20px;
  color: #8e8e8e;
  margin-top: 37px;
`;

export const TicketInfoContainer = styled.div`
  width: 290px;
  height: 108px;
  background-color: #ffeed2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 17px 0px 30px 0px;
  p {
    font-size: 16px;
    font-weight: 400;
    color: #454545;
  }
  h3 {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #898989;
  }
`;

export const PaymentConfirmedContainer = styled.div`
  margin-top: 17px;
  display: flex;
  div {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      color: #454545;
      font-size: 16px;
    }
  }
`;
