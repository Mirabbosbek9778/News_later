import { DownOutlined } from "@ant-design/icons";
import { Wrapper, Box } from "../../body/boxBody/style";
import CarouselFilm from "../caruselCard/Carousel";
import { TextNavbar } from "../../header/style";

const FilterCarusel = () => {
  return (
    <Wrapper>
      <Box>
        <div className="flex items-center justify-between">
          <div className="pl-10">
            <TextNavbar column>Кинопоказы</TextNavbar>
          </div>
          <button className="text-white border-b allhovers flex border-none">
            Алжирская Народная Демократическ...
            <DownOutlined className="w-[19px] h-[19px] pt-1 rotate-[270deg]" />
          </button>
        </div>
        <div className="pt-16"></div>
        <CarouselFilm />
      </Box>
    </Wrapper>
  );
};

export default FilterCarusel;
