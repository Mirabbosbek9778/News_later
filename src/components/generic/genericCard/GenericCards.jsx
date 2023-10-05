import Alltext from "../../allText/Alltext";
import SmallCard from "../smallCard/SmallCard";
import { Container, Wrapper } from "./style";

const GenericCards = () => {
  return (
    <Wrapper>
      <Container>
        <Alltext title="Мастер-класс" />
        <a href="/card" className="flex flex-col gap-4">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </a>
      </Container>
    </Wrapper>
  );
};

export default GenericCards;
