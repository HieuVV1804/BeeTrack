import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.scss'
import HomeHeader from './HomeHeader';
import Banner from './Section/Banner';
import HomeFooter from './HomeFooter';
import About from './Section/About';
import BeeSolution from './Section/BeeSolution';
import General from './Section/General';
import BeeCare from './Section/BeeCare';
import ScrollToTopButton from './Section/ScrollButton';
import ModalCare from './Section/ModalCare';



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
        };
        return (
            <div>
                < HomeHeader />
                < Banner />
                < BeeSolution />
                < General />
                < About />
                < BeeCare />
                < HomeFooter />
                < ScrollToTopButton />
                {/* < ModalCare /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
