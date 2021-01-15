import React from "react";
import './App.css';

function Buttons(props) {
    const {arr}=props;


    return (
        <div align='center'>
            {arr.map(el=>
            <div className='next'>
                <button onClick={() => {props.updateDigit(el, props.symbol)}} className = {(el===0) ?'button0':'button1'}>{el}</button>
            </div>
            )}
        </div>
    );
}

export default Buttons;
