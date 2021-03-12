import React, { useState } from 'react';
import Main from './components/Main/Main';
import { name } from './forms';
import './main.scss';

export default function App() {
  return (
    <div className='container'>
      <div className='header'>
        <h1 className='header__heading'>Idris Taiwo</h1>
        <p className='header__subheading'>The Front End Developer</p>
      </div>
      <Main />
    </div>
  );
}
