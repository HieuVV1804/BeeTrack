import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { withRouter, Link } from 'react-router-dom';
import * as actions from "../../store/actions";

import { handleRegisterApi } from '../../services/userService';
import './Register.scss';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            isShowPassword: false,
            errMessage: '',

        };
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    };

    handleOnChangeInput = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
    };


    handleRegister = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleRegisterApi(this.state.email, this.state.password, this.state.firstName, this.state.lastName);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }
            if (data && data.errCode === 0) {
                this.props.userRegisterSuccess(data.user);
                alert('Register Done!')
            }

        } catch (error) {

            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.errMessage
                    })
                }
            }
        }
    };


    render() {
        return (
            <div>
                <div className="register-backgroud">
                    <div className="register-container">
                        <div className="row">
                            <div className="register-content">
                                <div className="col-12 text-register">
                                    Register
                                </div>

                                <div className="col-12 form-group register-input">
                                    <label>Email:</label>
                                    <div className="custom-input-email">
                                        <input
                                            type="email"
                                            className="form-control custom-height"
                                            placeholder="Enter your email"
                                            value={this.state.email}
                                            onChange={(event) => this.handleOnChangeInput(event, "email")}
                                        />
                                    </div>
                                </div>

                                <div className="col-12 form-group register-input">
                                    <label>Password:</label>
                                    <div className="custom-input-password">
                                        <input
                                            type={this.state.isShowPassword ? 'text' : 'password'}
                                            className="form-control custom-height"
                                            placeholder="Enter your password"
                                            value={this.state.password}
                                            onChange={(event) => this.handleOnChangeInput(event, "password")}
                                        />
                                        <span onClick={this.handleShowHidePassword}>
                                            <i class={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 form-group register-input">
                                    <label>First name:</label>
                                    <div className="custom-input-firstname">
                                        <input
                                            type="text"
                                            className="form-control custom-height"
                                            placeholder="First name"
                                            value={this.state.firstName}
                                            onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 form-group register-input">
                                    <label>Last name:</label>
                                    <div className="custom-input-lastname">
                                        <input
                                            type="text"
                                            className="form-control custom-height"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                        />
                                    </div>
                                </div>
                                <div className="col-12" style={{ color: 'red' }}>{this.state.errMessage}</div>

                                <div className="col-12">
                                    <button className="btn-register" onClick={this.handleRegister}>Register</button>
                                </div>

                                <div className="col-12 text-center mt3 register">
                                    Already have an account? <Link to="./login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userRegisterFail: () => dispatch(actions.userRegisterFail()),
        userRegisterSuccess: (userInfo) => dispatch(actions.userRegisterSuccess(userInfo)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
