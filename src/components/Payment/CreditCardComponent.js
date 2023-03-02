import React from 'react';
import Card from 'react-credit-cards';

import { formatCreditCardNumber, formatCVC, formatExpirationDate, formatFormData } from './utils';

import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3Nzc2MTExOH0.caD64_5szst91jOmqNwlEq5H4s-_8puNqm0ZGMPQQa8';

    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();

    const cardData = { ...formData };
    const data = {
      ticketId: 1,
      cardData,
    };

    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/payments/process`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(formData);
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <CardContainer className="App-payment">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <CardForm ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <CardNumber
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                maxLength="19"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <br />
              <NumberDescription>E.g.: 49..., 51..., 36..., 37...</NumberDescription>
            </div>
            <div className="form-group">
              <CardNumber
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <CvcContainer className="row">
              <div className="col-6">
                <ExpiryInput
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <CvcInput
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </CvcContainer>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <PaymentButton className="btn btn-primary btn-block">Realizar Pagamento</PaymentButton>
            </div>
          </CardForm>
        </CardContainer>
      </div>
    );
  }
}
const PaymentButton = styled.button`
width: 182px;
height: 37px;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border: none;
outline: none;
cursor: pointer;
`;
const CardContainer = styled.div`
  display: flex;
  position: absolute;
  margin-top: 21px;
`;
const CardForm = styled.form`
  margin-left: 20px;
  
`;
const CardNumber = styled.input`
width: 400px;
height: 30px;
border-radius: 5px;
margin-top: 10px;
`;
const NumberDescription = styled.small`
  font-size: 15px;
  color: grey;
  margin-bottom: 15px;
`;
const CvcContainer = styled.div`
display:flex;
margin-top: 15px;
`;
const ExpiryInput = styled.input`
height: 30px;
border-radius: 5px;
width: 170px;
margin-right: 10px;
`;
const CvcInput = styled.input`
height: 30px;
border-radius: 5px;
width: 80px;
border-color: grey;
margin-bottom: 10px;
`;
