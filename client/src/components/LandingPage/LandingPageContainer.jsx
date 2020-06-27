import { connect } from 'react-redux'
import LandingPage from './LandingPage'

const mapStateToProps = state => ({
  addBook: state.displayAddBookPage
})

export default connect(mapStateToProps)(LandingPage)
