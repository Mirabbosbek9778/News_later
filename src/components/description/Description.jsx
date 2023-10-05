import Alltext from "../allText/Alltext";
import Smalltext from "../allText/smalText/Smalltext";
import { DescriptionImage } from "../../assets/iconsAll";
import { Container, Wrapper } from "./style";
import { Ruler } from "../media/style";

const Description = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col gap-16">
          <Alltext title={"Локации"} />
          <div>
            <Smalltext title={"Ташкентская область"} />
            <Ruler />
          </div>
        </div>
        <div className="flex ">
          <div className="flex justify-between">
            <div className="w-[722px] h-[288px]">
              <Smalltext
                title={
                  "Расположена на северо-западе Узбекистана, между частью Тянь-Шанских гор и рекой Сырдарья. Удобное географическое расположение говорит о большом экотуристическом потенциале области.Особого внимания заслуживают районы и города Бостанлык, Паркент, Зангиота, Ангрен и Алмалык, которые являются лидерами в сфере туризма. Чарвакское водохранилице, Угам-Чаткальский природный парк и всесезонный горный курорт Амирсой- что может быть лучше для того чтобы вдохновляться красотой природы."
                }
              />
              <p className="text-white pt-5">
                Адрес:
                <mark> г. Ташкент ул. Чиланзар 1А, 100027</mark>
              </p>
            </div>
            <img
              src={DescriptionImage}
              className="w-[546px] h-[300px] bg-cover"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Description;
