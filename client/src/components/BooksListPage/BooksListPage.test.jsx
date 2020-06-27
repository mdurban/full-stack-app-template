import React from 'react'
import BooksListPage from './BooksListPage'
import { act } from 'react-dom/test-utils';

describe('BooksListPage', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          { title: 'Harry Potter', author_first_name: 'J.K.', author_last_name: 'Rowling' },
          { title: 'The Lord of the Rings', author_first_name: 'J.R.R.', author_last_name: 'Tolkien' }
        ]),
      })
    );
  })

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  })

  test('makes call to fetch all books on render', async () => {
    const booksList = mount(<BooksListPage sampleActionHandler={jest.fn()} />)

    await act(async () => booksList);
    booksList.update();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/books');
  })

  test('displays info for each book returned from api request', async () => {
    const booksList = mount(<BooksListPage sampleActionHandler={jest.fn()} />)

    await act(async () => booksList);
    booksList.update();

    expect(booksList.find('.book-info').first().text()).toEqual('"Harry Potter" written by J.K. Rowling')
    expect(booksList.find('.book-info').at(1).text()).toEqual('"The Lord of the Rings" written by J.R.R. Tolkien')
  })
})
