import React from 'react';

function Clock(props){
    if (props.data.hrs > 6 && props.data.hrs < 12) {
        props.style.backgroundColor = "#43bf36";
        return (
            <>
                <div id="clock">
                    It is currently <span style={props.style}>{props.data.hrs}:{props.data.mins}:{props.data.seconds}</span>
                </div>
            </>
        )
    }

    if (props.data.hrs > 12 && props.data.hrs < 20) {
        props.style.backgroundColor = "#3653e3";
        return (
            <>
                <div id="clock">
                    It is currently <span style={props.style}>{props.data.hrs}:{props.data.mins}:{props.data.seconds}</span>
                </div>
            </>
        )
    }

    return (
        <>
            <div id="clock">
                It is currently {props.data.hrs}:{props.data.mins}:{props.data.seconds}
            </div>
        </>
    )
}

export default Clock;