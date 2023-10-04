import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, message } from "antd";
import { Facebook, Logo, Telegram, Youtube } from "../../assets/iconsAll";

const Header = () => {
  const items = [
    {
      label: "Кинопоказы",
      key: "1",
    },
    {
      label: "Кинопоказы2",
      key: "2",
    },
    {
      label: "Кинопоказы3",
      key: "3",
    },
  ];

  const handleitemsClick = (item) => {
    message.info(<h1>Service Not Found</h1>);
  };
  return (
    <div className="h-[113px] bg-[#111] flex text-white flex-col items-center w-full justify-center z-100">
      <div className="flex justify-between items-center">
        <div className="w-full max-w-[1440px] flex items-center gap-16">
          <div className="flex items-center gap-8">
            <a href="/home">
              <img src={Logo} />
            </a>
            <h1 className="pl-[89px] textHeader bottomLigth">
              <a href="/news">Новости</a>
            </h1>
            <Dropdown menu={items}>
              <Button className="text-white border-none textHeader flex">
                Кинопоказы
                <DownOutlined className="w-[19px] h-[19px] pt-2" />
              </Button>
            </Dropdown>
            <Dropdown menu={items}>
              <Button className="text-white border-none textHeader flex">
                Лица
                <DownOutlined className="w-[19px] h-[19px] pt-2" />
              </Button>
            </Dropdown>
            <Dropdown menu={items}>
              <Button className="text-white border-none textHeader flex">
                Программа
                <DownOutlined className="w-[19px] h-[19px] pt-2" />
              </Button>
            </Dropdown>
            <h1 className="textHeader bottomLigth">
              <a href="/Media">Медиа</a>
            </h1>
            <h1 className="textHeader bottomLigth">
              <a href="/history">История</a>
            </h1>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <a href="https://www.instagram.com/">
              <svg
                className="hoverIcons"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16.0005 6C13.2848 6 12.944 6.01188 11.8773 6.06042C10.8128 6.10917 10.0861 6.27771 9.45031 6.525C8.79262 6.78042 8.23472 7.12208 7.67891 7.67813C7.12267 8.23396 6.78102 8.79187 6.52478 9.44937C6.27687 10.0854 6.10812 10.8123 6.06021 11.8765C6.0125 12.9431 6 13.2842 6 16C6 18.7158 6.01208 19.0556 6.06042 20.1223C6.10937 21.1869 6.27791 21.9135 6.52498 22.5494C6.7806 23.2071 7.12226 23.765 7.67828 24.3208C8.23389 24.8771 8.79179 25.2196 9.44906 25.475C10.0853 25.7223 10.8121 25.8908 11.8765 25.9396C12.9431 25.9881 13.2837 26 15.9993 26C18.7152 26 19.055 25.9881 20.1217 25.9396C21.1862 25.8908 21.9137 25.7223 22.5499 25.475C23.2074 25.2196 23.7645 24.8771 24.3201 24.3208C24.8763 23.765 25.218 23.2071 25.4742 22.5496C25.72 21.9135 25.8888 21.1867 25.9388 20.1225C25.9867 19.0558 25.9992 18.7158 25.9992 16C25.9992 13.2842 25.9867 12.9433 25.9388 11.8767C25.8888 10.8121 25.72 10.0854 25.4742 9.44958C25.218 8.79187 24.8763 8.23396 24.3201 7.67813C23.7638 7.12188 23.2076 6.78021 22.5493 6.525C21.9118 6.27771 21.1847 6.10917 20.1202 6.06042C19.0536 6.01188 18.714 6 15.9974 6H16.0005ZM15.1035 7.80208C15.3697 7.80167 15.6668 7.80208 16.0005 7.80208C18.6705 7.80208 18.9869 7.81167 20.0412 7.85958C21.0162 7.90417 21.5454 8.06708 21.8979 8.20396C22.3645 8.38521 22.6972 8.60187 23.047 8.95187C23.397 9.30187 23.6136 9.63521 23.7953 10.1019C23.9322 10.454 24.0953 10.9831 24.1397 11.9581C24.1876 13.0123 24.198 13.329 24.198 15.9977C24.198 18.6665 24.1876 18.9831 24.1397 20.0373C24.0951 21.0123 23.9322 21.5415 23.7953 21.8935C23.614 22.3602 23.397 22.6925 23.047 23.0423C22.697 23.3923 22.3647 23.609 21.8979 23.7902C21.5458 23.9277 21.0162 24.0902 20.0412 24.1348C18.9871 24.1827 18.6705 24.1931 16.0005 24.1931C13.3304 24.1931 13.014 24.1827 11.9598 24.1348C10.9848 24.0898 10.4557 23.9269 10.103 23.79C9.63635 23.6087 9.30303 23.3921 8.95304 23.0421C8.60305 22.6921 8.38639 22.3596 8.20473 21.8927C8.06785 21.5406 7.90473 21.0115 7.86036 20.0365C7.81245 18.9823 7.80286 18.6656 7.80286 15.9952C7.80286 13.3248 7.81245 13.0098 7.86036 11.9556C7.90494 10.9806 8.06785 10.4515 8.20473 10.099C8.38597 9.63229 8.60305 9.29896 8.95304 8.94896C9.30303 8.59896 9.63635 8.38229 10.103 8.20062C10.4555 8.06312 10.9848 7.90063 11.9598 7.85583C12.8823 7.81417 13.2398 7.80167 15.1035 7.79958V7.80208ZM21.3383 9.4625C20.6758 9.4625 20.1383 9.99937 20.1383 10.6621C20.1383 11.3246 20.6758 11.8621 21.3383 11.8621C22.0008 11.8621 22.5382 11.3246 22.5382 10.6621C22.5382 9.99958 22.0008 9.46208 21.3383 9.46208V9.4625ZM16.0005 10.8646C13.1646 10.8646 10.8653 13.164 10.8653 16C10.8653 18.836 13.1646 21.1344 16.0005 21.1344C18.8365 21.1344 21.135 18.836 21.135 16C21.135 13.164 18.8363 10.8646 16.0003 10.8646H16.0005ZM16.0005 12.6667C17.8413 12.6667 19.3338 14.159 19.3338 16C19.3338 17.8408 17.8413 19.3333 16.0005 19.3333C14.1595 19.3333 12.6673 17.8408 12.6673 16C12.6673 14.159 14.1595 12.6667 16.0005 12.6667Z"
                  fill="#C7C7C7"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw9-6oBhBaEiwAHv1QvFHXME3otnfqxvL4hnmdjGMxHGkGWwRcY_gkMev8I_qxZPAPlAsPthoCmh0QAvD_BwE">
              <img src={Facebook} className="hoverIcons" />
            </a>
            <a href="https://web.telegram.org/a/">
              <img src={Telegram} className="hoverIcons" />
            </a>
            <a href="https://youtube.com/">
              <img src={Youtube} className="hoverIcons" />
            </a>
            <Dropdown
              menu={items}
              className="flex items-center justify-center textHeader ml-2"
            >
              <Button className="text-white w-[83px] h-10">
                Ru
                <DownOutlined className="w-[19px] h-[19px] flex pt-1.5" />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
