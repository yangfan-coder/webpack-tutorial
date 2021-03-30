'use strict';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../common';

// import './search.css';
import './search01.less';
import logo from './images/im1.jpg';
import { a } from './treeShaking';

const Search = () => {
  const [TextComponent, setTextComponent] = useState(null);

  // 动态加载import
  const loadCompoent = () => {
    import('./text.js').then((Text) => {
      console.log(Text.default);
      setTextComponent(Text.default);
    });
  };

  return (
    <div className='box'>
      {a()}我是新的组件
      <img src={logo} onClick={loadCompoent} />
      {TextComponent ? TextComponent : null}
    </div>
  );
};

ReactDOM.render(<Search />, document.getElementById('root'));
