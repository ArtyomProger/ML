import React from 'react';
// import { Link } from 'react-router-dom';

import './connection.css';

// import ReactBpmn from 'react-bpmn';
import ReactBpmn from './ReactBpmn';
// import { routes } from '../routes';

export class Connection extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      schema: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  closeModal() {
    this.setState({ isModalVisible: false });
  }

  openModal(el) {
    fetch(`http://localhost:8080/connections/${el.target.getAttribute("data-index")}`)
      .then((res)=>{
        res.json()
          .then((data)=>{
            this.setState(()=>({
              schema: data[0].schema,
              isModalVisible: true
            }));
          });
      });
  }

  render () {
    return (
      <div className="table">
        {this.state.isModalVisible && 
        <SchemaModal schema={this.state.schema} 
        closeModal={this.closeModal}/>}
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
              <td className="table_btn" data-label="Scheme" data-index="12"
                onClick={(el)=>{
                  this.openModal(el);
                }}>
                Посмотреть схему связей
              </td>
            </tr>
            <tr>
              <td data-label="ID">2</td>
              <td data-label="INN">501200732252</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme" data-index="2"
                onClick={(el)=>{
                  this.openModal(el);
                }}>
                Посмотреть схему связей
              </td>
            </tr>
            <tr>
              <td data-label="ID">3</td>
              <td data-label="INN">500101432253</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme" data-index="3"
                onClick={(el)=>{
                  this.openModal(el);
                }}>
                Посмотреть схему связей
              </td>
            </tr>
            <tr>
              <td data-label="ID">4</td>
              <td data-label="INN">50012332254</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme" data-index="4"
                onClick={(el)=>{
                  this.openModal(el);
                }}>
                Посмотреть схему связей
              </td>
            </tr>
            <tr>
              <td data-label="ID">5</td>
              <td data-label="INN">501200732255</td>
              <td data-label="MLRisk">Высокий</td>
              <td className="table_btn" data-label="Scheme" data-index="5"
                onClick={(el)=>{
                  this.openModal(el);
                }}>
                Посмотреть схему связей
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const SchemaModal = (props) => {
  return (
    <div className="schemaModal_wrapper">
      <div className="schemaModal_close"
        onClick={()=>{
          props.closeModal()
        }}>
        <img src={require("../assets/plus_cross.png")} alt="" />
      </div>
      <ReactBpmn url={props.schema}/>
    </div>
  );
}