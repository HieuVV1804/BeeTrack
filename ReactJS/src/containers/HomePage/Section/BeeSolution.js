import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import './BeeSolution.scss';
import '../HomePage.scss';


class BeeSolution extends Component {

    render() {
        return (
            <div className="section-bee-solution">
                <div className="section-bee-solution-header">
                    <FormattedMessage id="bee-solution.title" />
                </div>

                <div className="section-bee-solution-content">
                    <div className="content-bee-breed beesolution ">
                        <div className="content-bee-breed heading"><FormattedMessage id="bee-solution.breed-heading" /></div>
                        <p><FormattedMessage id="bee-solution.breed-content" /></p>
                        <button className="bee-btn"><FormattedMessage id="bee-solution.btn-view" /></button>
                    </div>
                    <div className="content-bee-note beesolution">
                        <div className="content-bee-note heading"><FormattedMessage id="bee-solution.note-heading" /></div>
                        <p><FormattedMessage id="bee-solution.note-content" /></p>
                        <button className="bee-btn"><FormattedMessage id="bee-solution.btn-view" /></button>
                    </div>
                    <div className="content-bee-honey beesolution">
                        <div className="content-bee-honey heading"><FormattedMessage id="bee-solution.honey-heading" /></div>
                        <button className="bee-btn"><FormattedMessage id="bee-solution.btn-view" /></button>
                    </div>
                    <div className="content-bee-check beesolution">
                        <div className="content-bee-check heading"><FormattedMessage id="bee-solution.check-heading" /></div>
                        <button className="bee-btn"><FormattedMessage id="bee-solution.btn-view" /></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BeeSolution);