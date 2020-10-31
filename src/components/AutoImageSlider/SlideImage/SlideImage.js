import React , {useRef, useEffect}from 'react';

const SlideImage = (props) => {
    const {index, imageName, width, rightLeftPadding, move, screenWidth} = props;
    const slideImageRef = useRef(null);

    useEffect(()=>{
            if(move){
                startMoving();
            }
    }, [])


    const containerStyle = {
        position: 'absolute',
        padding: `${rightLeftPadding}px`,
        left: `${index*20}%`
    }

    const imageStyle = {
        width: `${width}px`,
        borderRadius: '8px',
        height: 'auto',
    }

    const startMoving = ()=>{
        const slideImageStyle = slideImageRef.current.style;

        let amountPixToMove = screenWidth - slideImageRef.current.offsetLeft+rightLeftPadding*2;

        const moveRate = 150;   // pixels per second to move
        const fitstAnimationTime = amountPixToMove * 1000 / moveRate;
        const difference = screenWidth - amountPixToMove;
        const startPostion = containerStyle.left;
        const secondAnimationTime =  (difference+width+rightLeftPadding*2) * 1000 / moveRate;

        const startAnimationVal = {left: `${slideImageRef.current.offsetLeft+amountPixToMove}px`}

        const loopSlideAnimation = () => {
            slideImageRef.current.animate(startAnimationVal,
            {duration: fitstAnimationTime, easing: "linear", iterations: 1}).onfinish = function()
            {
                this.cancel();

                slideImageStyle.left = `${-rightLeftPadding-width-rightLeftPadding}px`
                slideImageRef.current.animate({left: startPostion},
                {duration: secondAnimationTime, easing: "linear",  iterations: 1}).onfinish = function(){
                    this.cancel();
                    slideImageStyle.left = startPostion;
                    loopSlideAnimation();
                }
            }
        }
        loopSlideAnimation();

    }

    return (
        <div ref={slideImageRef} style = {containerStyle}>
            <img style ={imageStyle} src = {`/assets/photos/${imageName}`} alt = "image of dog"/>
        </div>
    )
}

export default SlideImage;