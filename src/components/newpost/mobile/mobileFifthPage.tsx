/* By Yoonseo @Flaminglets
this file contains fifth page of post form for mobile size window used in NewPost and UpdatePost function
getting inputs from user that includes: (lost pet/person's) image
validates input and show error message when input value is not valid, and prevents from going to next page */

import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import { createTheme } from '@mui/material';

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

// button style
const FlamingoNextButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#A2AA9D"
    },
})

// @params: useState data.image from NewPost and UpdatePost functions
// @return: image form
export default function FifthPage(props) {
    const [image, setImage] = useState(props.image || "");
    const handleSetImage = async (event) => {
        await getImageToBase64(event.target.files[0], (result) => {
            props.handlePageData({ image: result });
            setImage(result);
        });
    };
    const getImageToBase64 = (file: any, cb: any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };

    const handleNextClick = () => {
        props.handleNextClick();
    };

    const handlePrevClick = () => {
        props.handlePrevClick();
    }

    return (
        <div className="newpost_form">
            <div className="newpost_pages">
                <p className="newpost_form_label">Uplouad a most recent photo of the missing pet/person</p>
                <div className="newpost_form_image">
                    <input
                        name="image"
                        id="outlined-required"
                        type="file"
                        accept="image/*"
                        className="myimage"
                        onChange={handleSetImage}
                    />
                    {image != "" && (
                        <div className="input_image_div">
                            <p>Chosen image</p>
                            <CardMedia className="input_image"
                                component="img"
                                image={props.image}
                                alt="missing pet/person image"
                                sx={{width: "13rem", height: "10rem"}}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw 0", width: "39.6vw", fontSize: "2.5vw", height: "2.3rem"}, 
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Previous
                </FlamingoNextButton>
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next"
                sx={{[theme.breakpoints.down('sm')]: {margin: "1vw 0", width: "39.6vw", fontSize: "2.5vw", height: "2.3rem"}, 
                backgroundColor: "#B8BDB5", margin: "1rem 0 1rem 1rem", color:"black", minHeight: "1.6rem", width: "6.5rem", fontSize: "0.7rem"}}>
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}