import { combineReducers } from "redux";

import getJobsReducer from "./getJobsReducer";

export default combineReducers({
    jobs: getJobsReducer
});
