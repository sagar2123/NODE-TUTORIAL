import React from 'react';  
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <div>Dashboard</div>
const SurverNew = () => <div>SurverNew</div>
const Landing = () => <div>Landing</div>

const App = () => {
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
};

export default App;