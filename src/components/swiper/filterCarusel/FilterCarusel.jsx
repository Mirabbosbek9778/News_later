import Alltext from "../../allText/Alltext";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Wrapper, Box } from "../../body/boxBody/style";
import CarouselFilm from "../caruselCard/Carousel";

const FilterCarusel = () => {
  return (
    <Wrapper>
      <Box>
        <div className="flex items-center justify-between">
          <Alltext title={"Кинопоказы"} />
          <Button className="text-white border-b textHeader flex films border-none">
            Алжирская Народная Демократическ...
            <DownOutlined className="w-[19px] h-[19px] pt-1 rotate-[270deg] " />
          </Button>
        </div>
        <div className="pt-16"></div>
        <CarouselFilm />
      </Box>
    </Wrapper>
  );
};

export default FilterCarusel;
