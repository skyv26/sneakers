import React, { useEffect, useState } from 'react';
import styles from './Corousal.module.css';
import reactDom from 'react-dom';
import LeftArrowImage from '../../images/icon-previous.svg';
import RightArrowImage from '../../images/icon-next.svg';
import CloseMenuIcon from '../../images/icon-close-1.svg';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import ProductImageThumb1 from '../../images/image-product-1-thumbnail.jpg';
import ProductImageThumb2 from '../../images/image-product-2-thumbnail.jpg';
import ProductImageThumb3 from '../../images/image-product-3-thumbnail.jpg';
import ProductImageThumb4 from '../../images/image-product-4-thumbnail.jpg';


let initialPos = -100;
let pos = 0;

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function customAnimation() {
    initialPos += 100;
    if (initialPos < 400) {
        document.getElementsByClassName(styles.CorousalBox)[0].style.cssText = `
    transform: translate3d(-${initialPos}%,0,0);
    transition: all ease-in 1s;`
            ;
    } else {
        initialPos = -100;
    }
}
setInterval(customAnimation, 3000);


function customAnimation2(pos) {
    initialPos = pos;
    document.getElementsByClassName(styles.CorousalBox)[0].style.cssText = `
    transform: translate3d(-${pos}%,0,0);
    transition: all ease-in 0.25s;`;
}


const corousalBtnHandler = (e) => {

    let currentNode = e.target;
    currentNode = currentNode.tagName.includes('IMG') ? currentNode.parentNode : currentNode.tagName.includes('BUTTON') ? currentNode : '';
    if (currentNode !== '') {
        currentNode = currentNode.className.split(' ')[1];
        if (currentNode === 'leftArrow') {
            pos -= 100;
            if (pos < 0) {
                pos = 0;
            }
            customAnimation2(pos);
        }
        if (currentNode === 'rightArrow') {
            pos += 100;
            if (pos > 300) {
                pos = 0;
            }
            customAnimation2(pos);
        }
    }
}

const ProductThumbnail = () => {
    function ImageEnterHandler(thisPointer) {
        const tags = thisPointer.target.tagName;
        if (tags !== 'IMG') {
            return;
        }
        let picData = thisPointer.target.getAttribute("data-label");
        let ImageWrapperArray = document.getElementsByClassName(styles.ImageWrapper);
        for (let start = 0; start < ImageWrapperArray.length; start++) {
            ImageWrapperArray[start].classList.remove(styles.Active);
            ImageWrapperArray[start].firstChild.classList.remove(styles.WhiteOverlay)
        }
        thisPointer.target.parentElement.classList.add(styles.Active);
        thisPointer.target.classList.add(styles.WhiteOverlay);
        customAnimation2(picData);
    }

    return (
        <div className={styles.ProductThumbnail} onClick={ImageEnterHandler} >
            <div className={`${styles.ImageWrapper} ${styles.ImageWrapper1} ${styles.Active}`} >
                <img src={ProductImageThumb1} alt="Product view 1" data-label="0" className={`${styles.ProductThumbnailImage} ${styles.WhiteOverlay}`} />
            </div>
            <div className={`${styles.ImageWrapper} ${styles.ImageWrapper2}`} >
                <img src={ProductImageThumb2} alt="Product view 2" data-label="100" className={`${styles.ProductThumbnailImage}`} />
            </div>
            <div className={`${styles.ImageWrapper} ${styles.ImageWrapper3}`} >
                <img src={ProductImageThumb3} alt="Product view 3" data-label="200" className={`${styles.ProductThumbnailImage}`} />
            </div>
            <div className={`${styles.ImageWrapper} ${styles.ImageWrapper4}`}>
                <img src={ProductImageThumb4} alt="Product view 4" data-label="300" className={`${styles.ProductThumbnailImage}`} />
            </div>
        </div>
    );
}


const Corousal = (props) => {
    const [ArrowState, UpdatedArrowState] = useState(false);
    const screenSize = useWindowSize();
    const PortalHandler = () => {
        UpdatedArrowState(true);
    };

    const MobileScreenCorousal = () => {

        return (
            <div className={styles.CorousalControllerDisplay}>
                <button className={styles.CloseAnimationButton}
                    onMouseEnter={(e) => {
                        try {
                            document.querySelector(`.${styles.CloseAnimationButton} object`).getSVGDocument("document").querySelector("svg path").style.cssText = "fill:hsl(26, 100%, 55%); cursor:pointer;";
                        }
                        catch (e) {

                        }
                    }}
                    onMouseLeave={(e) => {
                        try {
                            document.querySelector(`.${styles.CloseAnimationButton} object`).getSVGDocument("document").querySelector("svg path").style.fill = "white";
                        }
                        catch (e) {
                        }
                    }}

                    onClick={() => {
                        UpdatedArrowState(prevState => !prevState);
                    }}
                >
                    <object className={styles.CloseButtonImg} data={CloseMenuIcon} type="image/svg+xml" aria-labelledby={styles.CloseAnimationButton} ></object>
                </button>
                <div className={`${styles.Corousal} ${styles.CorousalDisplay}`}>
                    <div className={`${styles.CorousalBox} ${styles.CorousalBoxDisplay}`}>
                        {props.children}
                    </div>
                </div>
                <div className={styles.CorousalControlDisplay} onClick={corousalBtnHandler}>
                    <button className={`${styles.ArrowNav} leftArrow`}>
                        <img src={LeftArrowImage} alt="Left product" />
                    </button>
                    <button className={`${styles.ArrowNav} rightArrow`}>
                        <img src={RightArrowImage} alt="Left product" />
                    </button>
                </div>

                <ProductThumbnail />
            </div>
        );
    }


    return (
        <>
            <div className={styles.CorousalController}>
                <div className={styles.Corousal}>
                    <div className={`${styles.CorousalBox}`} onClick={PortalHandler}>
                        {props.children}
                    </div>
                </div>
                <div className={styles.CorousalControl} onClick={corousalBtnHandler}>
                    <button className={`${styles.ArrowNav} leftArrow`}>
                        <img src={LeftArrowImage} alt="Left product" />
                    </button>
                    <button className={`${styles.ArrowNav} rightArrow`}>
                        <img src={RightArrowImage} alt="Left product" />
                    </button>
                </div>
                <ProductThumbnail />
            </div>
            {ArrowState && screenSize.width > 1000 ? reactDom.createPortal(<ModalOverlay><MobileScreenCorousal /></ModalOverlay>, document.getElementById('modal-overlay')) : ""}
        </>
    );
}

export default Corousal;