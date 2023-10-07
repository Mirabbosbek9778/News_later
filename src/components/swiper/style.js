import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 140px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 0 0 50px;
  min-width: 390px;
`;

const Img = styled.img`
  display: flex;
  gap: 10px;
`;
const Sviper = styled(Swiper)`
  width: 100%;
  border: 1px solid red;
  display: flex;
  gap: 100px;
  height: 100%;
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
  /* display: flex;
  gap: 5px;
  padding-left: 21px; */
`;

const SwiperText = styled.div`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  padding-left: 50px;
  padding-top: 140px;
  width: 166px;
  cursor: pointer;
`;

export { Wrapper, Sviper, SviperSlide, Container, Img, SwiperText };
