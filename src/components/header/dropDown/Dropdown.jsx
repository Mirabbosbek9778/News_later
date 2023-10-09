import { Dropdown } from "antd";
import { Arrow } from "../../../assets/iconsAll";
import { TextNavbar } from "../style";
import { Button, DropdownSelect, Image } from "./style";
import PropTypes from "prop-types";

const DropdownItem = (props) => {
  const items = [
    <DropdownSelect press key="unique-key">
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </DropdownSelect>,
  ];

  DropdownItem.propTypes = {
    title: PropTypes.string,
  };
  return (
    <div>
      <Dropdown dropdownRender={() => <div>{items}</div>} placement="bottom">
        <Button>
          <TextNavbar none>{props?.title}</TextNavbar>
          <Image src={Arrow} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownItem;
