import { 
    COUNTER_ADD,
    COUNTER_DECREASE
 } from '../constants/action_types';

export const addCounter = (value) => {
    return {
        type: COUNTER_ADD,
        value
    }
}

export const decreaseCounter = (value) => {
    return {
        type: COUNTER_DECREASE,
        value
    }
}