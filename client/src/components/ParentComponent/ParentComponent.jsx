import React, { useState, useEffect } from 'react'
import ChildComponentConnector from '../ChildComponent'

const ParentComponent = ({ sampleActionHandler }) => {
  const [dataFromServer, setDataFromServer] = useState('initial');

  useEffect(() => {
    fetch('http://localhost:5000/express_backend')
      .then(response => response.json())
      .then(data => setDataFromServer(data.express));
  }, []);

  return (
    <div>
      <button onClick={sampleActionHandler}>Dispatch action</button>
      <div>{dataFromServer}</div>
      <ChildComponentConnector />
    </div>
  )
}

export default ParentComponent
