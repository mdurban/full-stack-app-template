import React from 'react'
import LandingPage from './LandingPage'
import BooksListPageContainer from '../BooksListPage'
import NewBookPageContainer from '../NewBookPage'

describe('LandingPage', () => {
  test('renders Book List when chooseBooks is false', () => {
    const landingPage = shallow(<LandingPage chooseBooks={false} />)

    expect(landingPage.find(NewBookPageContainer)).toHaveLength(0)
    expect(landingPage.find(BooksListPageContainer)).toHaveLength(1)
  })

  test('renders Book List when chooseBooks is true', () => {
    const landingPage = shallow(<LandingPage chooseBooks={true} />)

    expect(landingPage.find(BooksListPageContainer)).toHaveLength(0)
    expect(landingPage.find(NewBookPageContainer)).toHaveLength(1)
  })
})
