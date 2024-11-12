import styles from "./button.module.scss";

function Button(props) {
    return ( 
        <div className={styles.button}>
            <button style={{backgroundColor: props.colorBg}}>ОК</button>
        </div>
     );
}

export default Button;