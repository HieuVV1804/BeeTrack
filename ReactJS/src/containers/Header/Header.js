import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../Navigator/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };
    render() {
        const { processLogout, userInfo } = this.props;
        console.log(userInfo);
        return (
            <div className="header-container">
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className="header-language">
                    <span className="welcome"><FormattedMessage id="homeheader.welcome" /> {userInfo && userInfo.firstName ? userInfo.firstName : ''}</span>
                    <div className="header-language-logo"><FontAwesomeIcon icon={faGlobe} />
                        <div className="sub-language">
                            <div className="language" onClick={() => this.changeLanguage(LANGUAGES.VI)}>Tiếng Việt</div>
                            <div className="language" onClick={() => this.changeLanguage(LANGUAGES.EN)}>English</div>
                        </div>
                    </div>
                </div>
                <div className="btn btn-logout" onClick={processLogout}>
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
