import React, { Component } from 'react';
import {Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';

class Menu extends Component {


    render() {


        
        return (
            <div>
                <Navbar>
                    <ul>
                        <li><Link to={this.props.url}>Dashboard</Link></li>
                        <li><Link to={this.props.url + '/expenses'}>Dépenses</Link></li>
                        <li><Link to={this.props.url + '/persons'}>Personnes</Link></li>
                    </ul>
                </Navbar>
            </div>
        );
    }
}

export default Menu;