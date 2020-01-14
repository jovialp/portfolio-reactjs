import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';

//stateless component

const PostList = ({ post: { id, userId, title, body } }) => {
    return (
        <div className="col-md-4">
            <div className="panel info">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id} {userId} {title}
                    </h3>
                </div>
                <div className="panel-body">
                    <p className="text-justify"> {body}</p>
                </div>
            </div>
        </div>
    );
};

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }
    componentDidMount() {
        fetch(`${URL}`).then(response => response.json()).then(json => {
            console.log(json);
            this.setState({
                posts: json
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
                    {this.state.posts.map(x => (
                        <PostList key={x.id} post={x}></PostList>
                    ))}
                </div>
            </div>
        );
    }

}

export default Post;