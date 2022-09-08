import React from 'react';
import ReactDOM from 'react-dom/client';

// <React.Fragment> | <></>

const container = (
  <React.Fragment>
    <h1>My first react title</h1>
    <p>Lorem ipsum</p>
  </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Посилання на reactjs.org'
// );

// const linkJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//     Посилання на reactjs.org
//   </a>
// );
