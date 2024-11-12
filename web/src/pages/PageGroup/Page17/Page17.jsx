import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page17() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="ПРОИЗВОДСТВО ЭЛЕКТРОНИКИ"/>
                <ContainerText text="Мы производим электронные блоки, приборы и систем различного назначения. Выполняем модернизацию, техническое и гарантийное обслуживание продукции. Осуществляем полный производственный цикл от автоматического монтажа печатных узлов до испытаний готовых изделий."/>
                <VideoBlock videoSrc="/video/page17/video1.mp4"/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page17;