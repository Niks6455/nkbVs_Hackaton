import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";
import styles from "./Page1.module.scss";

function Page1() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div className={styles.Auth}>
                 <TitlePage text="ПЕРВАЯ РОССИЙСКАЯ ABS"/>
                 <VideoBlock videoSrc="/video/page1/video1.mp4"/>
                 <ContainerText text="НКБ ВС первая российская компания, которая разработала и реализовала в серийном производстве алгоритмы и программное обеспечение систем АБС, ПБС, СКУ. Эти системы реализуются внутри одного комплекта оборудования, включающего набор электронных блоков, датчиков и исполнительных устройств. У нас также проводятся исследования и разработки в области создания электронных тормозных систем."/>
                 <VideoBlock videoSrc="/video/page1/video2.mp4"/>
                 <ContainerList title="Технологические наработки и продукты, созданные в результате исследований и разработок систем активной безопасности, ориентированы к применению в составе:"  text="серийных и перспективных автомобилей и автопоездов КАМАЗ, УРАЛ; автобусов НЕФАЗ, КАМАЗ, предприятий Группы ГАЗ; перспективных беспилотных грузовых автомобилей; автомобилей многоцелевого назначения и специальной автомобильной техники"/>
                 <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page1;