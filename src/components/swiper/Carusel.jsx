import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cards from "../generic/Card";
import Alltext from "../allText/Alltext";
import { Sviper, SviperSlide } from "./style";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Box, Wrapper } from "../body/boxBody/style";

const Carusel = () => {
  return (
    <Wrapper hello>
      <Box>
        <Alltext title={"Новости"} />
        <div className="pt-16"></div>
        <Sviper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          breakpoints={{
            700: {
              slidesPerView: 4,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          modules={[Scrollbar, Navigation, Pagination]}
        >
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
          <SviperSlide>
            <Cards />
          </SviperSlide>
        </Sviper>
      </Box>
    </Wrapper>
  );
};

export default Carusel;
