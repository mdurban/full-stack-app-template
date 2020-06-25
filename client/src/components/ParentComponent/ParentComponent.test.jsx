import React from 'react'
import ParentComponent from './ParentComponent'
import ChildComponentConnector from '../ChildComponent'

describe('ParentComponent', () => {
  test('clicking button calls callback prop', () => {
    const buttonActionMock = jest.fn()
    const subject = shallow(<ParentComponent sampleActionHandler={buttonActionMock} />)

    subject.find('button').simulate('click')

    expect(buttonActionMock).toBeCalled()
  })

  test('renders ChildComponentConnector', () => {
    const subject = shallow(<ParentComponent />)

    expect(subject.find(ChildComponentConnector).length).toBe(1)
  })
})
