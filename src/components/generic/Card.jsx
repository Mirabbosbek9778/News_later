// import { Container, Content } from "./style";
import { ArrowRight } from "../../assets/iconsAll";
import { cardInfo } from "../../mock/cardInfo";
import { Container, Content } from "./style";

const Cards = () => {
  return (
    <div className=" border ">
      <div className="flex max-w-[1440px]">
        {cardInfo.map((item, index) => (
          <div key={index} className=" bg-[#454545] h-full gap-3 border">
            <div className="w-full  h-full min:w-full ">
              <img src={item.generalImage} alt="" />
            </div>
            <div>
              <p>{item?.description}</p>
            </div>
            <div>{item?.date}</div>
            <div>
              <p>Перейти</p>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

// <Container>
//     {cardInfo.map((item, index) => (
//       <Container key={index}>
//         <div
//           className="w-full bg-[#454545] h-full flex flex-col gap-3"
//           key={index}
//         >
//           <img src={item?.generalImage} />
//           <Content className="pl-4 pr-4">
//             <p>{item?.description}</p>
//           </Content>
//           <Content size={true} className="pl-4 pr-4">
//             <p>{item?.date}</p>
//           </Content>
//           <div className="flex justify-between pl-4 pr-4">
//             <Content colur={true}>Перейти</Content>
//             <img src={ArrowRight} />
//           </div>
//         </div>
//       </Container>
//     ))}
// </Container>
