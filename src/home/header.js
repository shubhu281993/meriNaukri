import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
// import Stuff from './Stuff';
import Contact from './Contact';
import DisplayCard from '../common/card';


export default class Header extends React.Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <NavLink activeStyle={{ borderBottom: 'solid 3px #fff', paddingBottom: '1em' }} exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ borderBottom: 'solid 3px #fff', paddingBottom: '1em' }} exact to="/stuff">Government Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ borderBottom: 'solid 3px #fff', paddingBottom: '1em' }} exact to="/contact">Private Jobs</NavLink>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" />
                        <Route path="/contact" component={Contact} />
                        <Route path="/displayCard/:id" render={props =>
                            <DisplayCard {...props} />}
                        />
                        {/* component={DisplayCard} /> */}
                    </div>
                </div>
            </HashRouter>
        );
    }
}
