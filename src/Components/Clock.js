import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        let date = new Date();
        let hrs = date.getHours().toString().padStart(2, '0');
        let mins = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');

        this.state = {
            date,
            hrs,
            mins,
            seconds
        }
    }

    componentDidMount(){
        setInterval(() => {
            let date = new Date();
            let hrs = date.getHours().toString().padStart(2, '0');
            let mins = date.getMinutes().toString().padStart(2, '0');
            let seconds = date.getSeconds().toString().padStart(2, '0');
            this.setState({ hrs, mins, seconds });
        }, 1000);
    }

    render() {
        const inlineStyle = {
            backgroundColor: "#333",
            fontSize: "15px",
            color: "whitesmoke",
            borderRadius: "3px",
            padding: "1px"
        };

        if (this.state.hrs > 6 && this.state.hrs < 12) {
            inlineStyle.backgroundColor = "#43bf36";
            return (
                <>
                    <div id="clock">
                        It is currently <span style={inlineStyle}>{this.state.hrs}:{this.state.mins}:{this.state.seconds}</span>
                    </div>
                </>
            )
        }

        if (this.state.hrs > 12 && this.state.hrs < 20) {
            inlineStyle.backgroundColor = "#3653e3";
            return (
                <>
                    <div id="clock">
                        It is currently <span style={inlineStyle}>{this.state.hrs}:{this.state.mins}:{this.state.seconds}</span>
                    </div>
                </>
            )
        }

        return (
            <>
                <div id="clock">
                    It is currently {this.state.hrs}:{this.state.mins}:{this.state.seconds}
                </div>
            </>
        )
    }
}

export default Clock;