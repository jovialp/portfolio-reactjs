import React, { Component } from 'react';

const TITLES = [
    'a web developer',
    'a front end developer',
    'a UI/UX designer'
];

class Skills extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitle();
    }
    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }
    animateTitle = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 4000);
    };
    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];
        return (
            <div className="row">
                <h3>Skills</h3>
                <h4 className={fadeIn ? 'text-info' : 'text-danger'}>I am {title}</h4>
            </div>
        )
    }
}

export default Skills;