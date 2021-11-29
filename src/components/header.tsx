/*
By Yoonseo @Flaminglets
this file contains header function that is used in all pages
Contained button elements:
 - Logo: redirect to home page
 - pets/people: redirect to postType page with the type clicked
 - search bar: passed the typed word by user to sort data, and redirect to seached post page
    when no session
 - login/register: redirects to login/register page.
    when session
 - newpost: redirect to newpost page for user to create new post
 - user: redirect to user page
 - logout: logout button and redirects to homepage when user has logged out
    when mobile size window
 - hamburger nav drawer
 - bottom nav: includes 'home', 'user', 'newpost' buttons
*/

import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/client";
import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Divider from '@mui/material/Divider';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// resource: https://mui.com
// search bar element function from mui website
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
        width: '20ch',
        },
    },
    },
}));

// @return: display header
export default function Header () {
    const [session] = useSession()
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // if user clicks Enter button from keyboard, set search bar input to be empty
    // and redirect to searchposts page with typed word
    const handleFinalSearch = (event) => {
        if (event.key === "Enter") {
            console.log("enter clicked: ", search)
            setSearch("");
            location.replace(`/searchPosts/${search}`)
        }
    }

    // resource: https://mui.com
    // hamburger nav drawer function from mui website
    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => () => {
        setState({ ...state, [anchor]: open });
    };
    
    // button elements in the hamburger nav drawer
    const list = () => (
        <Box 
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer("left", false)}
        >
        <List className="header_drawer_list">
            {!session && (
                <>
                <ul className="header_drawer_list">
                    <li><Link href="/loginregister">Log In</Link></li>
                    <li><Link href="/loginregister">Register</Link></li>
                </ul>
                </>
            )}
            {session && (
                <>
                <ul className="header_drawer_list">
                    <li><Link href="/newpost">New Post</Link></li>
                    <li><Link href="/user">User</Link></li>
                    <li><button className="header_logout_button header_button logout_button" onClick={() => signOut({redirect: false, callbackUrl: "/"})}>Logout</button></li>
                </ul>
                </>
            )}
        </List>
        <Divider variant="middle"/>
        <List className="header_drawer_list">
            <p>Category</p>
            <ul>
                <li><a className="header_logout_button header_button" href='/posts/pet'>Pets</a></li>
                <li><a className="header_logout_button header_button" href='/posts/person'>People</a></li>
            </ul>
        </List>
        </Box>
    );

    return (
        <div className="header_div">
            <div className="header_container" id="top">
                {/* hamburger nav drawer when windows size is less than 1024px */}
                <div className="header_hamburger_wrapper">
                    {/* resource: https://mui.com/components/drawers/#main-content */}
                    <React.Fragment key="left" >
                        <button className="hamburger-btn hamburger--collapse" id="hamburger" type="button" onClick={toggleDrawer("left", true)}>
                            <div className="hamburger-box">
                                <MenuRoundedIcon style={{fill: "white", fontSize: "2.5rem" }}/>
                            </div>
                        </button>
                        <Drawer className="header_drawer_container"
                        anchor="left"
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        >
                        {list()}
                        </Drawer>
                    </React.Fragment>
                </div>

                {/* logo, pets/people */}
                <div className="header_right">
                    <div className="header_logo_div">
                        <a className="header_logo" href="/">Lost and Found</a>
                    </div>

                    <div className="header_nav_wrapper">
                        <ul className="header_nav">
                            <li className="header_list"><a className="header_logout_button header_button" href='/posts/pet'>Pets</a></li>
                            <Divider orientation="vertical" variant="middle" flexItem className="divider" style={{fill: "white"}}/>
                            <li className="header_list"><a className="header_logout_button header_button" href='/posts/person'>People</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* search bar, login/register, newpost, user, logout */}
                <div className="header_left">
                    <div className="header_search_web">
                        {/* search bar */}
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                value={search}
                                onChange={handleSearch}
                                onKeyDown={handleFinalSearch}
                            />
                            
                        </Search>
                    </div>
                    <div className="header_search_mobile">
                        <SearchIcon sx={{ fill: "white" }} />
                    </div>
                    
                    {/* when user not logged in */}
                    {!session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><Link href="/loginregister">Log In / Register</Link></li>
                                </ul>
                            </div>
                        </>
                    )}
                    {/* when user logged in */}
                    {session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><Link href="/newpost">New Post</Link></li>
                                    <Divider orientation="vertical" variant="middle" flexItem className="divider one_divider" style={{fill: "white"}}/>
                                    {/* <li className="header_list"><a href={`/user/${session.id}`}>User</a></li>   */}
                                    <li className="header_list"><Link href="/user">User</Link></li> 
                                    <Divider orientation="vertical" variant="middle" flexItem className="divider" style={{fill: "white"}}/>
                                    <li className="header_list"><Link href="/"><button className="header_logout_button header_button" onClick={() => {signOut({redirect: false, callbackUrl: "/"});}}>Logout</button></Link></li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* resource: https://mui.com */}
            {/* bottom nav bar when windows size is less then 700px */}
            <CssBaseline />
            <div className="mobile_nav">
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: "tooltip"}} elevation={3}>
                <BottomNavigation sx={{bgcolor: "#5F7470"}}>
                <BottomNavigationAction label="Add Post" onClick={() => (router.push("/newpost"))} icon={<AddCircleRoundedIcon />} sx={{color: "white"}}/>
                <BottomNavigationAction label="Home" onClick={() => (router.push("/"))} icon={<HomeRoundedIcon />} sx={{color: "white"}}/>
                <BottomNavigationAction label="User" onClick={() => (router.push("/user"))} icon={<AccountCircleRoundedIcon />} sx={{color: "white"}}/>
                </BottomNavigation>
            </Paper>
            </div>
        </div>
    );
};