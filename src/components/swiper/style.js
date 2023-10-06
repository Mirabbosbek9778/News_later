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
  display: flex;
  gap: 100px;
  height: 100%;
`;
const SviperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 5px;
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
