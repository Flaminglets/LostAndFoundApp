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
    console.log(props.data);
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
                  
                <h3 className={styles.name}>{props.data.lostFname} {props.data.lostLname}</h3>
                <img className={styles.img} alt="Not Avail" src={props.data.image}/>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <ul className="list">
                            <li className={styles.listitem}>
                                Gender: <b>{props.data.gender ? `${props.data.gender}` : "N/A"}</b>
                               
                            </li>
                            <li className={styles.listitem}>
                                Date of Birth: <b>{props.data.dateOfBirth ? `${props.data.dateOfBirth}` : "N/A"}</b>
                            </li>
                            <li className={styles.listitem}>
                                Height: <b>{props.data.strHeight ? `${props.data.strHeight}` : props.data.height ? `${props.data.height}` : " "} </b>
                            </li>
                            <li className={styles.listitem}>
                                Weight: <b>{props.data.strWeight ? `${props.data.strWeight}` : props.data.weight ? `${props.data.weight}` : " "}</b>
                            </li>
                            <li className={styles.listitem}>
                                Eye Color: <b>{props.data.eyecolor ? `${props.data.eyecolor}` : "N/A"}</b>
                            </li>
                            <li className={styles.listitem}>
                                Hair Color: <b>{props.data.haircolor ? `${props.data.haircolor}` : "N/A"}</b>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                    <ul className="list">
                            <li className={styles.listitem}>
                                Last Seen:
                            </li>
                            <li className={styles.listitem}>
                                - Location: <b>{props.data.location}</b>
                            </li>
                            <li className={styles.listitem}>
                                - Date: <b>{props.data.date ? props.data.date : "N/A"}</b>
                            </li>
                            <li className={styles.listitem}>
                                - Time: <b>{props.data.time ? props.data.time : "N/A"}</b>
                            </li>
                            <li className={styles.listitem}>
                                Contact Info:
                            </li>
                            <li className={styles.listitem}>
                                - Phone Num: <b>{props.data.phoneNum ? props.data.phoneNum : "N/A"}</b>
                            </li>
                            <li className={styles.listitem}>
                                - Email: <b>{props.data.email ? props.data.email : "N/A"}</b>
                            </li>   
                        </ul>
                    </div>
                </div>
                <div className={styles.additionalInfoWrap}>
                   <h4>Additional Information: </h4> 
                   <p>{props.data.additional}</p>
                </div>
                
            </div>
        </div>
    )
}