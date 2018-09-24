import { connect } from 'react-redux';
import { 
    addCounter,
    decreaseCounter
 } from '../actions/action_creators';
import App from '../Components/App';

const mapStatetoProps = (state) => {
    return {
        breakLength: state.breakLength,
        sessionLength: state.sessionLength
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCounter: (value) => {
            dispatch(addCounter(value));
        },
        decreaseCounter: (value) => {
            dispatch(decreaseCounter(value));
        }
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(App);