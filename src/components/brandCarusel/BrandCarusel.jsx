import { Container, Wrapper } from "./style";
import Alltext from "../allText/Alltext";
import OnlyCard from "../swiper/only/OnlyCard";

const BrandCarusel = () => {
  return (
    <Wrapper>
      <Container>
        <Alltext title={"Наши партнеры"} />
        <OnlyCard />
      </Container>
    </Wrapper>
  );
};

export default BrandCarusel;
