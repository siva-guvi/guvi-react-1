import React, {useState, useEffect} from 'react';
import CounterComponent from './CounterComponent';
import SimpleCard from './Cards'

function App(props) {
 // const counter = 5;
  const [counter, setCounter] = useState(5);
  const [toggle, setToggle] = useState(true);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  useEffect (() => {
    console.log('Mounting Phase')
  }, [])

  useEffect (() => {
    console.log('Mounting and Updating Phase')
  })

  useEffect (() => {
    console.log('Mounting and Counter Updating phase')
  }, [counter])

  useEffect (() => {
    console.log('Mounting and Toggle Updating phase')
  }, [toggle])

  const handleIncrementFromChild = (value) => {
    setCounter ( counter + value);
  }

  const toggleComponent = (bool) => {
    setToggle(bool)
  }
  return (
    <div style={{padding:'10px'}}>
      {console.log('return')}
      <h3 style={{color: 'red'}}>This is {props.appProperty}</h3>

      <SimpleCard subheading="Counter Application" heading="Functional Component" 
      description="Along with counter Application this component contains toggle functionalities also which can unmount Class Component from App Component"
      buttonName="Toggle" toggleFunctionality={(bool) => toggleComponent(bool)} /> <br/>

      Initial Value : {counter} <br/> <br/>

      <button onClick={() => handleIncrement()}>Increment</button> &nbsp;

      <button onClick={() => setCounter(counter - 1)}>Decrement</button> <br/> <br/>

      <button onClick={()=> toggleComponent(!toggle)}> Toggle Component </button>

      {toggle ? <CounterComponent componentName="Class Component" initialValue={5} 
                                  handleIncrement={(value) => handleIncrementFromChild(value)} /> : ''} 

    </div>
  );
}


export default App;