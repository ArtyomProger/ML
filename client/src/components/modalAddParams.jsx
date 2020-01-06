import React from "react";
import "./modalAddParams.css";

export const ModalAddParams = (props) => {
  return (
    <div className="modalAddParams_wrapper">
      <h3>Оценка клиентской базы</h3>
      <div className="modalAddParams_close" onClick={() => {
          props.visibleChanger();
      }}>
        <img src={require("../assets/plus_cross.png")} alt="" />
      </div>
      <div className="modalAddParams_content">
          {[1,2,3,4,5,6].map((el)=> <ModalAddParamsEl key={el}/>)}
      </div>
      <div className="modalAddParams_btn">Добавить фактор</div>
    </div>
  );
};

const ModalAddParamsEl = () => {
    return (
      <div className="modalAddParams_el">
        <div className="modalAddParams_el_row">
          <label htmlFor="modalAddParams_el_input_1_1">Тип клиента</label>
          <select name="" id="modalAddParams_el_input_1_1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="modalAddParams_el_row">
          <label htmlFor="modalAddParams_el_input_1_2">Оценка риска</label>
          <select name="" id="modalAddParams_el_input_1_2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="modalAddParams_el_row">
          <button>Удалить фактор</button>
          <button>Сохранить</button>
        </div>
      </div>
    );
};