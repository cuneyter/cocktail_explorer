import React from 'react';
import './Hello.css';

const Hello = (props) => {
  return (
    <div className="f1 tc" >
      <h1>Hello, {props.name}!</h1>
      <p>How are you? this is not a function</p>
    </div>
  );
}

export default Hello;
