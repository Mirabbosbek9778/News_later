import { Button } from "antd";
import { Wrapper, Container, Linefilm } from "./style";
import { DownOutlined } from "@ant-design/icons";
import CarouselFilm from "../swiper/caruselCard/Carousel";
import Smalltext from "../allText/smalText/Smalltext";

const Film = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex justify-between items-center">
          <Button className="text-white border-b textHeader flex films border-none">
            Кинопоказы
            <DownOutlined className="w-[19px] h-[19px] pt-1 rotate-[270deg] " />
          </Button>
          <Button className="text-white bg-[#454545]">Оставить заявку</Button>
        </div>
        <div className="flex flex-col gap-4 pt-16">
          <Smalltext title={"Кино за 5 дней"} />
          <Linefilm indent="true" />
          <div className="text-white pt-6">
            <p>
              ЭТО ОСНОВНАЯ ПРОГРАММА МОЛОДЁЖНОГО КИНОФЕСТИВАЛЯ, КОТОРАЯ ПРОЙДЁТ
              В РАМКАХ ТАШКЕНТСКОГО МЕЖДУНАРОДНОГО КИНОФЕСТИВАЛЯ «ЖЕМЧУЖИНА
              ШЕЛКОВОГО ПУТИ».
            </p>
            <mark> «КИНО НОВОГО ПОКОЛЕНИЯ»</mark>
            <p>
              «КИНО ЗА 5 ДНЕЙ» - КОНКУРС МОЛОДЫХ КИНЕМАТОГРАФИСТОВ, УЧАСТНИКАМ
              КОТОРОГО ПРЕДСТОИТ СНЯТЬ КОРОТКОМЕТРАЖНЫЕ ФИЛЬМЫ ОБ УЗБЕКИСТАНЕ,
              НА ТЕМУ «ВЕЛИКИЙ ШЕЛКОВЫЙ ПУТЬ» Конкурс проводит Агентство
              Кинематографии Узбекистана, ГУП «Ёшлик киностудияси» при поддержке
              Министерства Туризма и Спорта Республики Узбекистан, Министерства
              Иностранных Дел Республики Узбекистан, Министерства Финансов
              Республики Узбекистан, Всемирное Общество по изучению, сохранению
              и популяризации культурного наследия Узбекистана
            </p>
          </div>
          <Smalltext title={"Короткометражные фильмы"} />
          <Linefilm indent="true" />
          <CarouselFilm />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Film;
