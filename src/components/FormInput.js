import React, { Component } from 'react';

export const FormInput = ({type, name, value, placeholder, onChange}) =>
  <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
