import { FETCH_JOBS_ERROR, FETCH_JOBS_PENDING, FETCH_JOBS_SUCCESS } from '../action/index';

export const initialState = {
    pending: false,
    jobs: [],
    error: null
};

export function jobsReducer (state = initialState, action) {
    debugger;
    switch (action.type) {
        case FETCH_JOBS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                pending: false,
                jobs: action.payload
            };
        case FETCH_JOBS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}
export const getJobs = state => state.jobs;
export const getJobsPending = state => state.pending;
export const getJobsError = state => state.error;
