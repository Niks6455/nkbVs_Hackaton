import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page10() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="ОПИКО-ЭЛЕКТРОННЫЕ СИСТЕМЫ"/>
                <ContainerText text="Основным источником данных системы компьютерного зрения, конечно же, является видеокамера, или более широкое – оптико-электронная система."/>
                <ContainerText text="НКБ ВС является крупнейшим разработчиком и производителем комбинированного оптико-электронного оборудования, позволяющего распознавать людей и автомобили на расстоянии нескольких километров, независимо от времени суток и погодных условий. Решается множество задач, связанных с анализом изображений, например: обнаружение, сопровождение, стабилизация и другие задачи, область применения которых, очень широка."/>
                {/* <VideoBlock videoSrc="/video/page10/video1.mp4"/> */}
                <ContainerList title="В компетенции компании входит:" text="Разработка, изготовление и испытания оптических устройств; Расчеты объективов телевизионных и тепловизионных камер; Разработка изготовление и испытания электронных модулей устройств на основе светочувствительных и тепловизионных датчиков (телевизионные и тепловизионные камеры технического зрения)"/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page10;