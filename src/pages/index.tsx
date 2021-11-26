import * as React from 'react';
import styles from '../styles/Home.module.sass'
import Footer from '../components/footer';
import Homepage from '../components/homepage';
import { getAddPosts } from '../../lib/backend/database';
import {useState, useEffect} from 'react';
import Posts from '../components/posts';
import Pagination from '@mui/material/Pagination';
import {ITEMS_PER_PAGE} from "../constants";
import { useRouter } from 'next/router';

export default function Home(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState({posts: []});
    const pages = Math.ceil(props.posts.length / ITEMS_PER_PAGE);

    useEffect(() => {
        let data = [];
        if (props.posts && props.posts.length > 0) {
            data = props.posts.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage) * ITEMS_PER_PAGE);
            setPosts({posts: data});
        }
    }, [currentPage]);

    // resource: https://mui.com/components/app-bar/#back-to-top
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#top',
        );
    
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <div className={styles.home}>
            
            {currentPage == 1 && (
                <Homepage props={props}/>
            )}
            
            <Posts props={posts} />
            <div className="home_pagination_div">
                <Pagination
                    count={pages}
                    onChange={(event, page) => onChangePage(event, page)}
                    shape="rounded"
                    className="home_pagination"
                    onClick={handleClick}
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
    const posts = postdata.reverse().map(
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
