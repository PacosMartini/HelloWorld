import React from 'react';

class GenericCheckbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            onChangeFunction : this.props?.checkFunction?.bind(this)
        }
    }

    static getDerivedStateFromProps(props, state){
        return props;
    }

    render() {
        console.log(this.state?.onChangeFunction);
        return (
            <>
                <p>
                    <input  type="checkbox"
                            className="cb-margin"
                            onChange={this.state?.onChangeFunction}/>
                    {this.props.value}
                </p>
            </>
        );
    }
}

export default GenericCheckbox;