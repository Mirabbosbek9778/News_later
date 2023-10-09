import { ArrowRight } from "../../assets/iconsAll";
import { cardInfo } from "../../mock/cardInfo";
import { Content, Wrapper } from "./style";

const ImportedCards = () => {
  return (
    <Wrapper>
      {cardInfo.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col gap-4">
            <img src={item.generalImage} />
            <Content left>{item.description}</Content>
          </div>
          <div className="flex flex-col justify-between pt-[68px] gap-4">
            <Content left size>
              {item.date}
            </Content>
            <Content left flex colur>
              Перейти
              <img src={ArrowRight} />
            </Content>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default ImportedCards;
