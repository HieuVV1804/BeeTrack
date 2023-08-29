import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.scss';
import '../HomePage.scss';



class Banner extends Component {

    render() {
        return (
            <div className="section-banner">
                <div className="section-banner-custom">
                    <div className="section-banner-bg"></div>
                    <div className="section-banner-content">
                        <p><FormattedMessage id="banner.title1" /></p>
                        <p><FormattedMessage id="banner.title2" /></p>
                        <div className="banner-desc">
                            <FormattedMessage id="banner.desc" />
                        </div>
                        <button className="bee-btn">
                            <FormattedMessage id="banner.btn-contact" />
                        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
