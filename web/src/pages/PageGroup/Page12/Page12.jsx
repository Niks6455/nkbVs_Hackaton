import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page12() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="СЕМАНТИЧЕСКАЯ СЕГМЕНТАЦИЯ ВИДЕО"/>
                <ContainerText text="Детекция объектов на видео и определение к какому классу они принадлежат. Решается на основе алгоритмов машинного обучения."/>
                <VideoBlock videoSrc="/video/page12/video1.mp4"/>
                <ContainerText text="На видео результат работы разработанных алгоритмов сегментации на дорогах Таганрога в режиме реального времени. Фиолетовый цвет-дорога, зеленый - растительность, синий-машины, розовый-тротуары и т.д."/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page12;