/*
By Yoonseo @Flaminglets
this file contains post card function for user page
which includes post data name, image, edit or delete button
*/

import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 730,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

// button style
const FlamingoEditButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#B0B7AB"
    },
})

const FlamingoFoundButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#455451"
    },
})

// @params: a post data of one of the user's posts
// @return: post card for user page
export default function UserPostCard(props) {
    // redirect to update post page with post id
    const handleEditClick = () => {
        location.href = `/updatepost/${props.id}`;
    }

    // redirect to delete page with post id
    const handleFoundClick = async () => {
        const postID = props.id;
        location.href = `/delete/${postID}`;
    }

    return (
        <div key={props.id}>
            <Card className="user_cards" elevation={5}
            sx={{ padding: "0.5rem"}}>
                <CardActionArea>
                    <p className="user_card_title">
                        {props.lostFname} {props.lostLname}
                    </p>
                    <CardMedia className="user_card_media"
                        component="img"
                        image={props.image}
                        alt="missing pet/person image"
                    />
                </CardActionArea>
                <CardActions className="user_card_buttons">
                    <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit"
                    sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", fontSize: "2vw", height: "5vw", width: "12vw"}, 
                    backgroundColor: "#D2D4C8", color:"black", height: "1.8rem"}}
                    onClick={handleEditClick}>
                    Edit
                    </FlamingoEditButton>
                    <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found"
                    sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", fontSize: "2vw", height: "5vw", width: "12vw"}, 
                    backgroundColor: "#5F7470", height: "1.8rem"}}
                    onClick={handleFoundClick}>
                    FOUND
                    </FlamingoFoundButton>
                </CardActions>
            </Card>
        </div>
    )
}