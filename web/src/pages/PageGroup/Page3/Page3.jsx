import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page3() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="АВТОНОМНЫЙ ТРАНСПОРТ" />
                <ContainerText text="Наши проекты в области интеллектуального транспорта связаны высокоинтеллектуальными робототехническими комплексами, встраиваемыми комплексами бортового оборудования, интегрированными системами управления беспилотным автомобилем, системой АБС и ADAS для коммерческого транспорта."/>
                <ContainerText text="У нас есть прототип беспилотного автомобиля, разработанный для участия в технологическом конкурсе «Зимний город». "/>
                <VideoBlock videoSrc="/video/page3/video1.mp4"/>
                <ContainerText text="«Я сам» успешно прошел квалификационные испытания и принял участие в финальном заезде технологического конкурса в числе пяти автомобилей лучших российских команд-разработчиков. За один год наша команда с нуля создала этот автомобиль, используя все наши наработки в производстве, алгоритмах и программном обеспечении. "/>
                    <div className="linkInfo">
                        <a  href="https://nkbvs.ru/selfdriving" target="_blank">Подробнее Беспилотный автомобиль</a>
                    </div>
                <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page3;