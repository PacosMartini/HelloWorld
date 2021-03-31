import React from 'react';

class ImageCard extends React.Component{
    render() {
        return (
            <>
                <div className="center-text">
                    <p>
                        <img className="optionImg" alt={this.props?.description} src={this.props?.url} />
                    </p>
                </div>
            </>
        );
    }
}

export default ImageCard;