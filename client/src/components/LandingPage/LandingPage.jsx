import React from 'react'
import BooksListPageContainer from '../BooksListPage';
import NewBookPageContainer from '../NewBookPage';

const LandingPage = ({ addBook }) => (
  <>
    {
      !addBook && <BooksListPageContainer />
    }
    {
      addBook && <NewBookPageContainer />
    }
  </>
)

export default LandingPage