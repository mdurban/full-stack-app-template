const { getAllBooks, createNewBook } = require('./bookServices')
const { getBooks, addBook } = require('../repository/books')

jest.mock('../repository/books')

describe('book services', () => {
  describe('getAllBooks', () => {
    it('queries books from database', () => {
      getAllBooks()

      expect(getBooks).toHaveBeenCalled()
    })

    it('returns sorted list of books', async () => {
      getBooks.mockResolvedValue(['zebra book', 'armadillo book'])

      expect(await getAllBooks()).toEqual(['armadillo book', 'zebra book'])
    })
  })

  describe('createNewBook', () => {
    it('makes call to repository layer to add book', () => {
      createNewBook({ title: 'title of book', firstName: 'author first name', lastName: 'author last name' })

      expect(addBook).toHaveBeenCalledWith('title of book', 'author first name', 'author last name')
    })
  })
})