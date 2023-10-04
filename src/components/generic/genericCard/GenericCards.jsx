import Alltext from "../../allText/Alltext";
import SmallCard from "../smallCard/SmallCard";
import { Container, Wrapper } from "./style";

const GenericCards = () => {
  return (
    <Wrapper>
      <Container>
        <Alltext title="Мастер-класс" />
        <SmallCard />
      </Container>
    </Wrapper>
  );
};

export default GenericCards;
