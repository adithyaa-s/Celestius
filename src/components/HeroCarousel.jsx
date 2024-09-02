import React from "react";
import "./HeroCarousel.css";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/736x/b6/5e/4b/b65e4b2ccfa2f8872d86725924add187.jpg",
    text: "Celestius welcomes you!",
    para: "Ever thought of joining a tech club that transcends making projects?",
    li1: "Competitions that make challenges your skills",
    li2: "Plans that'll make you excited",
    li3: "A group of peers who are always there to uplift you!",
  },
  {
    id: 2,
    image:
      "https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg",
    text: "Join Our Workshops",
    para: "Wanna join in workshops that are hosted by industry specialists?",
    li1: "Join monthly workshops that offers career guidance",
    li2: "Follow up with latest industry trends that we will brainstorm together",
    li3: "Join the community which upgrades your career base!",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/ed/89/df/ed89df57f8aecc3fcdd12521d5348b0f.jpg",
    text: "Compete and Learn",
    para: "Ever wanted a competitive environment?",
    li1: "Join the group of peers who'll always push you forward",
    li2: "Compete in coding challenges that will test your skills",
    li3: "Learn from the best in the industry and get inspired!",
  },
];

const HeroCarousel = () => {
  return (
    <div className="carousel-container">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="carousel-slide"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay">
            <h1>{slide.text}</h1>
            <p>{slide.para}</p>
            <ul>
              <li>{slide.li1}</li>
              <li>{slide.li2}</li>
              <li>{slide.li3}</li>  
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
