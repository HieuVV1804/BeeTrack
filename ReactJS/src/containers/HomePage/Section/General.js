import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './General.scss';
import logo1 from '../../../assets/images/logo1.png';
import logo2 from '../../../assets/images/logo2.png';
import logo3 from '../../../assets/images/logo3.png';



class General extends Component {


    render() {
        return (
            <div className="section-general">
                <div className="section-general-content">
                    <div className="section-general-content-left"></div>
                    <div className="section-general-content-right">
                        <p><FormattedMessage id="section-general.title1" /></p>
                        <div className="section-general-content-right-desc">
                            <img src={logo1} alt="Bee" />
                            <div className="content-right-desc">
                                <h4><FormattedMessage id="section-general.heading1" /></h4>
                                <p><FormattedMessage id="section-general.desc1" /></p>
                            </div>
                        </div>
                        <div className="section-general-content-right-desc">
                            <img src={logo2} alt="Bee" />
                            <div className="content-right-desc">
                                <h4><FormattedMessage id="section-general.heading2" /></h4>
                                <p><FormattedMessage id="section-general.desc2" /></p>
                            </div>
                        </div>
                        <div className="section-general-content-right-desc">
                            <img src={logo3} alt="Bee" />
                            <div className="content-right-desc">
                                <h4><FormattedMessage id="section-general.heading3" /></h4>
                                <p><FormattedMessage id="section-general.desc3" /></p>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(General);