import React from "react";
import './App.css';

function ButtonSym(props) {
    const {el}=props;



    return (
        <div align='center'>
            <div className='next'>
                <button onClick={()=> props.newAction(el)} className='buttonSym'>{el}</button>
            </div>
        </div>
    );
}

export default ButtonSym;