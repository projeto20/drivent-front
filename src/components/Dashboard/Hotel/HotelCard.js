import styled from 'styled-components';

export default function HotelCard({ id }) {
  function chooseHotel(num) {
    console.log(`fui clicado no ${num}`);
  }
  return (
    <Card onClick={() => chooseHotel(id)}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ve-__cISrPmd6zYoBnoCOFdXn4INGxdpgGy_QUuoHGC8DwsmJJncFSkKNMcJYP3vZvM&usqp=CAU"
        alt="foto-hotel"
      />
      <Title>Driven Hotel</Title>
      <Info>
        <div>
          <h6>Tipo de acomodação:</h6>
          <p>Single e Double</p>
        </div>
        <div>
          <h6>Vagas disponiveis</h6>
          <p>124</p>
        </div>
      </Info>
    </Card>
  );
}

const Card = styled.div`
  width: 196px;
  height: 264px;

  background: #ebebeb;
  border-radius: 10px;
  padding: 14px;

  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: #343434;
  line-height: 23px;
  margin: 10px 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70px;

  div {
    font-size: 12px;
    color: #3c3c3c;

    h6 {
      font-weight: 700;
      margin-bottom: 2px;
    }

    p {
      font-weight: 400;
    }
  }
`;
