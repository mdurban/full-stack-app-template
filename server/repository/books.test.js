const { getBooks, addBook } = require('./books')
const { database } = require('../database/db')

jest.mock('../database/db')

describe('books respository', () => {
  describe('getBooks', () => {
    it('queries all books from Books table', () => {
      getBooks()

      expect(database.query).toHaveBeenCalledWith('SELECT * FROM Books')
    })

    it('returns result of query', async () => {
      database.query.mockResolvedValue({ rows: 'data from database' })
      // database.query.mockReturnValue({ rows: 'data from database' })

      expect(await getBooks()).toEqual('data from database')
    })
  })

  describe('addBook', () => {
    it('inserts into Books table with given parameters', () => {
      addBook('title of book', 'author first name', 'author last name')

      expect(database.query).toHaveBeenCalledWith(`insert into books (title, author_first_name, author_last_name) values ('title of book', 'author first name', 'author last name');`)
    })
  })
})