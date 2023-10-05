import { Box, Container, LinesCard } from "./style";
import { dataInfo } from "../../../mock/dataCard";
import { ArrowRight } from "../../../assets/iconsAll";

const SmallCard = () => {
  const rows = [];
  for (let i = 0; i <= dataInfo.length; i += 6) {
    rows.push(dataInfo.slice(i, i + 3));
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      {rows.map((row, rowIndex) => (
        <div className="flex gap-6" key={rowIndex}>
          {row.map((item, index) => (
            <Container
              className="flex flex-col justify-center pt-6 pl-6 pb-6 pr-6 gap-4 cursor-pointer"
              key={index}
            >
              <Box>{item?.date}</Box>
              <div className="text-white flex justify-between">
                <div>
                  <Box title={true}>Количество событие:</Box>
                </div>
                <div>
                  <p>{item?.bait}</p>
                </div>
              </div>
              <LinesCard />
              <div className="flex justify-between">
                <Box colur={true}>Показать события</Box>
                <img src={ArrowRight} />
              </div>
            </Container>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
