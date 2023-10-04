import { Box, Container, LinesCard } from "./style";
import { dataInfo } from "../../../mock/dataCard";

const SmallCard = () => {
  const rows = [];
  for (let i = 0; i < dataInfo.length; i += 3) {
    rows.push(dataInfo.slice(i, i + 2));
  }
  return (
    <div className="flex flex-col gap-4">
      {rows.map((row, rowIndex) => (
        <div className="flex gap-6" key={rowIndex}>
          {row.map((item, index) => (
            <Container
              className="flex flex-col justify-center pt-6 pl-6 pb-6 pr-6 gap-4"
              key={index}
            >
              <Box>{item?.date}</Box>
              <div className="text-white flex justify-between">
                <div>
                  <Box title="true">Количество событие:</Box>
                </div>
                <div>
                  <p>{item?.bait}</p>
                </div>
              </div>
              <LinesCard />
              <div className="flex justify-between">
                <Box colur="true">Показать события</Box>
                <p>{item?.arrowLeft}</p>
                {console.log(item?.arrowRight)}
              </div>
            </Container>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
