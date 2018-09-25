import React, { Component } from 'react';
import { Navbar, NavbarNav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import { button } from 'react-bootstrap';
import Donation from './donations';
import FindMatch from './findmatch';

import SignUp from './SignUp';


// import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';




class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }



    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }




    render() {
        return (
            <div className="container">
                <div className="right">

                    <form id="signin" className="navbar-form navbar-right" role="form" onSubmit={this.handleSubmit}>
                        <div className="input-group" >
                            <span className="input-group-addon">
                                <i className="glyphicon glyphicon-user"></i>
                            </span>
                            <input value={this.state.email} id="email" type="email" className="form-control" name="email" placeholder="Email Address" onChange={this.onChange} required="true" />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input value={this.state.password} id="password" type="password" className="form-control" name="password" placeholder="Password" onChange={this.onChange} required="true" />
                        </div>
                        <button type="submit" className="btn btn-primary" >Login</button>


                    </form>




                </div>


                <br />
                <br />
                <hr />
                <div className="container">
                    <div className="right">
                        <nav className="navbar navbar-expand-lg navbar-right bg-light">
                            {/* <a className="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr">
                                    <li className="nav-item">
                                        <a className="home-btn btn btn-outline-info my-2 my-sm-1" href="/">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="aboutus-btn btn btn-outline-secondary my-2 my-sm-1" href="./Aboutus.js">AboutUs</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="advertise-btn btn btn-outline-secondary  my-2 my-sm-1" href="advertisement.js">Advertise</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="findmatch-btn btn btn-outline-secondary  my-2 my-sm-0" href="./findmatch">Find Match</a>
                                        <Route path="/findmatch" component={FindMatch} />
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="advertise-btn btn btn-outline-secondary  my-2 my-sm-1" href="#">Classified</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="event-btn btn btn-outline-secondary  my-2 my-sm-1" href="#">Events</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="jokes-btn btn btn-outline-secondary  my-2 my-sm-1" href="#">Jokes</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="galleries-btn btn btn-outline-secondary  my-2 my-sm-1" href="advertisement.js">Galleries</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="contact-btn btn btn-outline-secondary  my-2 my-sm-1" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item" px-2>
                                        <a className="videos-btn btn btn-outline-secondary  my-2 my-sm-1" href="#">Videos</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a className="donate-btn btn btn-outline-warning my-2 my-sm-0" href="../donations">Donate Now</a>

                                    </li>
                                    <li class="nav-item">
                                        <a className="help-btn btn btn-outline-secondary my-2 my-sm-0" href="#">Help</a>

                                    </li>
                                    <li>
                                        <a className="donate-btn btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#modalRegisterForm">SignUp</a>
                                        <SignUp />

                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        );
    }
}


export default Header;

