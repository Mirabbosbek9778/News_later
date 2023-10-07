import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 5px;
  cursor: pointer;
  color: white;
`;

const Img = styled.img``;
const Sviper = styled(Swiper)`
  max-width: 100%;
  display: flex;
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    background: #575757;
    color: #8e8e8e;
    border-radius: 50%;
    border: 1px solid #575757;
    &:hover {
      background: #575757;
      color: #ebad2d;
      border: 1px solid #ebad2d;
    }
  }
  .swiper-button-next {
    width: 50px;
    height: 50px;
    background: #575757;
    color: #8e8e8e;
    border-radius: 50%;
    border: 1px solid #575757;
    &:hover {
      background: #575757;
      color: #ebad2d;
      border: 1px solid #ebad2d;
    }
  }
`;
const SviperSlide = styled(SwiperSlide)`
  display: flex;
  /* gap: 10px; */
  padding-left: 40px;
`;

export { Wrapper, Sviper, SviperSlide, Container, Img };
