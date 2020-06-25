import { connect } from 'react-redux'
import ChildComponent from './ChildComponent'

const mapStateToProps = state => ({
  valueFromState: state.helloWorld
})

export default connect(mapStateToProps, null)(ChildComponent)
