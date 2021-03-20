import React from 'react';
import Clock from './Clock';
import ImageCard from './ImageCard';
import imageInfo from '../imageSrc'

function MainContent(){
    const introListItems = ['Showcase my knowledge of React!','Build something from scratch!', 'Practice!'];
    const introListStrings = [];
    const checkboxItems = ['Styling?', 'Multiple pages?', 'Pictures?'];
    const checkboxStrings = [];


    for (const [i,v] of checkboxItems.entries()){
        checkboxStrings.push(<p key={i}><input type="checkbox" className="cb-margin"/>{v}</p>)
    }

    for (const [i,v] of introListItems.entries()){
        introListStrings.push(<li key={i}>{v}</li>);
    }

    const ImageComponents = imageInfo.map(info => {
        return (
            <ImageCard key={info.id} url={info.url} description={info.description}/>
        )
    });

    return (
        <>
            <p key="1">My goals with this script are to:</p>
            <ul>
            {introListStrings}
            </ul>

            <p key="2">What else would you like to see?</p>
            {checkboxStrings}

            {ImageComponents}

            <Clock/>
        </>
    )
}

export default MainContent;