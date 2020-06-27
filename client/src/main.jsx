import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer.js'
import LandingPageContainer from './components/LandingPage';

const store = createStore(reducer)
window.store = store

ReactDOM.render(<Provider store={store}><LandingPageContainer /></Provider>, document.getElementById('mount'));
