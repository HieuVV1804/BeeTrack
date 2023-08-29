import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../HomePage.scss';
import { FormattedMessage } from 'react-intl';

import './BeeCare.scss'

class BeeCare extends Component {

    render() {
        return (
            <div className="section-beecare">
                <div className="section-beecare-content">
                    <div className="section-beecare-content-left">
                        <h2><FormattedMessage id="section-beecare.heading" /></h2>
                        <p><FormattedMessage id="section-beecare.desc" /></p>
                    </div>
                    <div className="section-beecare-content-right">
                        <div className="section-beecare-content-right-form">
                            <div className="col-12 form-group schedule-input">
                                <label><FormattedMessage id="section-beecare.fullname" /></label>
                                <div className="custom-input-fullname">
                                    <FormattedMessage id="section-beecare.writeFullname">
                                        {placeholder =>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={placeholder}
                                            />
                                        }
                                    </FormattedMessage>
                                </div>
                            </div>
                            <div className="col-12 form-group schedule-input">
                                <label><FormattedMessage id="section-beecare.email" /></label>
                                <div className="custom-input-email">
                                    <FormattedMessage id="section-beecare.writeEmail">
                                        {placeholder =>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={placeholder}
                                            />
                                        }
                                    </FormattedMessage>
                                </div>
                            </div>
                            <div className="col-12 form-group schedule-input">
                                <label><FormattedMessage id="section-beecare.phone" /></label>
                                <div className="custom-input-phone">
                                    <FormattedMessage id="section-beecare.writePhoneNumber">
                                        {placeholder =>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={placeholder}
                                            />
                                        }
                                    </FormattedMessage>
                                </div>
                            </div>
                            <div className="col-12 schedule-input">
                                <label><FormattedMessage id="section-beecare.message" /></label>
                                <div className="custom-input-message ">

                                    <FormattedMessage id="section-beecare.writeMessage">
                                        {placeholder =>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                placeholder={placeholder}
                                            />
                                        }
                                    </FormattedMessage>
                                </div>
                            </div>
                            <button className="bee-btn"><FormattedMessage id="section-beecare.btn" /></button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeeCare);