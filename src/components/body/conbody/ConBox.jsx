import { Cybok, DateImage, ImageText } from "../../../assets/iconsAll";
import { Wrapper, Container } from "./styl";
const Body = () => {
  return (
    <Wrapper className="w-full">
      <Container>
        <div>
          <img src={Cybok} />
        </div>
        <div className="mr-[256px]">
          <img src={DateImage} />
          <img src={ImageText} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Body;
