import { CgEnter } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import styled from 'styled-components';
import axios from 'axios';

export default function VacancyBox({ activity, isClicked, setIsClicked }) {
  const token = JSON.parse(localStorage.getItem('userData')).token;
  let vacancies = undefined;
  if (activity.ChosenActivities) {
    vacancies = activity.vacancies - activity.ChosenActivities.length;
  }

  function chooseActivity(id) {
    if (vacancies && !isClicked) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/activity/${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          setIsClicked(true);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }

  return (
    <Box onClick={() => chooseActivity(activity.id)} color={vacancies || isClicked ? '#078632' : '#CC6666'}>
      {isClicked ? (
        <BiCheckCircle style={{ color: 'green', width: '22px', height: '22px' }} />
      ) : vacancies ? (
        <CgEnter style={{ color: 'green', width: '20px', height: '20px' }} />
      ) : (
        <AiOutlineCloseCircle style={{ color: 'red', width: '20px', height: '20px' }} />
      )}
      <h2>{isClicked ? 'inscrito' : vacancies ? `${vacancies} vagas` : 'esgotado'}</h2>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 22px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: ${(props) => props.color};
    white-space: nowrap;
  }
`;
