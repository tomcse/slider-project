import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { longList } from "../data";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {longList.map((slide) => {
          const { id, image, name, title, quote } = slide;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="name">{name}</h4>
              <span className="title">{title}</span>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
