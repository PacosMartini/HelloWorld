import React from 'react';
import Clock from './Clock';
import ImageCard from './ImageCard';
import imageInfo from '../imageSrc'
import GenericCheckbox from './GenericCheckbox';
import GenericUnorderedList from './GenericUnorderedList';

// Class component MainContent (gives us access to state)
class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introListItems : ['Showcase my knowledge of React!', 'Build something from scratch!', 'Practice!'],
            checkboxItems : ['Styling?', 'Multiple pages?', 'Pictures?']
        }
    }

    render(){
        // Mapping UnorderedList Components
        const ULComponents = this.state.introListItems.map((info, index) => {
            return <GenericUnorderedList key={index} value={info} />
        })

        // Mapping Checkbox Components
        const CheckboxComponents = this.state.checkboxItems.map( (info, index) => {
            return (
                <GenericCheckbox key={index} value={info} />
            );
        });

        // Mapping ImageCard Components
        const ImageComponents = imageInfo.map(info => {
            return (
                <ImageCard key={info.id} url={info.url} description={info.description} />
            );
        });

        return (
            <>
                <p key="1">My goals with this script are to:</p>
                <ul>
                    {ULComponents}
                </ul>

                <p key="2">What else would you like to see?</p>
                {CheckboxComponents}

                {ImageComponents}

                <Clock />
            </>
        )
    }
}

export default MainContent;