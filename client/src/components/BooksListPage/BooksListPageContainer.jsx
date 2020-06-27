import { connect } from 'react-redux'
import BooksListPage from './BooksListPage'
import { goToAddBookPage } from '../../store/actions/action-creators'

export default connect(null, { goToAddBookPage })(BooksListPage)
