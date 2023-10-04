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
          slidesPerView={4}
          centeredSlides={false && true}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            800: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
          }}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
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
