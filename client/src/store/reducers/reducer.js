export const DEFAULT_STATE = {
  displayAddBookPage: false
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GO_TO_ADD_BOOK_PAGE':
      console.log('GO_TO_ADD_BOOK_PAGE')
      return { ...state, displayAddBookPage: true }
    case 'GO_TO_BOOKS_LIST_PAGE':
      console.log('GO_TO_BOOKS_LIST_PAGE')
      return { ...state, displayAddBookPage: false }
  }
  return state
}