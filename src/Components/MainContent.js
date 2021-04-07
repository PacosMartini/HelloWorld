import React from 'react';
import ClockContainer from './ClockContainer';

function MainContent(props){
    return (
        <>
            <p key="1">My goals with this script are to:</p>
            <ul>
                {props.unorderedListComponents}
            </ul>

            <p key="2">What else would you like to see?</p>
            <div id="checkboxComponents" className="center-text">
                <div className="left-align">
                    {props.checkboxComponents}
                </div>
            </div>

            <div id="imageComponents" className="hidden">
                <p>Sure thing!</p>
                {props.imageComponents}
            </div>

            <ClockContainer />
        </>
    );
}

export default MainContent;