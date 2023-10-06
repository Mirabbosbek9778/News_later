import Alltext from "../allText/Alltext";
import { Box, Wrapper } from "../body/boxBody/style";
import CarouselFilm from "../swiper/caruselCard/Carousel";

const Persons = () => {
  return (
    <Wrapper hello>
      <Box>
        <Alltext title={"Жюри"} />
        <div className="pt-16"></div>
        <CarouselFilm title={"Жораев Темур"} hello />
      </Box>
    </Wrapper>
  );
};

export default Persons;
