import {
  CaruselCard1,
  CaruselCard2,
  CaruselCard3,
} from "../../../assets/iconsAll";
import { Container, Sviper, SviperSlide } from "./style";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

const CarouselFilm = (props) => {
  return (
    <div>
      <Container>
        <Sviper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={4}
          grabCursor={true}
          breakpoints={{
            800: {
              slidesPerView: 4,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          modules={[Scrollbar, Navigation, Pagination]}
        >
          <SviperSlide>
            <img src={CaruselCard1} className="relative hoverCards" />
            <p className="absolute left-16 top-[320px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} className="relative hoverCards" />
            <p className="absolute left-16 top-[320px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard3} className="relative hoverCards" />
            <p className="absolute left-16 top-[320px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard2} className="relative hoverCards" />
            <p className="absolute left-16 top-[320px]">{props?.title}</p>
          </SviperSlide>
          <SviperSlide>
            <img src={CaruselCard1} className="relative hoverCards" />
            <p className="absolute left-16 top-[320px]">{props?.title}</p>
          </SviperSlide>
        </Sviper>
      </Container>
    </div>
  );
};

CarouselFilm.propTypes = {
  title: PropTypes.string, 
};
export default CarouselFilm;
