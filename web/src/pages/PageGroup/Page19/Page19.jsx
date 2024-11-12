import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page19() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="РОБОТОТЕХНИКА" subtitle="разработка систем управления для автономного транспорта"/>
                <ContainerText text="Мы делаем сервисных роботов, для которых используем технологии искусственного интеллекта и уникальные собственные мультиспектральные датчики компьютерного зрения."/>
                <VideoBlock videoSrc="/video/page19/video1.mp4"/>
                <ContainerText text="Роботы-уборщики и роботы-курьеры нашей компании оснащены интеллектуальными алгоритмами отслеживания движущихся препятствий и прогнозирования траектории, которые обеспечивают безопасную эксплуатацию в современной городской среде, совместно используемой пешеходами, велосипедами, скутерами."/>
                <VideoBlock videoSrc="/video/page19/video2.mp4"/> 
                <ContainerText text="ПРОЕКТ SHUTTLE.BOT"/>
                <ContainerText text="Робот-курьер беспилотной доставки «последней мили»."/>     
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page19;