/* By Yoonseo @Flaminglets
this page displays posts that includes the word that user wants to search */

import {useState, useEffect} from 'react';
import Footer from '../../components/footer';
import PostCard from '../../components/cards';
import {ITEMS_PER_PAGE} from '../../constants';
import Pagination from '@mui/material/Pagination';

// @params: user input word from search bar
// @return: posts with PostCard function from cards file, and pass filtered posts data, and Footer
export default function Posts({props}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState({posts: []});
    const pages = Math.ceil(props.posts.length / ITEMS_PER_PAGE);

    // pagination
    useEffect(() => {
        let data = [];
        if (props.posts && props.posts.length > 0) {
            data = props.posts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
            setPosts({posts: data});
        }
    }, [currentPage]);
    function onChangePage($event, page) {
        setCurrentPage(page);
    }

    // resource: https://mui.com/components/app-bar/#back-to-top
    // back to top button function
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#top",
        );
        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <div>
            <div className="posts_div">
                <h1>Searched with '{props.search}'</h1>
            </div>
            <div className="home_content">
                {posts.posts.map(
                        (post) => {
                            return (
                                <PostCard 
                                    id={post.id}
                                    type={post.type}
                                    date={post.date}
                                    time={post.time}
                                    location={post.location}
                                    lostFname={post.lostFname}
                                    lostLname={post.lostLname}
                                    gender={post.gender}
                                    otherGender={post.otherGender}
                                    age={post.age}
                                    weight={post.weight}
                                    height={post.height}
                                    eyecolor={post.eyecolor}
                                    additional={post.additional}
                                    image={post.image}
                                    userFname={post.userFname}
                                    userLname={post.userLname}
                                    phoneNum={post.phoneNum}
                                    email={post.email}
                                />  
                            )
                        }
                    )
                }
            </div>
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
};

// getting all the posts from database
// and filters posts that includes searched word
// @params: search word
// @return: filtered posts
Posts.getInitialProps = async (ctx) => {
    // resources: https://www.youtube.com/watch?v=Os3JZc2CtwY
    const {query} = ctx;
    
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await fetch(`${process.env.PUBLIC_URL}/api/post`, requestOptions);
    const postdata = await response.json()

    const posts = postdata.filter((posts) => {
        if (query.search == "" || query.search == "pet" || query.search == "person") {
            return posts
        } else if (
            posts.lostFname.toLowerCase().includes(query.search.toLowerCase()) ||
            posts.lostLname.toLowerCase().includes(query.search.toLowerCase()) || 
            posts.location.toLowerCase().includes(query.search.toLowerCase()) || 
            posts.date.toLowerCase().includes(query.search.toLowerCase())) {
            return posts
        }
    }).reverse().map(
        (post) => {
            return {
                id: post._id,
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
    const search = query.search

    return {
        props : {
            posts,
            search
        }
    }
}
