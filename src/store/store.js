import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

//referring index.js
import rootReducer from "../reducers";

//starting initial state should be null
const initialState = {
    pending: false,
    jobs: []
};

//setting middlewarer as a thunk(reference name)
const middleware = [thunk];

//creating a store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ?
            window.__REDUX_DEVTOOLS_EXTENSION__() :
            f => f
    )
);

export default store;
