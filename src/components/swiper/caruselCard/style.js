import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: 5px;
`;

const Img = styled.img``;
const Sviper = styled(Swiper)`
  width: 100%;
  display: flex;
  gap: 10px;
  height: 100%;
`;
const SviperSlide = styled(SwiperSlide)`
  zoom: 100%;
`;

export { Wrapper, Sviper, SviperSlide, Container, Img };
