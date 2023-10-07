import { Ruler } from "./style";
import {
  Media11,
  Media12,
  Media13,
  Media31,
  Media32,
  Media41,
} from "../../assets/iconsAll";
import Alltext from "../allText/Alltext";
import Smalltext from "../allText/smalText/Smalltext";
import { Wrapper, Box } from "../body/boxBody/style";
import DropdownItem from "../header/dropDown/Dropdown";

const Media = () => {
  return (
    <Wrapper>
      <Box>
        <div className="flex items-center justify-between">
          <Alltext title={"Медиа"} />
          <DropdownItem title={" 2023 г"} />
        </div>
        <div className="flex flex-col pt-16">
          <div className="flex items-center justify-between">
            <Smalltext title={"Фотографии"} />
            <Smalltext title={"Смотереть"} />
          </div>
          <Ruler></Ruler>
        </div>
        <div className="flex gap-3 pt-8">
          <div className="flex flex-col gap-2 w-full h-full ">
            <img src={Media11} className="hoverCards" />
            <img src={Media12} className="hoverCards" />
          </div>
          <img src={Media13} className="hoverCards" />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="hoverCards" />
            <img src={Media32} className="hoverCards" />
          </div>
          <img src={Media41} className="hoverCards" />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="hoverCards" />
            <img src={Media32} className="hoverCards" />
          </div>
          <img src={Media13} className="hoverCards" />
        </div>
        <div className="flex flex-col pt-10">
          <div className="flex items-center justify-between">
            <Smalltext title={"Видео"} />
            <Smalltext title={"Смотереть"} />
          </div>
          <Ruler></Ruler>
        </div>
        <div className="flex gap-3 pt-8">
          <div className="flex flex-col gap-2 w-full h-full ">
            <img src={Media11} className="hoverCards" />
            <img src={Media12} className="hoverCards" />
          </div>
          <img src={Media13} className="hoverCards" />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="hoverCards" />
            <img src={Media32} className="hoverCards" />
          </div>
          <img src={Media41} className="hoverCards" />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="hoverCards" />
            <img src={Media32} className="hoverCards" />
          </div>
          <img src={Media13} />
        </div>
      </Box>
    </Wrapper>
  );
};

export default Media;
