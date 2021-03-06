import React, {Component} from 'react';  
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <div>Dashboard</div>
const SurverNew = () => <div>SurverNew</div>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>   
                        <Header/>
                        <Route exact={true} path="/" component={Landing}/>
                        <Route exact={true} path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurverNew}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default  connect(null, actions)(App);
