'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import '../../common';

// import './search.css';
import './search01.less';
import logo from './images/im1.jpg';
import { a } from './treeShaking';

const Search = () => {
  return (
    <div className='box'>
      {a()}我是新的组件
      <img src={logo} />
    </div>
  );
};

ReactDOM.render(<Search />, document.getElementById('root'));
