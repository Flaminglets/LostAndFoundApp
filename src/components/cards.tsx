import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useRouter } from 'next/router';

export default function PostCard(props) {
    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/detailpage/${props.id}`)
    }

    return (
        <div key={props.id}>
            <Card className="home_cards" elevation={5}>
                <CardActionArea onClick={handleCardClick}>
                    <p className="home_card_title">
                        {props.lostFname} {props.lostLname}
                    </p>
                    <CardMedia className="home_card_media"
                        component="img"
                        image={props.image}
                        alt="lost pet/person image"
                    />
                    <CardContent>
                    <div className="home_card_info_div"></div>
                    <p className="home_card_info">Location: {props.location}</p>
                    <p className="home_card_info">Last seen: {props.date}, {props.time}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Contact
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}