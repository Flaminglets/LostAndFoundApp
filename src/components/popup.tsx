import styles from './styles/popup.module.sass'
export default function PopUp(props) {
    return (
        <div className={styles.box}>
            <h1 className={styles.red}>MISSING</h1>
            <h2 className={styles.name}>{props.missingPersonName}</h2>
            <h5 className={styles.location}>Location: {props.location}</h5>
            <h5 className={styles.lastseen}>Last Seen: {props.lastSeen}</h5>
        </div>
    )
}