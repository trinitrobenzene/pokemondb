import { GET, GET_MORE } from "../Action";

const initialState = {
    dex: [],
    count: 1008,
    next: '',
    prev: ''
};

const ListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET:
            return {
                ...state,
                count: payload.count,
                dex: payload.results,
                next: payload.next,
                prev: payload.prev
            }

        case GET_MORE:
            return {
                ...state,
                next: payload.next,
                prev: payload.prev,
                dex: state.dex.concat(payload.results)
            }

        default:
            return state;
    }
};

export default ListReducer;
