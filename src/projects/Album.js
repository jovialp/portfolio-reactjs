import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/photos';

//stateless component

const PhotoList = ({ photo: { id, albumId, title, url, thumbnailUrl } }) => {
    return (
        <div className="col-md-4">
            <div className="panel info">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id} {albumId} {title}
                    </h3>
                </div>
                <div className="panel-body">
                    <img src={url} alt="" className="img-thumbnail img-responsve" />
                </div>
            </div>
        </div>
    );
};

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 10, photos: [] };
    }
    componentDidMount() {
        fetch(`${URL}`).then(response => response.json()).then(json => {
            console.log(json);
            this.setState({
                photos: json
            });
        }).catch(error => console.log(error));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 jumotron text-center">
                        <h3>{this.props.title} (Functional) </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-info">Num ={this.state.num}</h3>
                    </div>
                </div>
                <div className="row">
                    {this.state.photos.map(x => (
                        <PhotoList key={x.id} photo={x}></PhotoList>
                    ))}
                </div>
            </div>
        );
    }

}

export default Album;