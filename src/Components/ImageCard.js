import React from 'react';

function ImageCard(props){
    return(
        <>
            <p>
                <input type="radio" className="radioButton" name="backgroundPictures" value={props?.description}/>
                <img className="optionImg" alt={props?.description} src={props?.url}/>
            </p>
        </>
    );
}

export default ImageCard;