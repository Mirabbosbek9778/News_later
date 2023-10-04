import { Container, Sviper, SviperSlide, SwiperText, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cards from "../generic/Card";
import Alltext from "../allText/Alltext";

const Carusel = () => {
  return (
    <Wrapper>
      <Container>
        <SwiperText className="bottomLigth">
          <Alltext title={"Новости"} />
        </SwiperText>
        <div className="pt-16"></div>
        <Sviper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 4,
              slidesPerGroup: 3,
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
          <SviperSlide>
            <Cards />
          </SviperSlide>
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default Carusel;
