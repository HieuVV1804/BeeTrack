import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import './About.scss'

class About extends Component {

    render() {
        return (
            <div className="section-about">
                <div className="section-about-header">
                    <FormattedMessage id="about.title" />
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <div className="video-wrapper">
                            <iframe
                                // width="560"
                                // height="340"
                                src="https://www.youtube.com/embed/f0Dki6sHqTw"
                                title="Áp dụng công nghệ 4.0 trong nuôi ong | HVN - VTV4"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>

                            </iframe>
                        </div>
                    </div>
                    <div className="content-right">
                        <p><FormattedMessage id="about.description" /></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);