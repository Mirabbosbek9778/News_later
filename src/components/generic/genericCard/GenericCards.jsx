import Alltext from "../../allText/Alltext";
import SmallCard from "../smallCard/SmallCard";
import { Wrapper, Box } from "../../body/boxBody/style";

const GenericCards = () => {
  return (
    <Wrapper>
      <Box>
        <Alltext title="Мастер-класс" />
        <a href="/card" className="flex flex-col gap-4 pt-10">
          <SmallCard />
          <SmallCard />
        </a>
      </Box>
    </Wrapper>
  );
};

export default GenericCards;
