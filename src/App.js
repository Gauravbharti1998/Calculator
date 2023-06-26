import './App.css';
import {useState} from 'react'

function App() {
  const[val, setVal] = useState("0");

  const onChangeHandler=(e)=>{
    setVal( e.target.value); 
  };    
  const acbtn=()=>{
    setVal("0");
  }
  const equalbtn=()=>{
    setVal(eval(val));
  }
  const addInput=(inp)=>
  {
    if (val === '0') {
      setVal( inp);
    } else {
      setVal(val + inp);
    }
  }
  const backspace=()=>{
    setVal(val.substr(0,val.length-1));
  }
  const backsp = "Del"
  return (  
    <div>
      <h1>calculator</h1>
      <input  onChange={e => onChangeHandler(e)} value={val}/>
      <br/>
      <button onClick={acbtn}>AC</button>
      <button onClick={e=>addInput("+")}>+</button>
      <button onClick={e=>addInput("-")}>-</button>
      <button onClick={equalbtn}>=</button>
      <br/>
      <button onClick={e=>addInput("1")}>1</button>
      <button onClick={e=>addInput("2")}>2</button>
      <button onClick={e=>addInput("3")}>3</button>
      <button onClick={e=>addInput("0")}>0</button>
      <br/>
      <button onClick={e=>addInput("4")}>4</button>
      <button onClick={e=>addInput("5")}>5</button>
      <button onClick={e=>addInput("6")}>6</button>
      <button onClick={e=>addInput("/")}>/</button>
      <br/>
      <button onClick={e=>addInput("7")}>7</button>
      <button onClick={e=>addInput("8")}>8</button>
      <button onClick={e=>addInput("9")}>9</button>
      <button onClick={e=>addInput("*")}>x</button>
      <button onClick={e=>backspace()}>{backsp}</button>
    </div>
  );
}

export default App;
