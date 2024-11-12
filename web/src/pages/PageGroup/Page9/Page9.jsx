import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page9() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="SLAM"/>
                <ContainerText text="В основе большинства алгоритмов визуального ориентирования и навигации лежит SLAM (Simultaneous Location and Mapping, одновременная локализация и построение карты) – процесс вычисления положения устройства с одновременным построением карты в реальном времени. Это позволяет составлять карту неизвестной среды на ходу и постоянно обновлять ее с учетом движения объектов."/>
                <ContainerText text="Где применим? - Для решения навигационных задач посредством обработки данных от каналов технического зрения в среде со слабым или отсутствующим сигналом GPS. Например, в условиях высотной застройки точность спутниковой навигации существенно деградирует, в частности вследствие множественных переотражений сигнала. В ряде случаев сигнал ГНСС может отсутствовать, например, ввиду работы средств РЭБ." />
                <VideoBlock videoSrc="/video/page9/video1.mp4"/>
                <ContainerText text="Решение SLAM задач на основе обработки данных от LIDAR’а Позиционирование без GPS с дециметровой и субдециметровой точностью."/>
                <Button/>
             </div>
         </Layout>
         </>
     );
}

export default Page9;