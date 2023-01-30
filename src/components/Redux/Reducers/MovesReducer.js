import { SET_MOVE } from "../Action";

const initialState = {
    count: 0,
    list: []
};

const MovesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_MOVE:
            return {
                ...state,
                ...payload
            }
    
        default:
            return state;
    }
};

export default MovesReducer;
