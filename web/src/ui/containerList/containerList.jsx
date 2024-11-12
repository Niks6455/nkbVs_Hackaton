import styles from "./containerList.module.scss";

function ContainerList(props) {
    // Разделяем текст по символу ';' и убираем лишние пробелы
    const items = props.text.split(';').map(item => item.trim()).filter(item => item);

    return ( 
        <div className={styles.ContainerList}>
            <p>{props?.title}</p>
           <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}{index !== items.length - 1 ? ';' : '.'}</li>
                ))}
           </ul>
        </div>
     );
}

export default ContainerList;