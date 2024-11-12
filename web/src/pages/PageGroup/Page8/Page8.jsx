import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page8() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="ГИС"/>
                <ContainerText text="Мы применяем технологии ГИС как для ПК, так и для мобильных устройств. Благодаря удобному интерфейсу оператор взаимодействует с роботом и одновременно работает с картой."/>
                <VideoBlock videoSrc="/video/page8/video1.mp4"/>
                <ContainerText text="ГИС для формирования и контроля выполнения маршрутного задания."/>
                <ContainerText text="Робототехническим системам и комплексам разработки НКБ ВС не нужно показывать дорогу, они сами ее находят, избегая опасных или запретных зон, им не страшны препятствия, они способны прогнозировать опасность заранее, они способны видеть и анализировать увиденное. Все что требуется от человека-оператора – это наделить деятельность робота смыслом, заложить в его электронный мозг миссию, которую он добросовестно должен исполнить."/>
                <VideoBlock videoSrc="/video/page8/video2.mp4"/>
                {/* <img src="/img/Robot.png"/> */}
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page8;