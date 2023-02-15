/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

export default function Slider() {
  const images = useMemo(
    () => [
      "/assets/image-slide-1.jpg",
      "/assets/image-slide-2.jpg",
      "/assets/image-slide-3.jpg",
      "/assets/image-slide-4.jpg",
      "/assets/image-slide-5.jpg",
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  imageRefs.current = new Array(images.length).fill(null);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      const containerWidth = containerRef.current?.clientWidth;
      const imageWidth = containerWidth ? containerWidth / images.length : 0;
      imageRefs.current.forEach((image) => {
        image.style.width = `${imageWidth}px`;
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  const containerStyle = {
    width: `${images.length * 100}%`,
    transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
    transition: "transform 500ms ease-in-out",
  };

  return (
    <>
      <div
        id="container"
        className="h-64 mt-6 mx-auto w-full overflow-hidden"
        ref={containerRef}
      >
        <div className="flex h-full" style={containerStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="object-fit h-full min-w-[24rem] transition duration-500 ease-in-out transform rounded-3xl p-4"
              ref={(imageRef) => {
                if (imageRef) {
                  imageRefs.current[index] = imageRef;
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="p-6 bg-black rounded-full shadow-md hover:shadow-lg hover:bg-purple focus:outline-none"
          onClick={handlePrevClick}
        >
          <Image
            src={"/assets/icon-arrow-left.svg"}
            alt="icon-arrow-left"
            width={10}
            height={10}
            className="w-auto h-auto"
          />
        </button>
        <button
          className="p-6 bg-black rounded-full shadow-md hover:shadow-lg hover:bg-purple focus:outline-none"
          onClick={handleNextClick}
        >
          <Image
            src={"/assets/icon-arrow-right.svg"}
            alt="icon-arrow-right"
            width={10}
            height={10}
            className="w-auto h-auto"
          />
        </button>
      </div>
    </>
  );
}
