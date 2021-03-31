'use strict';

const React = require('react');
const logo = require('./images/im1.jpg');

require('./search01.less');

const Search = () => {
  return (
    <div className='box'>
      搜索文字的内容
      <img src={logo} />
    </div>
  );
};

module.exports = <Search />;
