import styles from '../styles/Home.module.sass'
import Footer from '../components/footer';
import Homepage from '../components/homepage';
import { getAddPosts } from '../../lib/backend/database';
import React from 'react';
import Posts from '../components/posts';
import Pagination from '@mui/material/Pagination';

export default function Home(props) {
    return (
        <div className={styles.home}>
        <Homepage props={props}/>
        <Posts props={props}/>
        <div className="home_pagination_div">
                <Pagination count={5} shape="rounded" className="home_pagination"/>
            </div>
        <Footer/>
        </div>
    );
};

export async function getServerSideProps() {
    const postdata = await getAddPosts();
    const posts = postdata.map(
        (post) => {
            return {
                id: post.id.toString(),
                type: post.type || null,
                date: post.date || null,
                time: post.time || null,
                location: post.location || null,
                lostFname: post.lostFname || null,
                lostLname: post.lostLname || null,
                gender: post.gender || null,
                otherGender: post.otherGender || null,
                age: post.age || null,
                weight: post.weight || null,
                height: post.height || null,
                eyecolor: post.eyecolor || null,
                additional: post.additional || null,
                image: post.image || null,
                userFname: post.userFname || null,
                userLname: post.userLname || null,
                phoneNum: post.phoneNum || null,
                email: post.email || null
            };
        }
    )

    return {
        props : {
            posts
        }
    }
}
