import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page15() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="3D РЕКОНСТРУКЦИЯ"/>
                <ContainerText text="Трехмерная фотореалистичная модель окружающего пространства, синтезируемая и отображаемая в реальном времени."/>
                <VideoBlock videoSrc="/video/page15/video1.mp4"/>
                <ContainerText text="Полный контроль окружающего пространства как изнутри машины, так и при дистанционном телеуправлении мобильными роботами."/>
                {/* <VideoBlock videoSrc="/video/page15/video2.mp4"/> */}
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page15;