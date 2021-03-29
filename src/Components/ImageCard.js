import React from 'react';

class ImageCard extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="center-text">
                    <p>
                        <input type="radio" className="radioButton" name="backgroundPictures" value={this.props?.description} />
                        <img className="optionImg" alt={this.props?.description} src={this.props?.url} />
                    </p>
                </div>
            </>
        );
    }
}

export default ImageCard;