import Alltext from "../../allText/Alltext";
import CarouselFilm from "../caruselCard/Carousel";
import { Wrapper, Box } from "../../body/boxBody/style";

const General = () => {
  return (
    <Wrapper>
      <Box>
        <div className="pl-10">
          <Alltext title={"Лица"} />
        </div>
        <div className="pt-16"></div>
        <CarouselFilm title={"Жораев Темур"} />
      </Box>
    </Wrapper>
  );
};

export default General;
