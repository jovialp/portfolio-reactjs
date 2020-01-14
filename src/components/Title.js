import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <img src={this.props.imgUrl} alt="" width="200" height="200" className="imglogo img-circle" />
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <h1 className="text-center">Hello...</h1>
                        <h3 className="text-center">I am Jovial..!</h3>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque qui eveniet aperiam quaerat aliquid iste rerum, eaque adipisci debitis illum quibusdam laborum deserunt, tempore et. Rem exercitationem animi possimus debitis.</p>
                    </div>
                </div>
            </div>
        );
    }
}

Title.defaultProps = {
    imgUrl: 'https://www.w3schools.com/howto/img_avatar.png'
}
export default Title;