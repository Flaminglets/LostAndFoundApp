/* By Harman, Yoonseo @Flaminglets
this file contains function to display detial information of one post */

import PrintIcon from '@mui/icons-material/Print';
import IosShareIcon from '@mui/icons-material/IosShare';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material';
import QRCode from 'qrcode.react';
import { useRouter } from 'next/router';

// for mui style
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
});

// @params: the post data that user clicked
// @return: displays all the data, print this page, copy link of this page
export default function PopUp(props) {
    const share = () => {
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

    props = props.data

    const rootURL = process.env.PUBLIC_URL;
    const qrValue = `https://lost-and-found-flamingo.herokuapp.com/detailpage/` + props._id;

    return (
        <div  >
            <div className="newpost">
                <div className="iconWrapper">
                    <div onClick={print} className="printIcon">
                        <PrintIcon />
                    </div>
                    <div onClick={share} className="shareIcon">
                        <IosShareIcon />
                    </div>
                </div>
                <div className="newpost_form" id="missing-card">
                    <div className="newpost_form_last_info">

                        <div className="newpost_lp_name">
                            <p>{props.lostFname} {props.lostLname}</p>
                        </div>
                        <div className="lp_image_div">
                            <CardMedia className="lp_image"
                                component="img"
                                image={props.image}
                                alt="missing pet/person image"
                                sx={{
                                    [theme.breakpoints.down('sm')]: { width: "55vw", height: "45vw" },
                                    [theme.breakpoints.down('md')]: { width: "39vw", height: "31vw", borderRadius: "5px" },
                                    width: "25rem", height: "20rem", borderRadius: "5px"
                                }}
                            />
                        </div>
                        <div className="lp_elements">
                            <div className="lp_element_left">
                                <p>Gender: <strong>{props.gender ? `${props.gender}` : "N/A"} {props.otherGender}</strong></p>
                                <p>Age: <strong>{props.age ? `${props.age}` : "N/A"}</strong></p>
                                <p>Weight: <strong>{props.weight ? `${props.weight}` : "N/A"} kg</strong></p>
                                <p>Height: <strong>{props.height ? `${props.height}` : "N/A"} cm</strong></p>
                                <p>Eye color: <strong>{props.eyecolor ? `${props.eyecolor}` : "N/A"}</strong></p>
                            </div>
                            <Divider orientation="vertical" variant="middle" flexItem className="lp_divider" style={{ fill: "black" }}
                                sx={{ [theme.breakpoints.down('sm')]: { width: "0.7vw", marginRight: "2vw" } }} />
                            <div className="lp_element_right">
                                <p>Last seen</p>
                                <p>- Location: <strong>{props.location ? `${props.location}` : "N/A"}</strong></p>
                                <p>- Date: <strong>{props.date ? `${props.date}` : "N/A"}</strong></p>
                                <p>- Time: <strong>{props.time ? `${props.time}` : "N/A"}</strong></p>
                                <p>Contact info</p>
                                <p>- Phone num: <strong>{props.phoneNum ? `${props.phoneNum}` : "911"}</strong></p>
                                <p>- Email: <strong>{props.email ? `${props.email}` : "N/A"}</strong></p>
                            </div>
                        </div>
                        {props.additional != null && props.additional != "" && (
                            <div className="lp_adinfo">
                                <p>Additional information: </p>
                                <p><strong>{props.additional}</strong></p>

                                 {/* Reference = https://codesandbox.io/s/3zcbs */}
                                 <QRCode
                                    id="qr-gen"
                                    value={qrValue}
                                    size={150}
                                    level={"H"}
                                    includeMargin={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}