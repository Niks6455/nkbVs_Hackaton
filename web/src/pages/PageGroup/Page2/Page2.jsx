import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page2() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="АВТО ЭЛЕКТРОНИКА И ADAS"/>
                <VideoBlock videoSrc="/video/page2/video1.mp4"/>
                <ContainerList title="Бортовая информационная система контроля:" text="Человеко-машинный интерфейс управления агрегатами автомобиля с электронным управлением; Отображение видеоинформации от внешних обзорных камер с записью видеопотоков на встроенный энергонезависимый носитель данных; Подключение к нескольким сетям CAN автомобиля и маршрутизация сообщений между этими сетями; Ведение электронного паспорта автомобиля; Комплексный контроль электронного оборудования, технического состояния автомобиля в режиме реального времени; Внешний видеообзор; Реализация человеко-машинного интерфейса; Регистрация данных в энергонезависимой памяти;"/>
                <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page2;