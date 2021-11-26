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
import { makeStyles } from '@material-ui/core/styles';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    paper: {
      color: '#889696'
    }
});

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

export default function Header (props) {
    const [session] = useSession()
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const handleFinalSearch = (event) => {
        if (event.key === 'Enter') {
            console.log("enter clicked: ", search)
            setSearch('');
            location.replace(`/searchPosts/${search}`)
        }
    }

    const handleTypePet = () => {
        router.push('/posts/pet')
    }

    const handleTypePeople = () => {
        router.push('/posts/person');
    }

    const handleTypeNone = () => {
        router.push('/');
    }

    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => () => {
        setState({ ...state, [anchor]: open });
    };
    
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
                    <li><Link href="/loginregister">LogIn</Link></li>
                    <li><Link href="/loginregister">Register</Link></li>
                </ul>
                </>
            )}
            {session && (
                <>
                <ul className="header_drawer_list">
                    <li><Link href="/newpost">New Post</Link></li>
                    <li><Link href={`/user/${session.id}`}>User</Link></li>
                    <li><Link href="/"><button className="header_logout_button header_button" onClick={() => signOut({redirect: false, callbackUrl: "/"})}>Logout</button></Link></li>
                </ul>
                </>
            )}
        </List>
        <Divider variant="middle"/>
        <List className="header_drawer_list">
            <p>Category</p>
            <ul>
                <li><button className="header_logout_button header_button" onClick={handleTypePet}>Pets</button></li>
                <li><button className="header_logout_button header_button" onClick={handleTypePeople}>People</button></li>
            </ul>
        </List>
        </Box>
    );

    const styles = useStyles();

    return (
        <div className="header_div">
            <div className="header_container" id="top">
                <div className="header_hamburger_wrapper">
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
                        {/* classes={{ paper: styles.paper }} */}
                        </Drawer>
                    </React.Fragment>
                </div>

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
                    
                    {!session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><Link href="/loginregister">LogIn / Register</Link></li>
                                </ul>
                            </div>
                        </>
                    )}
                    {session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><Link href="/newpost">New Post</Link></li>
                                    <Divider orientation="vertical" variant="middle" flexItem className="divider one_divider" style={{fill: "white"}}/>
                                    <li className="header_list"><Link href={`/user/${session.id}`}>User</Link></li>  
                                    <Divider orientation="vertical" variant="middle" flexItem className="divider" style={{fill: "white"}}/>
                                    <li className="header_list"><Link href="/"><button className="header_logout_button header_button" onClick={() => {signOut({redirect: false, callbackUrl: "/"});}}>Logout</button></Link></li>
                                </ul>
                            </div>
                        </>
                    )}
                    
                </div>
            </div>
            <CssBaseline />
            <div className="mobile_nav">
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} >
                <BottomNavigation
                // showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                >
                <BottomNavigationAction label="Add Post" onClick={() => (router.push('/newpost'))} icon={<AddCircleRoundedIcon />} />
                <BottomNavigationAction label="Home" onClick={() => (router.push('/'))} icon={<HomeRoundedIcon />} />
                <BottomNavigationAction label="User" onClick={() => (router.push('/user'))} icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </Paper>
            </div>
        </div>
    );
};