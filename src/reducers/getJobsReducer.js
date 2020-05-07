import { JOBS_LOADING, GET_JOBDETAILS } from '../action/actionTypes';
// import
const initialState = {
    pending: false,
    jobs: []
};

export default function (state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case JOBS_LOADING:
            return {
                ...state,
                pending: true
            };
        case GET_JOBDETAILS:
            return {
                ...state,
                pending: false,
                jobs: action.payload
            };
        default:
            return state;
    }
}
