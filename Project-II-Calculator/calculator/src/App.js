import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='calc-wrap'>
      <div className='top'>
      <CalculatorDisplay/>
      </div>
    <div className="bottom">
    <ActionButton className='h' content='clear' />
    <NumberButton className='red-button' content="/" />
    <NumberButton className="num-button" content="7" />
    <NumberButton className="num-button" content="8" />
    <NumberButton className="num-button" content="9" />
    <NumberButton className="red-button" content="X" />
    <NumberButton className="num-button" content="4" />
    <NumberButton className="num-button" content="5" />
    <NumberButton className="num-button" content="6" />
    <NumberButton className="red-button" content="-" />
    <NumberButton className="num-button" content="1" />
    <NumberButton className="num-button" content="2" />
    <NumberButton className="num-button" content="3" />
    <NumberButton className="red-button" content="+" />
    <ActionButton className="h" content="0" />
    <NumberButton className="red-button" content="=" />
    </div>
    </div>
  );
};

export default App;