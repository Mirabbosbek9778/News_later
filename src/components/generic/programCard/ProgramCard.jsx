import Alltext from "../../allText/Alltext";
import { Box, Wrapper } from "../../body/boxBody/style";
import SmallCard from "../smallCard/SmallCard";
import { DownloadOutlined, RightOutlined } from "@ant-design/icons";

const ProgramCard = () => {
  return (
    <Wrapper>
      <Box>
        <div className="flex justify-between items-center ">
          <div className="flex justify-center gap-2 text-white bottomLigth">
            <Alltext title={"Программа"} />
            <RightOutlined className="pt-2" />
          </div>
          <button className="text-white w-[139px] h-12 borders flex gap-4 items-center justify-center">
            <p>Скачать</p>
            <DownloadOutlined />
          </button>
        </div>
        <a href="/card" className="flex flex-col gap-4 pt-10">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </a>
      </Box>
    </Wrapper>
  );
};

export default ProgramCard;
