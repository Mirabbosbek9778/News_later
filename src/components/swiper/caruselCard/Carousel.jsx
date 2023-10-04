import React from "react";
import {
  CaruselCard1,
  CaruselCard2,
  CaruselCard3,
} from "../../../assets/iconsAll";
import { Container, Sviper, SviperSlide, Wrapper } from "./style";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const CarouselFilm = () => {
  return (
    <Wrapper>
      <Container>
        <div className="pt-6"></div>
        <Sviper
          slidesPerView={3}
          grid={3}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 6,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper flex gap-5 "
        >
          <SviperSlide>
            <img src={CaruselCard1} />
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} />
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard3} />
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} />
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard1} />
          </SviperSlide>
        </Sviper>
      </Container>
    </Wrapper>
  );
};

export default CarouselFilm;
