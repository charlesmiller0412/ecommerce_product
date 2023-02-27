import { useEffect, useState } from "react";

export default function Gallery() {
    const [activeThumb, setActiveThumb] = useState(0);

    let images = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg",
    ];

    let imageThumb = [
        {
            image: "/images/image-product-1-thumbnail.jpg",
            key: 0,
        },
        {
            image: "/images/image-product-2-thumbnail.jpg",
            key: 1,
        },
        {
            image: "/images/image-product-3-thumbnail.jpg",
            key: 2,
        },
        {
            image: "/images/image-product-4-thumbnail.jpg",
            key: 3,
        },
    ];

    const [activeImage, setActiveImage] = useState(images[0]);

    function handleClick(key: number) {
        setActiveImage(images[key]);
        setActiveThumb(key);
    }

    return (
        <div className="gallery" id="gallery">
            <img
                src={activeImage}
                alt={activeImage}
                className="gallery__activeImage"
            />
            <ul className="gallery__thumbnails">
                {imageThumb.map((image: any) => (
                    <li
                        onClick={(e: any) => {
                            handleClick(image.key);
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
