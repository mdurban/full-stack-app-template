import React, { useState, useEffect } from 'react'
import { getBooks, newBook } from '../../requests/books';

const ParentComponent = ({ sampleActionHandler }) => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const [bookTitle, setBookTitle] = useState('')
  const [authorFirstName, setAuthorFirstName] = useState('')
  const [authorLastName, setAuthorLastName] = useState('')

  useEffect(() => {
    getBooks().then(data => setDataFromServer(data))
  }, []);

  return (
    <div>
      <div>Books:</div>
      {
        dataFromServer.map((book, index) => (
          <div key={index} className="book-info">"{book.title}" written by {book.author_first_name} {book.author_last_name}</div>
        ))
      }
      <input onChange={e => setBookTitle(e.target.value)} type='text' name='Book Title' placeholder='title' />
      <input onChange={e => setAuthorFirstName(e.target.value)} type='text' name='Author First Name' placeholder='title' />
      <input onChange={e => setAuthorLastName(e.target.value)} type='text' name='Author Last Name' placeholder='title' />

      <button onClick={() => newBook(bookTitle, authorFirstName, authorLastName)}>Add book</button>
    </div>
  )
}

export default ParentComponent
