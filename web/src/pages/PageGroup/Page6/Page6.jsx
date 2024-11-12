import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page6() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="CV. ТЕХНИЧЕСКОЕ ЗРЕНИЕ В АВИОНИКЕ" />
                <ContainerText text="Интересы и компетенции КБ лежат не только в горизонтальной плоскости. Аналогично с наземными системами, ИИ покоряет воздух."/>
                <ContainerText text="Это стало возможным благодаря тысячам часов симуляции, жесточайшими тестами на отказоустойчивость и способность работать в real-time. Высокие показатели надежности в совокупности со стандартами безопасности кода позволяют применять ИИ для управления различными авиационными системами. Для авиационных робототехнических систем используются те же самые подходы, принципы, алгоритмы и датчики. В качестве примера представлена система адаптивной помощи пилоту при посадке. Система формирует направление на полосу в сложной городской застройке и в незнакомой местности. А также помогает осуществлять заход на глиссаду, коррекцию движения по глиссаде. (У каждой ВВП есть своя глиссада, обеспечивающая максимально безопасную посадку). В качестве еще одного примера того, что задачи для авиационных систем фактически те же, что и для наземных может служить ГИС для пилота. Данная ГИС представляет собой аэронавигатор с элементами дополненной реальности."/>
                <VideoBlock videoSrc="/video/page6/video1.mp4"/>
                <ContainerText text="Работа помощи пилоту при посадке"/>
                <VideoBlock videoSrc="/video/page6/video2.mp4"/>
                <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page6;