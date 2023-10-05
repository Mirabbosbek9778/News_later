import { Container, Ruler, Wrapper } from "./style";
import {
  Media11,
  Media12,
  Media13,
  Media31,
  Media32,
  Media41,
} from "../../assets/iconsAll";
import Alltext from "../allText/Alltext";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Smalltext from "../allText/smalText/Smalltext";

const Media = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex items-center justify-between">
          <Alltext title={"Медиа"} />
          <Button className="text-white">
            2023 г
            <DownOutlined />
          </Button>
        </div>
        <div className="flex flex-col pt-16">
          <div className="flex items-center justify-between">
            <Smalltext title={"Фотографии"} />
            <Smalltext title={"Смотереть"} />
          </div>
          <Ruler></Ruler>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-full h-full ">
            <img src={Media11} className="w-full h-full" />
            <img src={Media12} className="w-full h-full" />
          </div>
          <img src={Media13} />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="w-full h-full" />
            <img src={Media32} className="w-full h-full" />
          </div>
          <img src={Media41} />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="w-full h-full" />
            <img src={Media32} className="w-full h-full" />
          </div>
          <img src={Media13} />
        </div>
        <div className="flex flex-col pt-10">
          <div className="flex items-center justify-between">
            <Smalltext title={"Видео"} />
            <Smalltext title={"Смотереть"} />
          </div>
          <Ruler></Ruler>
        </div>
        <div className="flex gap-3 ">
          <div className="flex flex-col gap-2 w-full h-full ">
            <img src={Media11} className="w-full h-full" />
            <img src={Media12} className="w-full h-full" />
          </div>
          <img src={Media13} />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="w-full h-full" />
            <img src={Media32} className="w-full h-full" />
          </div>
          <img src={Media41} />
          <div className="flex flex-col gap-2 w-full h-full">
            <img src={Media31} className="w-full h-full" />
            <img src={Media32} className="w-full h-full" />
          </div>
          <img src={Media13} />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Media;
