import React from 'react';
import './modalRisk.css';

export const ModalRisk = (props) => {
    return (
        <div className="modalRisk_wrapper">
            <h3>Оценка присущего риска</h3>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Клиенты</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Продукты и услуги</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Страны</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Каналы</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Прочее</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_btn"
                onClick={() => {
                    props.closeModal();
                }}>
                Назад
            </div>
        </div>
    );
}