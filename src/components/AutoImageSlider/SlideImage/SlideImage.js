import React , {useRef, useEffect}from 'react';

const SlideImage = (props) => {
    const {index, imageName, width, rightLeftPadding, move, screenWidth,positionMultiplyer} = props;
    const slideImageRef = useRef(null);

    useEffect(()=>{
        const {loopAnimation, killAnimation} = getAnimationHandler();

        const killAnimationSafely = () =>{
            if(killAnimation!=null)
            {
                killAnimation()
            }
        }
        if(move){
            loopAnimation()
        }
        else{
            killAnimationSafely()
        }
        return ()=>{killAnimationSafely()}
    }, [move])


    const containerStyle = {
        position: 'absolute',
        padding: `${rightLeftPadding}px`,
        left: `${index*positionMultiplyer}%`
    }

    const imageStyle = {
        width: `${width}px`,
        borderRadius: '8px',
        height: 'auto',
    }

    const getAnimationHandler = ()=>{
        const slideImageStyle = slideImageRef.current.style;

        let amountPixToMove = screenWidth - slideImageRef.current.offsetLeft+rightLeftPadding*2;

        const moveRate = 150;   // pixels per second to move
        const fitstAnimationTime = amountPixToMove * 1000 / moveRate;
        const difference = screenWidth - amountPixToMove;
        const startPostion = containerStyle.left;
        const secondAnimationTime =  (difference+width+rightLeftPadding*2) * 1000 / moveRate;

        const startAnimationVal = {left: `${slideImageRef.current.offsetLeft+amountPixToMove}px`}

        const slideImageAnimation = (positionToGo, duration, easing, iterationsNUmber)=> {
            const animation = slideImageRef.current.animate(positionToGo,
                {duration: duration, easing: easing, iterations: iterationsNUmber})
            animation.pause();
            return animation;
        }

        const onFinshFirstSlideAnimation = function(){
            this.pause();
            slideImageStyle.left = `${-rightLeftPadding-width-rightLeftPadding}px`
            secondSlideAnimation.play();
        }

        const onFinshSecondSlideAnimation = function(){
            this.pause();
            slideImageStyle.left = startPostion;
            firstSliedAnimation.play();
        }

       const firstSliedAnimation = slideImageAnimation(startAnimationVal, fitstAnimationTime, "linear", 1);
       firstSliedAnimation.onfinish = onFinshFirstSlideAnimation;

       const secondSlideAnimation = slideImageAnimation({left: startPostion}, secondAnimationTime, "linear", 1);
       secondSlideAnimation.onfinish = onFinshSecondSlideAnimation;

        const loopAnimation = () => {
            firstSliedAnimation.play();
        }

        const killAnimation = () => {
            firstSliedAnimation.cancel();
            secondSlideAnimation.cancel();
        }

        return {killAnimation: killAnimation, loopAnimation: loopAnimation }
    }

    return (
        <div ref={slideImageRef} style = {containerStyle}>
            <img style ={imageStyle} src = {`/assets/photos/${imageName}`} alt = "image of dog"/>
        </div>
    )
}

export default SlideImage;