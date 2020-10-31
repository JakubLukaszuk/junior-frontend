import React from 'react';
import SlideImage from './SlideImage/SlideImage';
import {useWindowDimensions} from '../../utils/dom';
import './AutoImageSlider.css';

const AutoImageSlider = (props) => {
    const {imageNamesArray, play = false, imagesFitsToScreenWidth = false, slideImagePaddingInPixc = 10, rightLeftShadow = true} = props;
    const { windowWidth } = useWindowDimensions();
    const standardImageWidth = 250;

    const calculateImageWidth = () => {
        const imagesAmout = imageNamesArray.length;
        return Math.ceil(windowWidth/imagesAmout)
    }

    const getImageWidth = () => {
        if(imagesFitsToScreenWidth)
        {
            console.log(calculateImageWidth());
            return calculateImageWidth()
        }
        return standardImageWidth;
    }


    return (
        <div className = {['AutoImageSlider', 'slider'].join(' ')}>
        {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'left'].join(' ')}/> : null}
        {
                imageNamesArray.map((img, i) =>
                    <SlideImage key = {i} index ={i} imageName = {img} width = { getImageWidth()} rightLeftPadding = {slideImagePaddingInPixc} move = {play} screenWidth ={windowWidth}/>)
            }
            {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'right'].join(' ')}/> : null}
        </div>
    )
}

export default AutoImageSlider;