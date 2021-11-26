import { StylesProvider } from '@material-ui/core';
import PrintIcon from '@mui/icons-material/Print';
import IosShareIcon from '@mui/icons-material/IosShare';
import styles from '../styles/popup.module.sass';
export default function PopUp(props) {
    const share = () => {
        console.log(window.location.href);
        var toCopy = window.location.href;
        navigator.clipboard.writeText(toCopy);
        
        alert("URL Copied");
    }
    const print = () => {
        var toPrint = document.getElementById("missing-card").innerHTML;
        var originalContent = document.body.innerHTML;
        document.body.innerHTML = toPrint;
        window.print();
        document.body.innerHTML = originalContent;
    }
    return (
        <div id="missing-card" className={styles.boxwrapper}>
            <div className={styles.box}>
                <div className={styles.iconWrapper}>
                    <div onClick={print} className={styles.printIcon}>
                        <PrintIcon />  
                    </div>
                    <div onClick={share} className={styles.shareIcon}>
                        <IosShareIcon />
                    </div>
                </div>
                  
                <h1 className={styles.red}>MISSING</h1>
                <img className={styles.img} alt="Not Avail" src={props.data.image}/>
                <h3 className={styles.name}>{props.data.lostFname} {props.data.lostLname}</h3>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <ul className="list">
                            <li className={styles.listitem}>
                                <b>Gender:</b> {props.data.gender ? `${props.data.gender}` : "N/A"}
                               
                            </li>
                            <li className={styles.listitem}>
                                <b>Date of Birth:</b> {props.data.dateOfBirth ? `${props.data.dateOfBirth}` : "N/A"}
                            </li>
                            <li className={styles.listitem}>
                                <b>Height:</b> {props.data.strHeight ? `${props.data.strHeight}` : props.data.height ? `${props.data.height}` : " "} 
                            </li>
                            <li className={styles.listitem}>
                                <b>Weight:</b> {props.data.strWeight ? `${props.data.strWeight}` : props.data.weight ? `${props.data.weight}` : " "}
                            </li>
                            <li className={styles.listitem}>
                                <b>Eye Color:</b> {props.data.eyecolor ? `${props.data.eyecolor}` : "N/A"}
                            </li>
                            <li className={styles.listitem}>
                                <b>Hair Color:</b> {props.data.haircolor ? `${props.data.haircolor}` : "N/A"}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                    <ul className="list">
                            <li className={styles.listitem}>
                                <b>Last Seen:</b> {props.data.location ? `${props.data.location} ` : "N/A"}{props.data.date ? `, ${props.data.date}` : ""}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}