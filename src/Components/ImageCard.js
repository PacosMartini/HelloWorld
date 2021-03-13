import React from 'react'

function ImageCard(props){
    return(
        <>
            <p>
                <input type="radio" className="radioButton" name="backgroundPictures" value={props.imageInfo.option}/>
                <img className="optionImg" alt={props.imageInfo.description} src={props.imageInfo.url}/>
            </p>
        </>
    )
}

export default ImageCard;