import { DefaultingImage } from "../../../assets/iconsAll";
import { Wrapper, Container } from "./styl";
const GeneralBody = () => {
  return (
    <Wrapper className="w-full">
      <Container>
        <div className="flex justify-between items-center">
          <img src={DefaultingImage} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default GeneralBody;
