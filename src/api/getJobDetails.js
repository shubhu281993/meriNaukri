import { fetchJobsPending, fetchJobsSuccess, fetchJobsError } from '../action/index';

function fetchJobs () {
    return dispatch => {
        dispatch(fetchJobsPending());
        fetch('https://merinaukri.el.r.appspot.com/')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchJobsSuccess(res.jobs));
                return res.jobs;
            })
            .catch(error => {
                dispatch(fetchJobsError(error));
            });
    };
}
export default fetchJobs;
