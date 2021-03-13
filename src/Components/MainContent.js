import React from 'react';
import Clock from './Clock';
import ImageCard from './ImageCard';

function MainContent(){
    const introListItems = ['Showcase my knowledge of React!','Build something from scratch!', 'Practice!'];
    const introListStrings = [];
    const checkboxItems = ['Styling?', 'Multiple pages?', 'Pictures?'];
    const checkboxStrings = [];
    const imageInfo = [
        {url: "https://w.wallhaven.cc/full/49/wallhaven-492qz8.jpg", description: "Magikarp"},
        {url: "https://w.wallhaven.cc/full/ne/wallhaven-ney95k.jpg", description: "Caterpie"},
        {url: "https://w.wallhaven.cc/full/mp/wallhaven-mpmge9.jpg", description: "Dratini"},
        {url: "https://w.wallhaven.cc/full/4o/wallhaven-4ogkjp.jpg", description: "Cyndaquil"}
    ]


    for (const [i,v] of checkboxItems.entries()){
        checkboxStrings.push(<p key={i}><input type="checkbox" className="cb-margin"/>{v}</p>)
    }

    for (const [i,v] of introListItems.entries()){
        introListStrings.push(<li key={i}>{v}</li>);
    }

    let propsArray = [];
    for (let key of Object.keys(imageInfo)){
        let singleImageProp = {};

        console.log(key);
        singleImageProp.url = imageInfo[key].url;
        singleImageProp.option = imageInfo[key].description;
        singleImageProp.option = key+1;

        propsArray.push(singleImageProp);
    }

    return (
        <>
            <p key="1">My goals with this script are to:</p>
            <ul>
            {introListStrings}
            </ul>

            <p key="2">What else would you like to see?</p>
            {checkboxStrings}

            <ImageCard
                imageInfo = {propsArray[0]}
            />

            <ImageCard
                imageInfo = {propsArray[1]}
            />

            <ImageCard
                imageInfo = {propsArray[2]}
            />

            <ImageCard
                imageInfo = {propsArray[3]}
            />
            
            <Clock/>
        </>
    )
}

export default MainContent;