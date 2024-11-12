import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page18() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="AR|VR"/>
                <ContainerText text="Виртуальная примерочная – проект НКБ ВС для fashion ритейла."/>
                <ContainerText text="Рассмотрим пример применения AR/VR технологии на нашем проекте Getalook."/>
                <VideoBlock videoSrc="/video/page18/video1.mp4"/>
                <ContainerText text="КБ это не только супер сложные роботы и системы. Это еще и инкубатор идей и творческих коллективов."/>
                <ContainerText text="С помощью дополненной реальности потребители моментально примеряют одежду в своем отражении на экране. Пользователь может сделать фото, распечатать его или поделиться образом в соцсети."/>
                <ContainerText text="Обработка изображения построена на собственных технологиях дополненной реальности."/>      
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page18;