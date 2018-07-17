import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    renderCotent(){
        switch(this.props.auth){
            case null: 
                return "Still deciding";
            case false:
                return "im loggedout";
            default:
                return "im loggedin";
        }
    }
    render() {
        console.log(this.props);
        return (
        <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right">
            <li><a href="sass.html">{this.renderCotent()}</a></li>
        </ul>
        </div>
    </nav>
        )
    }
}

function mapStateToProps(state){
    return { auth: state.auth}
}

export default connect(mapStateToProps)(Header);