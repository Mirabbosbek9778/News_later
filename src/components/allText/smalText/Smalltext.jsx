import { Wrapper } from "./style";
import PropTypes from "prop-types";

const Smalltext = (props) => {
  Smalltext.propTypes = {
    title: PropTypes.string,
  };
  return (
    <div>
      <Wrapper size>{props?.title}</Wrapper>
    </div>
  );
};

export default Smalltext;
