import React from 'react';

function Clock(){
    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const inlineStyle = {
        backgroundColor : "#333",
        fontSize        : "15px",
        color           : "whitesmoke",
        borderRadius    : "3px",
        padding         : "1px"
    }

    return(
        <>
        <div id="clock">
            It is currently <span style={inlineStyle}>{hrs}:{mins}</span> CST (GMT -6)
        </div>
        </>
    )
}

export default Clock;