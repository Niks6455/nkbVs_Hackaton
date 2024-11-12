import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page7() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="ВИЗУАЛЬНАЯ НАВИГАЦИЯ"/>
                <ContainerText text="Дрон - летающая лаборатория, с помощью которой записываются наборы данных для разработки и отладки алгоритмов. Используется для проведения натурных испытаний за счет интеграции системы визуальной навигации с полетным контроллером."/>
                <VideoBlock videoSrc="/video/page7/video1.MOV"/>
                <ContainerText text="Высокая точность ориентации объекта в пространстве за счет объединения данных с различных датчиков в единую систему с помощью калибровок, алгоритмов и нейронных сетей."/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page7;