import { Wrapper } from "./style";

const Smalltext = (props) => {
  return (
    <div>
      <Wrapper size>{props?.title}</Wrapper>
    </div>
  );
};

export default Smalltext;
