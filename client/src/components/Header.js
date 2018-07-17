import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
    renderCotent(){
        switch(this.props.auth){
            case null: 
                return;
            case false:
                return  <li><a href="/auth/google">Login with google</a></li>
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }
    render() {
        console.log(this.props);
        return (
        <nav>
        <div className="nav-wrapper">
        <Link to= {this.props.auth ? '/surveys' : '/'}>Emaily</Link>
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