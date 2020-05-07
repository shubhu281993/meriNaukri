import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import { Provider } from 'react-redux';
import store from "./store/store";
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import Header from './home/header';
// import { jobsReducer } from '../src/reducers/index';
// const store = createStore(jobsReducer, initalState);
// let store = createStore(jobsReducer, applyMiddleware(thunk));

class Welcome extends React.Component {
    render () {
        return (
            <>
                <Header />
            </>
        );
    }
}

// ReactDOM.render(<Welcome />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <Welcome />
    </Provider>,
    document.getElementById('root')
);
