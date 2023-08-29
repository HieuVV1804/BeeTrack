import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    };

    componentDidMount() {
    };

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnChangeInput = (event, inputName) => {
        this.setState({
            [inputName]: event.target.value
        })
        // console.log(event.target.value)
    };

    checkValidateInput = () => {
        let isVal = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isVal = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isVal;
    }

    handleAddNewUser = async () => {
        let isVal = this.checkValidateInput();
        if (isVal === true) {
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader className="bg" style={{ color: 'black' }} toggle={() => { this.toggle() }}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                value={this.state.email}
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                            />
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                            />
                        </div>
                        <div className="input-container max-width-col ">
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Address"
                                value={this.state.address}
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => { this.handleAddNewUser() }}>Add</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
