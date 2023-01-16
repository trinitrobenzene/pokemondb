import { SET_MOVE } from "../Action";

const initialState = {
    count: 900,
    list: []
};

const MovesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_MOVE:
            return {
                ...state,
                count: payload.count,
                list: payload.results.map(_ => _.url)
            }
    
        default:
            return state;
    }
};

export default MovesReducer;
