import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
        <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Login with google</a></li>
        </ul>
        </div>
    </nav>
        )
    }
}