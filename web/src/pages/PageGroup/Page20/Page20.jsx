import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page20() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="4D РАДАР" />
                <ContainerText text="Радар миллиметрового диапазона собственного производства."/>
                <ContainerText text="Радар позволяет видеть в среде, непрозрачной для других сенсоров (густой дым, туман, различные аэрозоли). Сейчас радар становится де-факто неотъемлемой частью систем адаптивного управления."/>
                <VideoBlock videoSrc="/video/page20/video1.mp4"/>
                <ContainerList title="" text="Обнаружение препятствий при любом освещении и погодных условиях; Высокое разрешение в широком поле зрения; Программно-определяемые характеристики; Быстрая и простая интеграция благодаря совместимости с ROS"/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page20;