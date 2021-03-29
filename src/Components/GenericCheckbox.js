import React from 'react';

class GenericCheckbox extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <>
                <p><input type="checkbox" className="cb-margin" />{this.props.value}</p>
            </>
        );
    }
}

export default GenericCheckbox;