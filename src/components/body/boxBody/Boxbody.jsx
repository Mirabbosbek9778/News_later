import { LogoSmall } from "../../../assets/iconsAll";
import Alltext from "../../allText/Alltext";
import { Linefilm } from "../../priview/style";
import { Box, Text, Wrapper } from "./style";

const BoxBody = () => {
  return (
    <Wrapper>
      <Box>
        <Alltext title={"TIFFEST-2022"} />
        <Text className="pt-16" tex="true">
          <b>TIFFEST-2022</b>
        </Text>
        <Linefilm indent="true" />
        <div className="flex justify-between items-center pt-6">
          <Text tex="true" wid="some_value" smal="true">
            XIV Ташкентский международный кинофестиваль (далее - Фестиваль)
            проводится в целях сохранения и развития вековых традиций
            национального киноискусства, дальнейшего развития культурно-
            просветительской деятельности в Республике Узбекистан и развития
            культурных связей на международном уровне, воспитания патриотизма,
            укрепления дружбы и братства между народами, расширения масштабов
            творческого сотрудничества различных стран, возрождения
            прославленного Ташкентского международного кинофестиваля, а также
            обеспечения исполнения Указа Президента Республики Узбекистан от 7
            апреля 2021 года № УП-6202 «О мFерах по поднятию киноискусства и
            киноиндустрии на качественно новый уровень и дальнейшему
            совершенствованию системы государственной поддержки отрасли».
          </Text>
          <div>
            <img src={LogoSmall} />
          </div>
        </div>
      </Box>
    </Wrapper>
  );
};

export default BoxBody;
