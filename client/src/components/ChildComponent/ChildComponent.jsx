import React from 'react';

const ChildComponent = ({ valueFromState} ) => (
  <div>
    child component has a value of <span style={{color: 'cyan'}}>{ valueFromState }</span>
  </div>
)

export default ChildComponent
