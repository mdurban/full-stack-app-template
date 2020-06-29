import React, { useState, useEffect } from 'react'
import { getBooks, deleteBook } from '../../requests/books';

const BooksListPage = ({ goToAddBookPage }) => {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    getBooks().then(data => setDataFromServer(data))
  }, []);

  return (
    <div>
      <div>Books:</div>
      {
        dataFromServer.map((book, index) => (
          <div>
            <div key={index} className="book-info">"{book.title}" written by {book.author_first_name} {book.author_last_name}</div>
            <div onClick={() => {
              deleteBook(book.title)
            }}>Delete this book</div>
          </div>
        ))
      }
      <button className='go-to-add-book' onClick={goToAddBookPage}>Add a new book</button>
    </div>
  )
}

export default BooksListPage
