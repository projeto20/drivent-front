import styled from 'styled-components';
import VacancyBox from './VacancyBox';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { useEffect, useState } from 'react';

export default function ActivityBox({ activity }) {
  let duration = Number(activity.end_time.substring(0, 2)) - Number(activity.start_time.substring(0, 2));
  const { enrollment } = useEnrollment();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (enrollment) {
      console.log(activity.ChosenActivities.some((obj) => (obj.enrollmentId = enrollment.id)));
      setIsClicked(activity.ChosenActivities.some((obj) => (obj.enrollmentId = enrollment.id)));
    }
  }, [enrollment, activity]);

  return (
    <>
      <Activitie background={isClicked ? '#D0FFDB' : '#f1f1f1'} height={`${duration * 78}px`}>
        <TimeBox>
          <h2>{activity.name}</h2>
          <h3>
            {activity.start_time} - {activity.end_time}
          </h3>
        </TimeBox>
        <Line height={`${duration * 78 - 22}px`} />
        <VacancyBox activity={activity} isClicked={isClicked} setIsClicked={setIsClicked} />
      </Activitie>
    </>
  );
}

const Activitie = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 265px;
  height: ${(props) => props.height};

  margin-bottom: 10px;

  background: ${(props) => props.background};
  border-radius: 5px;

  position: relative;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 10px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;

    margin-bottom: 6px;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
`;

const Line = styled.div`
  width: 0px;
  height: ${(props) => props.height};
  border: 1px solid #cfcfcf;

  position: absolute;
  left: 180px;
`;
