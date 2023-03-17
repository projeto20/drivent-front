
import { CgEnter } from 'react-icons/cg';
import styled from 'styled-components';

export default function ActivityBox() {
  return (
    <>
      <Activitie>
        <TimeBox>
          <h2>Minecraft: montando o PC ideal</h2>
          <h3>09:00 - 10:00</h3>
        </TimeBox>
        <Line></Line>
        <VacancyBox>
          <CgEnter style={{ color: 'green', width: '20px', height: '20px' }} />
          <h2>27 vagas</h2>
        </VacancyBox>
      </Activitie>
    </>
  );
}

const VacancyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: #078632;
    white-space: nowrap;
  }
`;
const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
    margin-top: 6px;
  }
`;
const Line = styled.div`
  display: flex;
  width: 60px;
  height: 0px;
  border: 1px solid #cfcfcf;
  transform: rotate(-90deg);
`;
const Activitie = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  width: 265px;
  height: 79px;
  background: #f1f1f1;
  border-radius: 5px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
