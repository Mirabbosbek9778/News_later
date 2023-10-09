import { Text } from "./style";
import PropTypes from "prop-types";

const Alltext = (props) => {
  Alltext.propTypes = {
    title: PropTypes.string,
  };
  return (
    <div>
      <Text>{props.title}</Text>
    </div>
  );
};

export default Alltext;
