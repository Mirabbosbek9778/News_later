import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cards from "../generic/Card";
import Alltext from "../allText/Alltext";
import { Box, Wrapper } from "../body/boxBody/style";
import { Sviper, SviperSlide } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const Carusel = () => {
  return (
    <Wrapper hello>
      <Box>
        <div className="pl-5">
          <Alltext title={"Новости"} />
        </div>
        <div className="pt-16"></div>
        <Sviper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
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
        </Sviper>
      </Box>
    </Wrapper>
  );
};

export default Carusel;
