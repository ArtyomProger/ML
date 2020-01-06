import React, { useState } from 'react';
import './modalRisk.css';
import { ModalAddParams } from './modalAddParams';

export const ModalRisk = (props) => {
    const [isModalVisible, visibleChanger] = useState(false);
    return (
      <div className="modalRisk_wrapper">
        {isModalVisible && <ModalAddParams visibleChanger={visibleChanger} />}
        <h3>Оценка присущего риска</h3>
        <div className="modalRisk_row">
          <div
            className="modalRisk_row_el"
            onClick={() => {
              visibleChanger(true);
            }}
          >
            Клиенты
          </div>
          <div className="modalRisk_row_el">Весовой коэффициент</div>
        </div>
        <div className="modalRisk_row">
          <div
            className="modalRisk_row_el"
            onClick={() => {
              visibleChanger(true);
            }}
          >
            Продукты и услуги
          </div>
          <div className="modalRisk_row_el">Весовой коэффициент</div>
        </div>
        <div className="modalRisk_row">
          <div
            className="modalRisk_row_el"
            onClick={() => {
              visibleChanger(true);
            }}
          >
            Страны
          </div>
          <div className="modalRisk_row_el">Весовой коэффициент</div>
        </div>
        <div className="modalRisk_row">
          <div
            className="modalRisk_row_el"
            onClick={() => {
              visibleChanger(true);
            }}
          >
            Каналы
          </div>
          <div className="modalRisk_row_el">Весовой коэффициент</div>
        </div>
        <div className="modalRisk_row">
          <div
            className="modalRisk_row_el"
            onClick={() => {
              visibleChanger(true);
            }}
          >
            Прочее
          </div>
          <div className="modalRisk_row_el">Весовой коэффициент</div>
        </div>
        <div
          className="modalRisk_btn"
          onClick={() => {
            props.closeModal();
          }}
        >
          Назад
        </div>
      </div>
    );
}