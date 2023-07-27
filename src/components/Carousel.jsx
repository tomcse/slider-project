import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { longList } from "../data";

const Carousel = () => {
  const [slides, setSlides] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevBtn = () => {
    setCurrentPerson((currentIndex) => {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      return newIndex;
    });
  };

  const nextBtn = () => {
    setCurrentPerson((currentIndex) => {
      const newIndex = (currentIndex + 1) % slides.length;
      return newIndex;
    });
  };

  useEffect(() => {
    let sliderID = setInterval(() => {
      nextBtn();
    }, 2000);
    return () => {
      clearInterval(sliderID);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {/* previous btn */}
      <button type="button" className="prev" onClick={prevBtn}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      {/* container for slides */}
      {slides.map((slide, slideIndex) => {
        const { id, image, name, title, quote } = slide;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (slideIndex - currentPerson)}%)`,
              opacity: slideIndex === currentPerson ? 1 : 0,
              visibility: slideIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h4 className="name">{name}</h4>
            <span className="title">{title}</span>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      {/* next btn */}
      <button type="button" className="next" onClick={nextBtn}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </section>
  );
};

export default Carousel;
