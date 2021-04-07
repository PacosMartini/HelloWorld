import React from 'react';
import Clock from './Clock';

class ClockContainer extends React.Component{
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
        
        return (
            <Clock
                    style = {inlineStyle}
                    data = {this.state}
            />
        )
    }
}

export default ClockContainer;