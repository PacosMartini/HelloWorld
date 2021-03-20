import React from 'react';

function Clock(){
    const date = new Date();
    const hrs = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    const inlineStyle = {
        backgroundColor : "#333",
        fontSize        : "15px",
        color           : "whitesmoke",
        borderRadius    : "3px",
        padding         : "1px"
    }

    if (hrs > 6 && hrs < 12){
        inlineStyle.backgroundColor = "#43bf36";
    } else if (hrs > 12 && hrs < 20){
        inlineStyle.backgroundColor = "#3653e3";
    }

    return(
        <>
        <div id="clock">
            It is currently <span style={inlineStyle}>{hrs}:{mins}</span>
        </div>
        </>
    )
}

export default Clock;