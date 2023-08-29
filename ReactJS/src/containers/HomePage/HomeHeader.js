import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomeHeader.scss';
import logo from '../../assets/images/logo.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false,
            isHeaderActive: false,
            isSubSolutionOpen: false,
            isSubLanguageOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen,
            isHeaderActive: !prevState.isHeaderActive,
        }));
    };

    toggleSubSolution = () => {
        this.setState(prevState => ({
            isSubSolutionOpen: !prevState.isSubSolutionOpen
        }));
    };

    toggleSubLanguage = () => {
        this.setState(prevState => ({
            isSubLanguageOpen: !prevState.isSubLanguageOpen
        }));
    };

    handleScroll = () => {
        const header = document.querySelector('.home-header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    };

    render() {
        return (
            <React.Fragment>
                <div className={`home-header ${this.state.isHeaderActive ? 'active' : ''}`}>
                    <div className="home-header-content">
                        <a href="#" className="home-header-logo">
                            <img src={logo} alt="BeeTrack" />
                            <span>BeeTrack</span>
                        </a>
                        <div class="home-header-menu-icon" onClick={this.toggleMenu}>
                            <FontAwesomeIcon icon={this.state.isMenuOpen ? faTimes : faBars} />
                        </div>
                        <div className={`home-header-menu ${this.state.isMenuOpen ? 'show' : 'hide'}`}>
                            <li>
                                <a href="#" onClick={this.toggleSubSolution}><FormattedMessage id="homeheader.solution" />
                                    <span className="fas fa-chevron-down"></span>
                                </a>
                                <ul className={`sub-bee-solution ${this.state.isSubSolutionOpen ? 'show' : 'hide'}`}>
                                    <li><a href="#"><FormattedMessage id="subsolution.breed" /></a></li>
                                    <li><a href="#"><FormattedMessage id="subsolution.note" /></a></li>
                                    <li><a href="#"><FormattedMessage id="subsolution.honey" /></a></li>
                                    <li><a href="#"><FormattedMessage id="subsolution.check" /></a></li>
                                </ul>
                            </li>
                            <li><a href="#"><FormattedMessage id="homeheader.care" /></a></li>
                            <li><a href="#"><FormattedMessage id="homeheader.about" /></a></li>
                            <li><a href="#"><FormattedMessage id="homeheader.new" /></a></li>
                            <li><a href="#"><FormattedMessage id="homeheader.research" /></a></li>
                            {/* <li><Link to="/login"><FormattedMessage id="homeheader.login" /></Link></li> */}
                            <li><a href="#" onClick={this.toggleSubLanguage}><FontAwesomeIcon icon={faGlobe} /></a>
                                <ul className={`sub-language ${this.state.isSubLanguageOpen ? 'show' : 'hide'}`}>
                                    <li><a href="#" onClick={() => this.changeLanguage(LANGUAGES.VI)}>Tiếng Việt</a></li>
                                    <li><a href="#" onClick={() => this.changeLanguage(LANGUAGES.EN)}>English</a></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);