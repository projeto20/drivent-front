import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function DayChoice({ setChoosenDay }) {
  const token = JSON.parse(localStorage.getItem('userData')).token;
  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const [dateData, setDateData] = useState(null);
  const [isClicked, setIsClicked] = useState(null);

  useEffect(() => {
    const dateRequisition = axios.get(`${process.env.REACT_APP_API_BASE_URL}/activity`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dateRequisition
      .then((res) => {
        setDateData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento:</Subtitle>
      <DaysContainer>
        {dateData &&
          dateData.map((date, idx) => (
            <DayContainer
              key={idx}
              background={isClicked === idx ? '#FFD37D' : '#e0e0e0'}
              onClick={() => {
                setChoosenDay(idx);
                setIsClicked(idx);
              }}
            >
              {week[dayjs(date.date).day()]}, {dayjs(date.date).date()}/{dayjs(date.date).month() + 1}
            </DayContainer>
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
  background-color: ${(props) => props.background};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;
