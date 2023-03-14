import styled from 'styled-components';

export default function DayChoice() {
  const days = ['Sexta, 22/10', 'Sábado, 23/10', 'Domingo, 24/10'];
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
      <DaysContainer>
        {days.map((i, idx) => (
          <DayContainer key={idx}>{i}</DayContainer>
        ))}
      </DaysContainer>
    </>
  );
}

const Subtitle = styled.p`
  color: #8e8e8e;
  font-size: 20px;
`;

const DaysContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;
const DayContainer = styled.div`
    font-weight: 400;
    font-size: 14px;
  margin-right: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 37px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
