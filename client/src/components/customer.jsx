import React from 'react';
// import { Link } from 'react-router-dom';

import './customer.css';
// import { routes } from '../routes';


export class Customer extends React.Component {
  render () {
    return (
      <div className="table">
        <h3>Клиенты</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Тип клиента</th>
              <th>ИНН</th>
              <th>Является ПДЛ</th>
              <th>Наличие в чёрных списках</th>
              <th>Риск ОД</th>
              <th>Схема связей</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="ID">1</td>
              <td data-label="CustomerType">Физическое лицо</td>
              <td data-label="INN">500100732259</td>
              <td data-label="PEP">Нет</td>
              <td data-label="Blacklists">Нет</td>
              <td data-label="MLRisk">средний</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">2</td>
              <td data-label="CustomerType">Физическое лицо</td>
              <td data-label="INN">500109282259</td>
              <td data-label="PEP">Нет</td>
              <td data-label="Blacklists">Нет</td>
              <td data-label="MLRisk">средний</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">3</td>
              <td data-label="CustomerType">Физическое лицо</td>
              <td data-label="INN">523100732253</td>
              <td data-label="PEP">Нет</td>
              <td data-label="Blacklists">Есть</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">4</td>
              <td data-label="CustomerType">Физическое лицо</td>
              <td data-label="INN">500100232250</td>
              <td data-label="PEP">Нет</td>
              <td data-label="Blacklists">Нет</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">5</td>
              <td data-label="CustomerType">Физическое лицо</td>
              <td data-label="INN">500100732251</td>
              <td data-label="PEP">Нет</td>
              <td data-label="Blacklists">Нет</td>
              <td data-label="MLRisk">средний</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}