"use client"

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import './carroselHome.css';

type CarroselDestaqueProps = {
  slides: React.ReactNode[];
  autoplay?: boolean;
  loop?: boolean;
};

const CarroselDestaque: React.FC<CarroselDestaqueProps> = ({ slides, autoplay = false, loop = true }) => {
  const options: EmblaOptionsType = {
    loop: loop,
  };

  const plugins = autoplay ? [Autoplay()] : [];

  const [emblaRef] = useEmblaCarousel(options, plugins);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarroselDestaque;

