import './App.css';
import { useState } from 'react'

function App() {
  const [val, setVal] = useState("0");

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };
  const acbtn = () => {
    setVal("0");
  }
  const equalbtn = () => {
    //eslint-disable-next-line
    setVal(eval(val));
  }
  const addInput = (inp) => {
    if (val === '0') {
      setVal(inp);
    } else {
      setVal(val + inp);
    }
  }
  const backspace = () => {
    setVal(val.substring(0, val.length - 1));
  }
  const backsp = "Del"
  return (
    <div className='overall'>
      <h1>C A L C U L A T O R</h1>
      <div className='inputsc'>
        <input className='screen' onChange={e => onChangeHandler(e)} value={val} />
      </div>
      <div className='nonscreen'>
        <button className='buttons' onClick={acbtn}>AC</button>
        <button className='buttons' onClick={e => addInput("(")}>(</button>
        <button className='buttons' onClick={e => addInput(")")}>)</button>
        <button className='buttons' onClick={e => backspace()}>{backsp}</button>
        <br />
        <button className='buttons' onClick={e => addInput("1")}>1</button>
        <button className='buttons' onClick={e => addInput("2")}>2</button>
        <button className='buttons' onClick={e => addInput("3")}>3</button>
        <button className='buttons' onClick={equalbtn}>=</button>
        <br />
        <button className='buttons' onClick={e => addInput("4")}>4</button>
        <button className='buttons' onClick={e => addInput("5")}>5</button>
        <button className='buttons' onClick={e => addInput("6")}>6</button>
        <button className='buttons' onClick={e => addInput("/")}>/</button>
        <br />
        <button className='buttons' onClick={e => addInput("7")}>7</button>
        <button className='buttons' onClick={e => addInput("8")}>8</button>
        <button className='buttons' onClick={e => addInput("9")}>9</button>
        <button className='buttons' onClick={e => addInput("*")}>x</button>
        <br/>
        <button className='buttons' onClick={e => addInput("%")}>x</button>
        <button className='buttons' onClick={e => addInput("0")}>0</button>
        <button className='buttons' onClick={e => addInput("+")}>+</button>
        <button className='buttons' onClick={e => addInput("-")}>-</button>
      </div>
    </div>
  );
}

export default App;
