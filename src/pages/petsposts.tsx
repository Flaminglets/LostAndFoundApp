import Header from "../components/header";
import Footer from '../components/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Pagination from '@mui/material/Pagination';


export default function PetsPosts() {
    return (
        <div>
            <Header/>
            <div className="posts_div">
                <h1>Pets</h1>
            </div>
            <div className="home_content">
                <Card className="home_cards" elevation={5}>
                    
                </Card>
            </div>

            <Footer/>
        </div>
    )
}