import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page13() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="ИНСТАНС- СЕГМЕНТАЦИЯ, ТРЕКИНГ, ПРОГНОЗ ТРАЕКТОРИИ"/>
                <ContainerText text="Еще одна задача, которая успешно нами решается по данным лидарных облаков точек это задача инстанс-сегментации и трекинг объектов."/>
                <ContainerText text="Это задача нужна для того, чтобы беспилотные робот мог анализировать окружающую обстановку, распознавать людей, машины, отслеживать их перемещение и прогнозировать их будущие траектории движения, чтобы на основе этого планировать свой маршрут."/>
                <VideoBlock videoSrc="/video/page13/video1.mp4"/>
                <ContainerText text="На видео можно видеть как в облаке точек выделяются параллелепипедами автомобили и люди. Сплошная линия за ними это их траектория движения, пунктирная линия, это предсказанная траектория будущего движения. Использование таких алгоритмов позволяет сделать движение автономной техники безопасным как для самой техники, так и для окружающих."/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page13;