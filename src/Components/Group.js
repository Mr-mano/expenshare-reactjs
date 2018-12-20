
import React, {Component} from 'react';
import Menu from "./Menu";
import {Route} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Expenses from "./Expenses/Expenses";
import Persons from "./Persons/Persons";

class Group extends Component {
render() {

    return (
    <div>
        <h1>{this.props.match.params.slug}</h1>
        <Menu url={this.props.match.url}/>
        <Route path={this.props.match.url} exact component={Dashboard}/>
        <Route path={this.props.match.url + '/expenses'} component={Expenses}/>
        <Route path={this.props.match.url + '/persons'} render={props => <Persons {...props} slug={this.props.match.params.slug} />}/>
    </div>
    );
}
}

export default Group;
