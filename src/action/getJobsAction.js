import {
    GET_JOBDETAILS, JOBS_LOADING
} from "./actionTypes";
import axios from "axios";


export const setfetchLoading = () => {
    return {
        type: JOBS_LOADING
    };
};
export const fetchJobs = () => dispatch => {
    dispatch(setfetchLoading());
    return axios
        .get("https://merinaukri.el.r.appspot.com/")
        .then(res =>
            dispatch({
                type: GET_JOBDETAILS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_JOBDETAILS,
                payload: null
            })
        );
};


// export const fetchJobs = () => {
//     debugger;
//     return dispatch => {
//         dispatch(fetchJobsPending());
//         fetch('https://merinaukri.el.r.appspot.com/')
//             .then(res =>
//                 debugger;
//                 dispatch({
//                     type: GET_JOBDETAILS,
//                     payload: res.data
//                 })
//             )
//             .catch(err =>
//                 dispatch({
//                     type: GET_JOBDETAILS,
//                     payload: null
//                 })
//             );
//     }
