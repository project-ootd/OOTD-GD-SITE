import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <IoIosArrowForward size="50" color="pink" />,
    prevArrow: <IoIosArrowBack size="50" color="pink" />,
  };
  return (
    <div className="slider-box">
      <h2> Single Item </h2>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/500/400" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/500/400" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/500/400" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/500/400" alt="" />
        </div>
        <div>
          <img src="http://placekitten.com/500/400" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
