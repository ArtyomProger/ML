import React from 'react';

import './transaction.css';
// import { routes } from '../routes';

export class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    let that = this;
    fetch('http://localhost:8080/test_db')
    .then((res)=>{
        res.json()
          .then((data)=>{
            that.setState({
              transactions: data
            });
          });
      });
  };

  // getinfo() {
  //   let request = new Request("http://localhost:8080/test_db", {
  //     method: 'GET',
  //     headers: new Headers({ 'Content-Type': 'application/json' })
  //     // body: JSON.stringify(data)
  //   });

  //   // xmlhttprequest()

  //   fetch(request)
  //     .then((res)=>{
  //       res.json()
  //         .then((data)=>{
  //           console.log(data);
  //         });
  //     })
  //     .catch((err)=> {
  //       console.log(err);
  //     });
  // };

  render () {
    return (
      <div className="table">
        <h3>Транзакции</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Тип операции</th>
              <th>Размер операции</th>
              <th>ИНН отправителя</th>
              <th>ИНН получателя</th>
              <th>Статус</th>
              <th>Уровень риска</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr key="transaction.did">
                <td>{ transaction.did }</td>
                <td>{ transaction.operation_type }</td>
                <td>{ transaction.operation_size }</td>
                <td>{ transaction.sender_inn }</td>
                <td>{ transaction.recipient_inn }</td>
                <td>{ transaction.status }</td>
                <td>{ transaction.risk_level }</td>
              </tr>
            ))}
            {/* <tr>
              <td data-label="ID">1</td>
              <td data-label="TransactionType">Покупка квартиры</td>
              <td data-label="Volume">340500</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Заблокирована</td>
              <td data-label="RiskLevel">Высокий</td>
            </tr>
            <tr>
              <td data-label="ID">2</td>
              <td data-label="TransactionType">Оплата по договору №1231</td>
              <td data-label="Volume">12314</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Заблокирована</td>
              <td data-label="RiskLevel">Высокий</td>
            </tr>
            <tr>
              <td data-label="ID">3</td>
              <td data-label="TransactionType">Оплата по договору №234</td>
              <td data-label="Volume">10043</td>
              <td data-label="INNSender">500100375259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">4</td>
              <td data-label="TransactionType">Чек №1213</td>
              <td data-label="Volume">12250</td>
              <td data-label="INNSender">500100932259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Заблокирована</td>
              <td data-label="RiskLevel">Высокий</td>
            </tr>
            <tr>
              <td data-label="ID">5</td>
              <td data-label="TransactionType">Оплата по договору №134</td>
              <td data-label="Volume">12302</td>
              <td data-label="INNSender">500042732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Заблокирована</td>
              <td data-label="RiskLevel">Высокий</td>
            </tr>
            <tr>
              <td data-label="ID">6</td>
              <td data-label="TransactionType">Оплата по договору №123</td>
              <td data-label="Volume">12030</td>
              <td data-label="INNSender">500974732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">7</td>
              <td data-label="TransactionType">Оплата по договору №1899</td>
              <td data-label="Volume">213124</td>
              <td data-label="INNSender">500100456259</td>
              <td data-label="INNRecepient">3002440732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">8</td>
              <td data-label="TransactionType">Оплата по договору №1864</td>
              <td data-label="Volume">12412412</td>
              <td data-label="INNSender">500105232259</td>
              <td data-label="INNRecepient">312300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">9</td>
              <td data-label="TransactionType">Оплата по договору №1244</td>
              <td data-label="Volume">10000000</td>
              <td data-label="INNSender">500100123259</td>
              <td data-label="INNRecepient">3002302232259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">10</td>
              <td data-label="TransactionType">Оплата по договору №12342</td>
              <td data-label="Volume">675474</td>
              <td data-label="INNSender">500102332259</td>
              <td data-label="INNRecepient">30023732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">11</td>
              <td data-label="TransactionType">Оплата по договору №1342</td>
              <td data-label="Volume">12312</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">12</td>
              <td data-label="TransactionType">Оплата по договору №13234</td>
              <td data-label="Volume">123123</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">13</td>
              <td data-label="TransactionType">Оплата по договору №1341</td>
              <td data-label="Volume">120012</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">14</td>
              <td data-label="TransactionType">Оплата по договору №1431</td>
              <td data-label="Volume">12332</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">15</td>
              <td data-label="TransactionType">Оплата по договору №1533</td>
              <td data-label="Volume">1220</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Успешно</td>
              <td data-label="RiskLevel">Средний</td>
            </tr>
            <tr>
              <td data-label="ID">16</td>
              <td data-label="TransactionType">Оплата по договору №13123</td>
              <td data-label="Volume">20200</td>
              <td data-label="INNSender">500100732259</td>
              <td data-label="INNRecepient">3002300732259</td>
              <td data-label="Status">Заблокирована</td>
              <td data-label="RiskLevel">Высокий</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}