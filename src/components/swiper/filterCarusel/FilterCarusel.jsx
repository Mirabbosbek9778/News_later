import React from "react";
import Alltext from "../../allText/Alltext";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FilterCarusel = () => {
  return (
    <div>
      <div>
        <Alltext title={"Кинопоказы"} />
        <Button className="text-white border-b textHeader flex films border-none">
          Алжирская Народная Демократическ...
          <DownOutlined className="w-[19px] h-[19px] pt-1 rotate-[270deg] " />
        </Button>
      </div>
    </div>
  );
};

export default FilterCarusel;
