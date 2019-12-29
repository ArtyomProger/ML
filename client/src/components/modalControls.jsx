import React from 'react';
import './modalRisk.css';

export const ModalControls = (props) => {
    return (
        <div className="modalControls_container modalRisk_wrapper">
            <h3>Оценка эффективности инструментов контроля</h3>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Управление</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Принципы и процедуры</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">НПК</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Прочие оценки рисков</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Управленческая информация</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Срок хранения</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Служба ПОД</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Направление СПО</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Мониторинг и контроль</div>
                <div className="modalRisk_row_el">Весовой коэффициент</div>
            </div>
            <div className="modalRisk_row">
                <div className="modalRisk_row_el">Инструменты контроля</div>
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