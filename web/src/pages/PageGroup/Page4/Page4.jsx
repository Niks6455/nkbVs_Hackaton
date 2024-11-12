import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page4() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
             <TitlePage text="ML. ВИДЕОАНАЛИТИКА ДЛЯ МЕДИЦИНЫ" />
             <ContainerText text="Особое внимание НКБ ВС уделяет инструментам контроля здоровья."/>
             <ContainerText text="Наша адаптивная система REVILL позволяет сформировать инфраструктуру на предприятии для дистанционного скрининга температуры людей в проходящем потоке."/>
             <ContainerText text="В отличие от традиционных систем, основа REVILL - искусственный интеллект, который обрабатывает массивы данных, анализирует их и выявляет аномалии."/>
             <ContainerText text="Прошедшая обучение нейросеть обнаруживает лица на изображениях от тепловизионной камеры, анализирует тепловой портрет и выявляет людей с повышенной температурой."/>
             <VideoBlock videoSrc="/video/page4/video1.mp4"/>
             <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page4;