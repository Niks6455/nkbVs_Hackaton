import styles from "./containerText.module.scss";

function ContainerText(props) {
    return ( 
        <div className={styles.ContainerText}>
            <p>
                {props.text}
            </p>
        </div>
     );
}

export default ContainerText;