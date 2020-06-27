import React, { useState, useEffect } from 'react'
import { newBook } from '../../requests/books'

const NewBookPage = ({ goToBooksListPage }) => {
  const [bookTitle, setBookTitle] = useState('')
  const [authorFirstName, setAuthorFirstName] = useState('')
  const [authorLastName, setAuthorLastName] = useState('')

  return (
    <div>
      <input onChange={e => setBookTitle(e.target.value)} type='text' name='Book Title' placeholder='title' />
      <input onChange={e => setAuthorFirstName(e.target.value)} type='text' name='Author First Name' placeholder='title' />
      <input onChange={e => setAuthorLastName(e.target.value)} type='text' name='Author Last Name' placeholder='title' />

      <button className='add-book-button' onClick={() => {
        newBook(bookTitle, authorFirstName, authorLastName)
        goToBooksListPage()
      }}>Add Book</button>
    </div>
  )
}

export default NewBookPage
