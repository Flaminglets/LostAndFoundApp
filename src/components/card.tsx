import React from "react";
import NotLoggedIn from '../components/notLoggedIn';
import { getAddPosts } from '../../lib/backend/database';
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useSession} from 'next-auth/client';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { useState } from 'react';

const FlamingoEditButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#B0B7AB'
    },
})

const FlamingoFoundButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#455451'
    },
})

export default function UserPostCard(props) {
    console.log(props.id)
    const handleEditClick = (event) => {
        console.log(props.id)
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
                    <FlamingoFoundButton size="small" variant="contained" className="user_card_button user_card_button_found">
                    FOUND
                    </FlamingoFoundButton>
                </CardActions>
            </Card>
        </div>
    )
}