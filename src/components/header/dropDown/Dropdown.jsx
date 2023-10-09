import { Dropdown } from "antd";
import { Arrow } from "../../../assets/iconsAll";
import { TextNavbar } from "../style";
import { Button, Image } from "./style";
import PropTypes from "prop-types";

const DropdownItem = (props) => {
  const items = [
    {
      key: "1",
      label: <h1>hello world</h1>,
    },
  ];
  DropdownItem.propTypes = {
    title: PropTypes.string,
  };
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>
          <TextNavbar none>{props?.title}</TextNavbar>
          <Image src={Arrow} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownItem;
