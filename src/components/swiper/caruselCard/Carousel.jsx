import {
  CaruselCard1,
  CaruselCard2,
  CaruselCard3,
} from "../../../assets/iconsAll";
import { Container, Sviper, SviperSlide, Wrapper } from "./style";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

const CarouselFilm = (props) => {
  return (
    <div>
      <Container>
        <Sviper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={true}
          keyboard={{
            enabled: false,
          }}
          breakpoints={{
            800: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <SviperSlide>
            <img src={CaruselCard1} className="relative" />
            <p className="absolute left-4 top-[280px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} className="relative" />
            <p className="absolute left-4 top-[280px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard3} className="relative" />
            <p className="absolute left-4 top-[280px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} className="relative" />
            <p className="absolute left-4 top-[280px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard1} className="relative" />
            <p className="absolute left-4 top-[280px]">{props?.title}</p>
          </SviperSlide>
        </Sviper>
      </Container>
    </div>
  );
};

export default CarouselFilm;
