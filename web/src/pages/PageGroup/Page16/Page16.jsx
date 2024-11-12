import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page16() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="FPGA|ПЛИС СИСТЕМЫ"/>
                <ContainerList title="В НКБ ВС разработано и производится более 50 устройств, использующих технологию FPGA для решения следующих задач видеообработки и видеоаналитики:" text="NeuralNetwork Acelleration; Stereo (Disparity Map); MultiViewStereo; 3D-reconstruction; ISP (Scale, UnDistortion, DeInterlace, Rectification, BayerTransform, Stabilization, LocalContrast"/>
                <VideoBlock videoSrc="/video/page16/video1.mp4"/>
                <ContainerText text="Сегодня FPGA используется там, где нужна высокая производительность обработки данных, наименьшее время реакции, а также низкое энергопотребление. Такие устройства могут эффективно выполнять узкоспециализированные задачи, с которыми не способны быстро справиться традиционные процессоры или видеокарты. "/>
                <ContainerText text="ПЛИС позволяет организовать практически любой внешний интерфейс: PCIe, FibreChannell, SRIO, Ethernet, MIPI и т.д.). Это делает изделия НКБ ВС совместимыми с производимой аппаратурой во всем мире."/>
                <ContainerText text="Разработка на ПЛИС осуществляется на высокоуровневых языках программирования, таких как VHDL и SystemVerilog. Что позволяет получить дополнительный бонус – создание сложной и низкоуровневой аппаратной архитектуры с помощью быстрого и понятного программирования."/>
                <ContainerText text="Настраиваемая структура ПЛИС позволяет построить аппаратный (!) конвейер вычислений практически под любую пользовательскую задачу: видеообработку, обработку больших массивов данных, нейросетей и т.п. "/>
                <div className="linkInfo">
                    <a  target="_blank" href="https://nkbvs.ru/page39030198.html">Подробнее</a>
                </div>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page16;