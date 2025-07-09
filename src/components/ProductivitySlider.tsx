"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type SlideItem = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
};

type CenterSliderProps = {
  slides: SlideItem[];
};

export default function CenterSlider({ slides }: CenterSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const moveSlider = (direction: number) => {
    setActiveSlide((prev) => {
      if (direction > 0) {
        return (prev + 1) % slides.length;
      } else {
        return (prev - 1 + slides.length) % slides.length;
      }
    });
  };

  return (
    <>
      <style>{`
        .slider-btn {
          transition: all ease 0.3s;
          cursor: pointer;
          user-select: none;
        }
        .slider-btn:hover {
          opacity: 0.5;
        }
        .slider-btn:active {
          transform: scale(0.8);
        }
        .slider-cover {
          overflow: hidden;
          display: none;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 200px;
          width: 5vw;
          border-radius: 5rem;
          transition: all 0.3s ease;
          padding: 1rem;
          color: white;
          position: relative;
        }
        .slider-cover.active {
          width: 80vw;
          border-radius: 3rem;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
        }
        .slider-cover.show {
          display: block;
        }
        .slider-content {
          background: rgba(0,0,0,1.3);
          padding: 1rem 2rem;
          border-radius: 1rem;
          text-align: left;

        }
        .slider-content h2 {
          margin: 0 0 0.5rem 0;
        }
        .slider-content p {
          margin: 0 0 1rem 0;
        }
        .slider-content a {
          background: #fff;
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>

      <section className="section-image">
        <div className="container text-center">
          <div
            className="d-flex gap-3 align-items-center justify-content-center"
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="slider-btn col-md-1 clickable"
              onClick={() => moveSlider(-1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && moveSlider(-1)}
            >
              <FaAngleLeft size={40} />
            </div>

            {slides.map((slide, i) => (
              <div
                key={i}
                className={`slider-cover show ${
                  i === activeSlide ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {i === activeSlide && (
                  <div className="slider-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                    <a
                      href={slide.buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                )}
              </div>
            ))}

            <div
              className="slider-btn col-md-1 clickable"
              onClick={() => moveSlider(1)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && moveSlider(1)}
            >
              <FaAngleRight size={40} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
