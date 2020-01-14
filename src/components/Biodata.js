import React, { Component } from 'react';

export default class Biodata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <article>
                        <h3>Bio Data</h3>
                        {this.state.display ? (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta labore doloribus excepturi impedit a. Animi ducimus nihil qui a provident modi eveniet odio veniam, nam at nulla harum repellat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque dolores dolorum voluptatem voluptatum ratione nulla? Tempora nihil reprehenderit accusantium et temporibus, eum veritatis voluptatum debitis ipsum blanditiis? Explicabo, veniam?
                            <button onClick={this.toggle} className="btn btn-info">Show less</button>
                            </p>

                        ) : (
                                <div>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, aperiam rem! Veniam possimus perspiciatis minima dolorum obcaecati, quidem rerum deserunt, natus molestiae fugit, ipsam magni error iure omnis? Voluptates, repellendus.</p>
                                    <button onClick={this.toggle} className="btn btn-warning">Show More</button>
                                </div>
                            )}
                    </article>
                </div>
            </div>
        );
    }
}
