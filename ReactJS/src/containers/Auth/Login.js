import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { withRouter, Link } from 'react-router-dom';
import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from '../../services/userService';


export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        };
    }

    handleOnChangeInput = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
    };

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.email, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login done')
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

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    };

    render() {
        return (
            <div>
                <div className="login-backgroud">
                    <div className="login-container">
                        <div className="row">
                            <div className="login-content">
                                <div className="col-12 text-login">
                                    Login
                                </div>

                                <div className="col-12 login-input">
                                    <label>Email:</label>
                                    <div className="custom-input-email">
                                        <input
                                            type="text"
                                            className="form-control custom-height"
                                            placeholder="Enter your email"
                                            value={this.state.email}
                                            onChange={(event) => this.handleOnChangeInput(event, "email")}
                                        />
                                    </div>
                                </div>

                                <div className="col-12 login-input">
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
                                <div className="col-12" style={{ color: 'red' }}>{this.state.errMessage}</div>

                                <div className="col-12">
                                    <button className="btn-login" onClick={this.handleLogin}>Login</button>
                                </div>
                                <div className="col-12">
                                    <span className="forgot-password">Forgot your password?</span>
                                </div>
                                <div className="col-12 text-center mt3 register">
                                    Don't have an account? <Link to="/register">Register here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// redux
const mapStateToProps = state => {
    return {
        language: state.app.language,
        userInfo: state.user.userInfo

    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
