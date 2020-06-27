import { connect } from 'react-redux'
import { goToBooksListPage } from '../../store/actions/action-creators'
import NewBookPage from './NewBookPage';

export default connect(null, { goToBooksListPage })(NewBookPage)