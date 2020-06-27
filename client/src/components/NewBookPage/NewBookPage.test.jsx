import React from 'react'
import NewBookPage from './NewBookPage'
import * as apiRequests from '../../requests/books'

jest.mock('../../requests/books')

describe('NewBookPage', () => {
  test('calls server to add a new book', () => {
    const newBookPage = shallow(<NewBookPage goToBooksListPage={jest.fn()} />)

    expect(newBookPage.find('.add-book-button').text()).toEqual('Add Book')
    newBookPage.find('.add-book-button').simulate('click')

    expect(apiRequests.newBook).toHaveBeenCalled()
  })

  test('calls handler to go to Books List Page', () => {
    const mockGoToBooksListPageHandler = jest.fn()
    const newBookPage = shallow(<NewBookPage goToBooksListPage={mockGoToBooksListPageHandler} />)

    expect(newBookPage.find('.add-book-button').text()).toEqual('Add Book')
    newBookPage.find('.add-book-button').simulate('click')

    expect(mockGoToBooksListPageHandler).toHaveBeenCalled()
  })
})
