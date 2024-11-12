import Layout from "../../../components/Layout/Layout";
import HeaderComponent from "../../../components/header/header";
import TitlePage from "../../../ui/TitlePage/TitlePage";
import Button from "../../../ui/button/button";
import ContainerList from "../../../ui/containerList/containerList";
import ContainerText from "../../../ui/containerText/containerText";
import VideoBlock from "../../../ui/videoBlock/videoBlock";

function Page5() {
    return ( 
        <>
        <HeaderComponent/>
         <Layout>
             <div>
                <TitlePage text="CV. ВИДЕОАНАЛИТИКА ДЛЯ HoReCa" />
                <ContainerText text="Применение современных технологий анализа данных является необходимым элементом эффективной компании. Оптимизация затрат, контроль бизнес-процессов, помощь задействованным сотрудникам, скорость обслуживания гостей, голосовые помощники - все эти инструменты помогают сохранять ресторанному бизнесу гибкость и уникальность в работе с клиентами, а также быть на шаг впереди конкурентов."/>
                <VideoBlock videoSrc="/video/page5/video1.mp4"/>
                <ContainerText text="Наш виртуальный ассистент для ресторанов RIIVA увеличивает доход ресторана с помощью новых инструментов анализа бизнес-процессов, информирования и взаимодействия сотрудников."/>
                <Button />
             </div>
         </Layout>
         </>
     );
}

export default Page5;