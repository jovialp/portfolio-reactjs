import React, { Component } from 'react';
import Title from './Title';
import Skills from './Skills';
import Biodata from './Biodata';

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Title></Title>
                </div>
                <div className="row">
                    <Skills></Skills>
                </div>
                <div className="row">
                    <Biodata></Biodata>
                </div>
            </div>
        );
    }
}

export default Portfolio;