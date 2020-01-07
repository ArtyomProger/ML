import React, { useState } from 'react';
import './modalRisk.css';
import { ModalAddParams } from './modalAddParams';
import { WeightCoefModal } from './weightCoefModal';

export const ModalRisk = (props) => {
    const [isModal1Visible, visibleChanger] = useState(false);
    const [isModal2Visible, visibleChanger2] = useState(false);
    return (
      <div className="modalRisk_wrapper">
        {isModal1Visible && <ModalAddParams visibleChanger={visibleChanger} />}
        {isModal2Visible && <WeightCoefModal visibleChanger={visibleChanger2} />}
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
          <div className="modalRisk_row_el"
          onClick={()=>{
            visibleChanger2(true);
          }}>Весовой коэффициент</div>
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
          <div className="modalRisk_row_el"
          onClick={()=>{
            visibleChanger2(true);
          }}>Весовой коэффициент</div>
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
          <div className="modalRisk_row_el"
          onClick={()=>{
            visibleChanger2(true);
          }}>Весовой коэффициент</div>
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
          <div className="modalRisk_row_el"
          onClick={()=>{
            visibleChanger2(true);
          }}>Весовой коэффициент</div>
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
          <div className="modalRisk_row_el"
          onClick={()=>{
            visibleChanger2(true);
          }}>Весовой коэффициент</div>
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