import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/router';
import {useState} from 'react';

export default function PostCard(props) {

    const router = useRouter();
    const handleCardClick = () => {
        router.push({
            pathname: `/detailpage/${props.id}`,
            query: {
                id: props.id
            }
        })
    }

    return (
        
        <div key={props.id}>
            <Card className="home_cards" elevation={5}>
                <CardActionArea onClick={handleCardClick}>
                    <Typography gutterBottom variant="h5" component="div" className="home_card_title">
                        {props.lostFname} {props.lostLname}
                    </Typography>
                    <CardMedia className="home_card_media"
                        component="img"
                        image={props.image}
                        alt="lost pet/person image"
                    />
                    <CardContent className="home_card_info_div">
                    <div className="home_card_info_div">
                        <p className="home_card_info">Location: {props.location}</p>
                        <p className="home_card_info">Last seen: {props.date}, {props.time}</p>
                    </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className="home_card_button">
                    Contact
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}