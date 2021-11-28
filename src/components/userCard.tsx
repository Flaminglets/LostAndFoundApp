/*
Flaminglets
Yoonseo
this file contains post card function for user page
which includes post data name, image, edit or delete button
*/

import React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

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

export default function UserPostCard(props) {
    const router = useRouter();
    // redirect to update post page with post id
    const handleEditClick = () => {
        router.push(`/updatepost/${props.id}`)
    }

    // redirect to delete page with post id
    const handleFoundClick = async () => {
        const postID = props.id;
        router.push(`/delete/${postID}`);
    }

    return (
        <div key={props.id}>
            <Card className="user_cards" elevation={5}>
                <CardActionArea>
                    <Typography gutterBottom variant="h5" component="div" className="user_card_title">
                        {props.lostFname} {props.lostLname}
                    </Typography>
                    <CardMedia className="user_card_media"
                        component="img"
                        image={props.image}
                        alt="missing pet/person image"
                    />
                </CardActionArea>
                <CardActions className="user_card_buttons">
                    <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit"
                    onClick={handleEditClick}>
                    Edit
                    </FlamingoEditButton>
                    <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found"
                    onClick={handleFoundClick}>
                    FOUND
                    </FlamingoFoundButton>
                </CardActions>
            </Card>
        </div>
    )
}