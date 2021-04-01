import React from 'react';

class GenericCheckbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props?.id,
            value: this.props?.value,
            onChangeFunction : this.props?.checkFunction?.bind(this)
        }
    }

    static getDerivedStateFromProps(props, state){
        return props;
    }

    render() {
        return (
            <>
                <p>
                    <input
                        id={this.state.id}
                        type="checkbox"
                        className="cb-margin"
                        onChange={this.state?.onChangeFunction}/>
                    {this.state.value}
                </p>
            </>
        );
    }
}

export default GenericCheckbox;