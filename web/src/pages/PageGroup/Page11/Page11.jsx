import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page11() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="СЕМАНТИЧЕСКАЯ СЕГМЕНТАЦИЯ ОБЛАКА ТОЧЕК"/>
                <ContainerText text="Программное обеспечение ИИ можно использовать для обнаружения, сегментации и идентификации транспортных средств и других движущихся и неподвижных объектов с высокой точностью."/>
                <ContainerText text="Автономность при этом, как правило, обеспечивается с помощью двух основных видов сенсоров — лидара (LiDAR) или камер в сочетании с радарами."/>
                <ContainerText text="Лидары позволяют получить облако точек окружающего пространства."/>
                <VideoBlock videoSrc="/video/page11/video1.mp4"/>
                <ContainerText text="Задача семантической сегментации, т.е. определения к какому классу объектов принадлежит та или иная точка лидарного облака решается на основе алгоритмов машинного обучения. На видео, успешно выделяется дорога (фиолетовый цвет), здания (голубой), растительность (зеленый), машины (розовый) и т.д."/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page11;