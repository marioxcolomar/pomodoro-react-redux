import {
    COUNTER_ADD,
    COUNTER_DECREASE
} from '../constants/action_types';

const defaultState = {
    breakLength: 5,
    sessionLength: 25
}

const root_reducer = (state = defaultState, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            if (action.value === 'break') {
                return Object.assign({}, state, { 
                    breakLength: state.breakLength + 1 
                });
            }
            if (action.value === 'session') {
                return Object.assign({}, state, {
                    sessionLength: state.sessionLength + 1
                });
            } else {
                return state;
            }
        case COUNTER_DECREASE:
            if (action.value === 'break') {
                return Object.assign({}, state, { 
                    breakLength: state.breakLength - 1 
                });
            }
            if (action.value === 'session') {
                return Object.assign({}, state, {
                    sessionLength: state.sessionLength - 1
                });
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default root_reducer;