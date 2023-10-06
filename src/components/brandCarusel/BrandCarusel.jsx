// import { Container, Wrapper } from "./style";
import Alltext from "../allText/Alltext";
import OnlyCard from "../swiper/only/OnlyCard";
import { Wrapper, Box } from "../body/boxBody/style";

const BrandCarusel = () => {
  return (
    <Wrapper hello>
      <Box>
        <Alltext title={"Наши партнеры"} />
        <div className="pt-16"></div>
        <OnlyCard />
      </Box>
    </Wrapper>
  );
};

export default BrandCarusel;
