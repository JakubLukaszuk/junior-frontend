import React from 'react';
import SlideImage from './SlideImage/SlideImage';
import {useWindowDimensions} from '../../utils/dom';
import './AutoImageSlider.css';

const AutoImageSlider = (props) => {
    const {imageNamesArray, imagesFitsToScreenWidth = false, slideImagePaddingInPixc = 10, rightLeftShadow = true} = props;
    const { windowWidth } = useWindowDimensions();
    const standardImageWidth = 250;

    const calculateImageWidth = () => {
        const imagesAmout = imageNamesArray.length;

        if(windowWidth < 992 && imagesAmout > 1)
            return Math.ceil(windowWidth / (imagesAmout - 2) - slideImagePaddingInPixc)
        if(windowWidth < 576 && imagesAmout > 4)
            return Math.ceil(windowWidth / (imagesAmout - 4) - slideImagePaddingInPixc)

        return Math.ceil(windowWidth/imagesAmout)
    }

    const getImageWidth = () => {
        if(imagesFitsToScreenWidth)
        {
            return calculateImageWidth()
        }
        return standardImageWidth;
    }


    return (
        <div className = {['AutoImageSlider', 'slider'].join(' ')}>
        {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'left'].join(' ')}/> : null}
        {
                imageNamesArray.map((img, i) =>
                    <SlideImage key ={i} imageName = {img} width = { getImageWidth()} rightLeftPadding = {slideImagePaddingInPixc}/>)
            }
            {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'right'].join(' ')}/> : null}
        </div>
    )
}

export default AutoImageSlider;