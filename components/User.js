import React from 'react';

const user = props => (
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <style jsx>{`
      div {
        background-color: papayawhip;
        border: 1px solid palevioletred;
        box-shadow: 0 2p 3px #ccc;
        padding: 20px;
        text-align: center;
        color: palevioletred;
      }
    `}</style>
  </div>
);

export default user;
