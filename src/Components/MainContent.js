import React from 'react';
import Clock from './Clock';

function MainContent(){
    const introListItems = ['Showcase my knowledge of React!','Build something from scratch!', 'Practice!'];
    const introListStrings = [];
    const checkboxItems = ['Styling?', 'Multiple pages?', 'Pictures?'];
    const checkboxStrings = [];

    for (const [i,v] of checkboxItems.entries()){
        checkboxStrings.push(<p><input type="checkbox" className="cb-margin"/>{v}</p>)
    }

    for (const [i,v] of introListItems.entries()){
        introListStrings.push(<li>{v}</li>);
    }

    return (
        <>
            <p>My goals with this script are to:</p>
            <ul>
            {introListStrings}
            </ul>

            <p>What else would you like to see?</p>
            {checkboxStrings}

            <Clock/>
        </>
    )
}

export default MainContent;