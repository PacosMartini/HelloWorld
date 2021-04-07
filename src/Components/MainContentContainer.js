import React from 'react';
import MainContent from './MainContent';
import ImageCard from './ImageCard';
import imageInfo from '../imageSrc'
import GenericCheckbox from './GenericCheckbox';
import GenericUnorderedList from './GenericUnorderedList';
import introListItems from '../IntroListItems'
import checkboxLabels from '../CheckboxLabels'

// Class component MainContent (gives us access to state)
class MainContentContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introListItems : introListItems,
            checkboxItems : checkboxLabels,
            imageItems : imageInfo
        };
    }

    render(){
        // Mapping UnorderedList Components
        const ULComponents = this.state.introListItems.map((info, index) => {
            return <GenericUnorderedList key={index} value={info} />
        });

        // Mapping Checkbox Components
        const CheckboxComponents = this.state.checkboxItems.map((info, index) => {
            return (
                <GenericCheckbox key={info.id}
                    id={info.id}
                    value={info.text}
                    checked={info.checked}
                    onChangeFunction={info.checkFunction}/>
            );
        });

        // Mapping ImageCard Components
        const ImageComponents = this.state.imageItems.map(info => {
            return (
                <ImageCard key={info.id} url={info.url} description={info.description} />
            );
        });

        return(
            <MainContent
                unorderedListComponents = {ULComponents}
                checkboxComponents = {CheckboxComponents}
                imageComponents = {ImageComponents}
            />
        )
    }
}

export default MainContentContainer;