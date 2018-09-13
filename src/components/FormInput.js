import React, { Component } from 'react';

export const FormInput = ({type, name, placeholder, onChange}) =>
  <input type={type} name={name} placeholder={placeholder} onChange={onChange}/>
