import { Sviper, SviperSlide } from "../style";
import { Navigation, Pagination } from "swiper/modules";
import { Brand3 } from "../../../assets/iconsAll";
import { Container } from "../../brandCarusel/style";

const OnlyCard = () => {
  return (
    <Container>
      <Sviper
        slidesPerView={6}
        centeredSlides={false}
        slidesPerGroupSkip={7}
        grabCursor={true}
        breakpoints={{
          100: {
            slidesPerView: 6,
            slidesPerGroup: 5,
          },
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-m pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
        <SviperSlide>
          <img
            src={Brand3}
            className="bg-[#454545] rounded-sm pt-3 pl-3 pr-3 pb-3"
          />
        </SviperSlide>
      </Sviper>
    </Container>
  );
};

export default OnlyCard;
