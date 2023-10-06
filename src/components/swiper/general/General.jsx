import Alltext from "../../allText/Alltext";
// import { Wrapper, Container } from "./style";
import CarouselFilm from "../caruselCard/Carousel";
import { Wrapper, Box } from "../../body/boxBody/style";

const General = () => {
  return (
    <Wrapper>
      <Box>
        <Alltext title={"Лица"} />
        <div className="pt-16"></div>
        <CarouselFilm title={"Жораев Темур"} />
      </Box>
    </Wrapper>
  );
};

export default General;
