import { Container, Content, Img } from "./style";
import { useState } from "react";
import { Modal } from "antd";
import { ArrowRight, NewCarusel1 } from "../../assets/iconsAll";

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Container onClick={showModal}>
      <div className="w-full bg-[#454545] h-full flex flex-col gap-3">
        <Img>
          <img src={NewCarusel1} />
        </Img>
        <Content className="pl-4 pr-4">
          Алдияр Байракимов, режиссер нашумевшего казахского фильма
          «Паралимпиец»:
        </Content>
        <Content size="true" className="pl-4 pr-4">
          12.04.2023
        </Content>
        <div className="flex justify-between pl-4 pr-4">
          <Content colur="true">Перейти</Content>
          <img src={ArrowRight} />
        </div>
      </div>
      <Modal okText="OK" cancelText="Cancel" menu={isModalOpen}>
        <img src={NewCarusel1} className="w-[90%]" />
        <p>
          Алдияр Байракимов, режиссер нашумевшего казахского фильма
          «Паралимпиец»:
        </p>
        <p>12.04.2023</p>
      </Modal>
    </Container>
  );
};

export default Cards;
