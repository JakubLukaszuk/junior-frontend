import React from 'react';
import SlideImage from './SlideImage/SlideImage';
import {getWindowDimensions} from '../../utils/dom';
import './AutoImageSlider.css';

const AutoImageSlider = (props) => {
    const {imageNamesArray, play = false, slideImagePaddingInPixc = 10, rightLeftShadow = true} = props;
    const { windowWidth } = getWindowDimensions();
    const imagePositionMultiplyer = Number(100/(imageNamesArray.length-1).toFixed(3))

    const calculateImageWidth = () => {
        const imagesAmout = imageNamesArray.length;
        return Math.ceil(windowWidth/imagesAmout)
    }

    const getImageWidth = () => {
        return calculateImageWidth()
    }


    return (
        <div className = {['AutoImageSlider', 'slider'].join(' ')}>
        {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'left'].join(' ')}/> : null}
        {
                imageNamesArray.map((img, i) =>
                    <SlideImage key = {i} index ={i} imageName = {img} width = { getImageWidth()} rightLeftPadding = {slideImagePaddingInPixc} move = {play} screenWidth ={windowWidth} positionMultiplyer ={imagePositionMultiplyer}/>)
            }
            {rightLeftShadow ? <div className = {['AutoImageSlider','shadow', 'right'].join(' ')}/> : null}
        </div>
    )
}

export default AutoImageSlider;