import React from "react";
import Alltext from "../../allText/Alltext";
import { Wrapper, Container } from "./style";
import CarouselFilm from "../caruselCard/Carousel";

const General = () => {
  return (
    <Wrapper>
      <Container>
        <Alltext title={"Лица"} />
        <div className="pt-16"></div>
        <CarouselFilm title={"Жораев Темур"} />
      </Container>
    </Wrapper>
  );
};

export default General;
