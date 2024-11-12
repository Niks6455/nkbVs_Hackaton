import styles from './TitlePage.module.scss';

function TitlePage(props) {
    return ( 
        <div className={styles.TitlePage}>
            <p>
                {props.text}
            </p>
            <p className={styles.subtitle}>{props?.subtitle}</p>
        </div>
     );
}

export default TitlePage;