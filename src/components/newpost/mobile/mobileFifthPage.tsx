import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';

const FlamingoNextButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#A2AA9D'
    },
})

export default function FifthPage(props) {
    const [image, setImage] = useState(props.image || '');
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
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="newpost_buttons">
                <FlamingoNextButton variant="contained" onClick={handlePrevClick} className="newpost_button_next">
                    Previous
                </FlamingoNextButton>
                <FlamingoNextButton variant="contained" onClick={handleNextClick} className="newpost_button_next">
                    Next
                </FlamingoNextButton>
            </div>
        </div>
    )
}
