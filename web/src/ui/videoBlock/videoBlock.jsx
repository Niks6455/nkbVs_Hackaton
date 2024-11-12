import styles from "./videoBlock.module.scss";

function VideoBlock({ videoSrc }) {
    return ( 
        <div className={styles.videoBlock}>
            <video controls>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoBlock;