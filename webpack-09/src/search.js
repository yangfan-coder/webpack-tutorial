'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

// import './search.css';
import './search01.less';
import logo from './images/im1.jpg';

const Search = () => {
  return (
    <div className='box'>
      我是search组件 哈哈哈哈哈
      <img src={logo} />
    </div>
  );
};

ReactDOM.render(<Search />, document.getElementById('root'));
