import { SET_VERSION } from '../Action';

const initialState = {
    count: 12,
    versions: [],
};

export default function GameVersion(state = initialState, { type, payload }) {
    switch (type) {
        case SET_VERSION:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
}
