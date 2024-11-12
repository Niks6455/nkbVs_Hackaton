import styles from "./header.module.scss";
import React from "react"; 

function HeaderComponent() {
    return ( 
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <p>Вы открыли технологию</p>
            </div>
            <div  className={styles.headerImg}>
                <img src="/img/logo.svg"></img>
            </div>
        </div>
     );
}

export default HeaderComponent;