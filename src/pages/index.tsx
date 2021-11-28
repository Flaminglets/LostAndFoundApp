import styles from '../styles/Home.module.sass'
import Footer from '../components/footer';
import Homepage from '../components/homepage';
import { getAddPosts } from '../../lib/backend/database';
import React from 'react';
import {useState, useEffect} from 'react';
import Posts from '../components/posts';
import Pagination from '@mui/material/Pagination';
import {ITEMS_PER_PAGE} from "../constants";


/*
Flaminglets
Sarina
The current page start at 1
This function gets all the posts and stores it in an array then with the variable ITEMS_PER_PAGE
first devides all the post by the variable so we get the number of pages 
then we create another array data =[] for arranging numbers of posts per page
this makes each page have certain posts (data) assigned to them.
*/
export default function Home(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState({posts: []});
    const pages = Math.ceil(props.posts.length / ITEMS_PER_PAGE);

    useEffect(() => {
        let data = [];
        if (props.posts && props.posts.length > 0) {
            data = props.posts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
            setPosts({posts: data});
        }
    }, [currentPage]);

    return (
        <div className={styles.home}>
            <Homepage props={props}/>
            <Posts props={posts} />
            <div className="home_pagination_div">
                <Pagination
                    count={pages}
                    onChange={(event, page) => onChangePage(event, page)}
                    shape="rounded"
                    className="home_pagination"
                />
            </div>
            <Footer/>
        </div>
    );

    function onChangePage($event, page) {
        setCurrentPage(page);
    }
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
