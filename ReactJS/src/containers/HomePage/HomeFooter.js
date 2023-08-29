import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeFooter.scss'

class HomeFooter extends Component {

    render() {
        return (
            <div className="home-footer">
                <div className="home-footer-content">
                    <div className="home-footer-content-col">
                        <div className="home-footer-content-col-heading">BeeTrack</div>
                        <ul className="home-footer-content-col-list">
                            <li>
                                <a href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+C%C3%B4ng+Ngh%E1%BB%87+Th%C3%B4ng+Tin+Truy%E1%BB%81n+Th%C3%B4ng+-+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+B%C3%A1ch+khoa+H%C3%A0+n%E1%BB%99i/@21.0053816,105.8459837,18.51z/data=!4m9!1m2!2m1!1sMICA+B1+HUST!3m5!1s0x3135ac76827aaaab:0xf0580eb2ff0e1b64!8m2!3d21.004366!4d105.8465731!16s%2Fg%2F11cn0rrwl7?entry=ttu">
                                    <i className="fa fa-map-marker"></i>
                                    <span><FormattedMessage id="footer.location" /> </span>
                                </a>
                            </li>
                            <li><i className="fa fa-envelope"></i> Email: BeeTrack@gmail.com</li>
                            <li><i className="fa fa-phone"></i> <FormattedMessage id="footer.phone" />: 1234567890</li>
                        </ul>
                    </div>
                    <div className="home-footer-content-col">
                        <div className="home-footer-content-col-heading"><FormattedMessage id="footer.navigate" /></div>
                        <ul className="home-footer-content-col-list">
                            <li><a href="#beesolution"><FormattedMessage id="homeheader.solution" /></a></li>
                            <li><a href="#beecare"><FormattedMessage id="homeheader.care" /></a></li>
                            <li><a href="#about"><FormattedMessage id="homeheader.about" /></a></li>
                            <li><a href="#new"><FormattedMessage id="homeheader.new" /></a></li>
                            <li><a href="#research"><FormattedMessage id="homeheader.research" /></a></li>
                        </ul>

                    </div>
                    <div className="home-footer-content-col">
                        <div className="home-footer-content-col-heading"><FormattedMessage id="footer.policy" /></div>

                    </div>
                    <div className="home-footer-content-col">
                        <div className="home-footer-content-col-heading"><FormattedMessage id="footer.support" /></div>

                    </div>
                </div>

                <div className="home-footer-copyright">
                    <div className="home-footer-copyright-text">&copy; 2023 BeeTrack</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

