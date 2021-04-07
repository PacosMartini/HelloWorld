import React from 'react';
import Clock from './Clock';

function MainContent(props){
    return (
        <>
            <p key="1">My goals with this script are to:</p>
            <ul>
                {props.data.ULComponents}
            </ul>

            <p key="2">What else would you like to see?</p>
            <div id="checkboxComponents" className="center-text">
                <div className="left-align">
                    {props.data.CheckboxComponents}
                </div>
            </div>

            <div id="imageComponents" className="hidden">
                <p>Sure thing!</p>
                {props.data.ImageComponents}
            </div>

            <Clock />
        </>
    );
}

export default MainContent;