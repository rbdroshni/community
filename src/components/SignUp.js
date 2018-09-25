import React, { Component } from 'react';
import { render } from 'react-dom';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users:[],
            user: {
                username: '',
                email: '',
                password: '',
                cpassword: ''
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };


    // handleSubmit = event => {
    //     console.log(this.state);
    //     event.preventDefault();
    // }
    componentDidMount() {
        this.addUser();
    }


    addUser = () => {
        const { user } = this.state;
        fetch(`http://localhost:8080/user/add?user_id=${user.user_id} &user_name=${user.user_name}&user_email=${user.user_email}&password=${user.password}&cpassword=${user.cpassword}`)
            .then(response => response.json())
            .then(this.getUser)
            .catch(err => console.error(err))
    }



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }



    render() {
        const { users, user } = this.state;
        return (

            <form onSubmit={this.onSubmit}>
                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-50 font-weight-bold bg-secondary">Sign Up</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>



                            <div className="form-group">
                                <label className="control-label">Username:</label>
                                <input
                                    value={user.user_name}
                                    onChange={e => this.setState({ user: { ...user, user_name: e.target.value } })}
                                    type="text"
                                    name="username"
                                    className="form-control"
                                />


                                <label className="control-label">Email:</label>
                                <input
                                    value={user.user_email}
                                    onChange={e => this.setState({ user: { ...user, user_email: e.target.value } })}
                                    type="text"
                                    name="email"
                                    className="form-control"
                                />

                                <label className="control-label">Password</label>
                                <input
                                    value={user.password}
                                    onChange={e => this.setState({ user: { ...user, password: e.target.value } })}
                                    type="text"
                                    name="password"
                                    className="form-control"
                                />

                                <label className="control-label">Confirm Password</label>
                                <input
                                    value={user.cpassword}
                                    onChange={e => this.setState({ user: { ...user, cpassword: e.target.value } })}
                                    type="text"
                                    name="cpassword"
                                    className="form-control"
                                />

                            </div>



                            {/* <div className="modal-footer d-flex justify-content-center">
                            <input type="button" className="btn bg-danger" value="SignUp" onClick={this.handleSubmit} />
                        </div> */}
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" onClick={this.addUser} >
                                    Submit
                        </button>
                                <button className="btn btn-info btn-lg" >
                                    Reset
                        </button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

        );
    }
};

export default SignUp;


