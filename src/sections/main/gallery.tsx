import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { PrevIcon } from "../../assets/PrevIcon";
import { NextIcon } from "../../assets/NextIcon";
import Image1 from "../../assets/image-product-1.jpg";
import Image2 from "../../assets/image-product-2.jpg";
import Image3 from "../../assets/image-product-3.jpg";
import Image4 from "../../assets/image-product-4.jpg";
import Image1Thumb from "../../assets/image-product-1-thumbnail.jpg";
import Image2Thumb from "../../assets/image-product-2-thumbnail.jpg";
import Image3Thumb from "../../assets/image-product-3-thumbnail.jpg";
import Image4Thumb from "../../assets/image-product-4-thumbnail.jpg";

export default function Gallery(props: any) {
    const desktop = useMediaQuery("(min-width: 800px)");
    const [activeThumb, setActiveThumb] = useState(0);

    let images = [Image1, Image2, Image3, Image4];

    let imageThumb = [
        {
            image: Image1Thumb,
            key: 0,
        },
        {
            image: Image2Thumb,
            key: 1,
            style: { objectPosition: "top" },
        },
        {
            image: Image3Thumb,
            key: 2,
            style: { objectPosition: "top" },
        },
        {
            image: Image4Thumb,
            key: 3,
        },
    ];

    const [activeImage, setActiveImage] = useState(images[0]);

    function handleThumb(key: number) {
        setActiveImage(images[key]);
        setActiveThumb(key);
    }

    function handlePrev() {
        activeThumb > 0 && setActiveThumb(activeThumb - 1);
        setActiveImage(images[activeThumb]);
    }

    function handleNext() {
        activeThumb < images.length - 1 && setActiveThumb(activeThumb + 1);
        setActiveImage(images[activeThumb]);
    }

    useEffect(() => {
        setActiveImage(images[activeThumb]);
    }, [handleNext, handlePrev]);

    return (
        <div className={"gallery " + props.className} id="gallery">
            <div
                className={
                    "gallery__activeImage " + props.className + "__activeImage"
                }
            >
                <img
                    src={activeImage}
                    alt={activeImage}
                    className="gallery__activeImage--image"
                    style={imageThumb[activeThumb].style}
                    onClick={() => {
                        props.showLighthouse === false &&
                            props.setShowLighthouse(true);
                    }}
                />
                <div
                    className="gallery__activeImage--prevIcon"
                    onClick={handlePrev}
                >
                    <PrevIcon
                        height={18}
                        width={12}
                        className="gallery__activeImage--prevIcon-icon"
                    />
                </div>
                <div
                    className="gallery__activeImage--nextIcon"
                    onClick={handleNext}
                >
                    <NextIcon
                        height={18}
                        width={12}
                        className="gallery__activeImage--nextIcon-icon"
                    />
                </div>
            </div>
            <ul className="gallery__thumbnails">
                {imageThumb.map((image: any) => (
                    <li
                        onClick={(e: any) => {
                            handleThumb(image.key);
                        }}
                        key={image.key}
                        className={
                            activeThumb === image.key
                                ? "gallery__thumbnails--image gallery__thumbnails--image-active"
                                : "gallery__thumbnails--image"
                        }
                    >
                        <img src={image.image} alt={image.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
