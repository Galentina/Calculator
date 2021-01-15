import React, { useState } from "react";
import Buttons from "./Buttons";
import ButtonSym from "./ButtonSym";
import './App.css';

function App() {
    const ciphers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '.'] ];
    const symbols = ['+', '-', '*', '/'];
    const [operation, setOperation] = useState({number:0, symbol:''});
    const [upDigit, setupDigit]= useState('');
    const [str, setStr]=useState('');

    const newAction = (sym) => {
        let newStr=str;
        const newOperation = {...operation};
        if (newOperation.symbol===''){
            newOperation.number= (+upDigit);
            newOperation.symbol=sym;}
        else if (sym === '%') {
        let newUpDigit = newOperation.number * (+upDigit)/100;
            setupDigit('' + newUpDigit);
            return;
        }
        else {
            if (newOperation.symbol === '+') {
                newOperation.number = newOperation.number + (+upDigit);
            } else if (newOperation.symbol === '-') {
                newOperation.number = newOperation.number - (+upDigit);
            } else if (newOperation.symbol === '*') {
                newOperation.number = newOperation.number * (+upDigit);
            } else if (newOperation.symbol === '/') {
                if (upDigit==='0') {setupDigit('∞');
                    newOperation.number = 0;
                    newOperation.symbol='';
                    setOperation(newOperation); return;
                }
                else {
                    newOperation.number = newOperation.number / (+upDigit);
                }
            } newOperation.symbol=sym;
        }
            newStr = newStr+sym;
            setStr(newStr);
            setOperation(newOperation);
            setupDigit('');
            console.log(newOperation);
        if (sym === '='){
            setupDigit('' + newOperation.number.toFixed(10));
            newOperation.symbol=sym;
            setOperation(newOperation);
        }
    }

    const updateDigit = (digit, symbol) =>{
        let newDigit;
        let newStr;
        if (symbol==='=') {
            setOperation({number:0, symbol:''});
            newDigit = '' + digit;
            newStr = '' + digit;
        } else {
            newDigit = upDigit + digit;
            newStr=str +digit;
        }
            setupDigit(newDigit);
            setStr(newStr);
    }

     const reset = () => {setupDigit('');
         setOperation({number:0, symbol:''});
         setStr('');
     }

  return (
    <div className='main'>
      <header className='App-header' >C A L C U L A T O R</header>
        <table align='center'>
            <tbody>
            <tr>
                <td  colSpan='2'>
                    <div className='str'>
                    <p>{str}</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td  colSpan='2'>
                <input value={upDigit} className='input' onChange={(event) => setupDigit(event.target.value)} placeholder={'digit a number'}/>
                </td>
            </tr>
            <tr>
                <td>
                    {ciphers.map((el,index) => <Buttons arr ={el} i={index} updateDigit={updateDigit} symbol={operation.symbol}/>)}
                </td>
                <td>
                    {symbols.map((sym, index) => <ButtonSym el ={sym} i={index} newAction={newAction}/>)}
                </td>
            </tr>
            <tr>
                <td><button onClick={reset} className='buttonC'>C</button>
                    <button onClick={() => newAction('%')} className='buttonSym'>%</button></td>
                <td><button onClick={()=>{newAction('=')}} className='buttonSym'>=</button></td>
            </tr>
            </tbody>
        </table>
    </div>
  );
}

export default App;
