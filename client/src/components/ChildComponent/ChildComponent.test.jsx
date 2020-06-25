import React from 'react'
import ChildComponent from './ChildComponent'

describe('ChildComponentConnector', () => {
  test('displays value from prop', () => {
    const subject = shallow(<ChildComponent valueFromState={'value'} />)

    expect(subject.find('div').text()).toEqual('child component has a value of value')
  })
})
