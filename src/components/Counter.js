import React, { Component } from 'react';

export const Counter = ({onSub, onAdd, counterValue}) => {return (
  <div className="Counter">
    <button className="Counter-button" onClick={onSub}>-</button>
    {counterValue}
    <button className="Counter-button" onClick={onAdd}>+</button>
  </div>
)}
