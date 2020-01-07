import React from 'react';
import './weightCoefModal.css';

export const WeightCoefModal = (props) => {
    return (
        <div className="weightCoefModal_wrapper">
            <div className="weightCoefModal_content">
                <div className="weightCoefModal_close"
                onClick={()=>{
                    props.visibleChanger(false);
                }}>
                    <img src={require('../assets/plus_cross.png')} alt=""/>
                </div>
                <div className="weightCoefModal_input">
                    <label htmlFor="weightCoefModal_input">
                        <p>
                            Укажите значение весового коэффициента, в процентах
                        </p>
                    </label>
                    <input id="weightCoefModal_input" type="text"/>
                </div>
                <button className="weightCoefModal_btn">Сохранить</button>
            </div>
        </div>
    );
}