import React, { useState, useEffect } from 'react'
import ChildComponentConnector from '../ChildComponent'

const ParentComponent = ({ sampleActionHandler }) => {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(data => setDataFromServer(data))
  }, []);

  return (
    <div>
      <button onClick={sampleActionHandler}>Dispatch action</button>
      {
        dataFromServer && dataFromServer.map((book, index) => <div key={index}>{book.title}</div>)
      }
      <ChildComponentConnector />
    </div>
  )
}

export default ParentComponent
