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
  gap: 10px;
  height: 100%;
`;
const SviperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 10px;
`;

export { Wrapper, Sviper, SviperSlide, Container, Img };
