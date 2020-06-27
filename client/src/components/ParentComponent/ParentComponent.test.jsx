import React from 'react'
import ParentComponent from './ParentComponent'
import ChildComponentConnector from '../ChildComponent'
import { act } from 'react-dom/test-utils';

describe('ParentComponent', () => {
  test('clicking button calls callback prop', () => {
    const buttonActionMock = jest.fn()
    const subject = shallow(<ParentComponent sampleActionHandler={buttonActionMock} />)

    subject.find('button').simulate('click')

    expect(buttonActionMock).toBeCalled()
  })

  // test('renders ChildComponentConnector', () => {
  //   const subject = shallow(<ParentComponent />)

  //   expect(subject.find(ChildComponentConnector).length).toBe(1)
  // })
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
    const parentComponent = mount(<ParentComponent sampleActionHandler={jest.fn()} />)

    await act(async () => parentComponent);
    parentComponent.update();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/books');
  })

  test('displays info for each book returned from api request', async () => {
    const parentComponent = mount(<ParentComponent sampleActionHandler={jest.fn()} />)

    await act(async () => parentComponent);
    parentComponent.update();

    expect(parentComponent.find('.book-info').first().text()).toEqual('"Harry Potter" written by J.K. Rowling')
    expect(parentComponent.find('.book-info').at(1).text()).toEqual('"The Lord of the Rings" written by J.R.R. Tolkien')
  })
})
