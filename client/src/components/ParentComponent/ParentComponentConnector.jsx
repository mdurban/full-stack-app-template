import { connect } from 'react-redux'
import ParentComponent from './ParentComponent'
import { sampleAction } from '../../store/actions/action-creators'

export default connect(null, { sampleActionHandler: sampleAction })(ParentComponent)
