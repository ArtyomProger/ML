import React from 'react';
// import { Link } from 'react-router-dom';

import './connection.css';
// import { routes } from '../routes';


export class Connection extends React.Component {
  render () {
    return (
      <div className="table">
        <h3>Схемы связей</h3>
        <table>
          <thead>
            <tr>
              <th>ID_схемы</th>
              <th>инн клиента</th>
              <th>Риск ОД</th>
              <th>Схема связей</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td data-label="ID">1</td>
              <td data-label="INN">500100715251</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">2</td>
              <td data-label="INN">501200732252</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">3</td>
              <td data-label="INN">500101432253</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">4</td>
              <td data-label="INN">50012332254</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
            <tr>
              <td data-label="ID">5</td>
              <td data-label="INN">501200732255</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme">Посмотреть схему связей</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}