import { Dropdown } from "antd";
import { Arrow } from "../../../assets/iconsAll";
import { TextNavbar } from "../style";
import { Button } from "./style";

const DropdownItem = (props) => {
  const items = [
    {
      key: "1",
      label: <h1>hello world</h1>,
    },
    {
      key: "2",
      label: <h1>hello world</h1>,
    },
    {
      key: "3",
      label: <h1>hello world</h1>,
    },
  ];

  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button className="flex border-none  items-center gap-2">
          <TextNavbar none>{props?.title}</TextNavbar>
          <img src={Arrow} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownItem;
