import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
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
import ListItem from "@mui/material/ListItem";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
      color: '#889696'
    }
});

const Header = () => {
    const [session] = useSession()

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
            <ListItem button>
            <a href="/loginregister">LogIn</a>
            <a href="/loginregister">Register</a>
            </ListItem>
        </List>
        <Divider variant="middle"/>
        <List className="header_drawer_list">
            <p>Category</p>
            <ul>
                <li><a href="/posts">Pets</a></li>
                <li><a href="/posts">People</a></li>
            </ul>
        </List>
        </Box>
    );

    const styles = useStyles();

    return (
        <div className="header_div">
            <div className="header_container">
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
                            <li className="header_list"><a href="/posts">Pets</a></li>
                            <Divider orientation="vertical" variant="middle" flexItem className="divider" style={{fill: "white"}}/>
                            <li className="header_list"><a href="/posts">People</a></li>
                        </ul>
                    </div>
                </div>

                
                
                <div className="header_left">
                    <div className="header_search">
                        <input placeholder="search" id="search"></input>
                    </div>
                    
                    {!session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><a href="/loginregister">LogIn / Register</a></li>
                                </ul>
                            </div>
                        </>
                    )}
                    {session && (
                        <>
                            <div className="header_user">
                                <ul>
                                    <li className="header_list"><a href="">New Post</a></li>
                                    <li className="header_list"><a href="/user"><AccountCircleRoundedIcon /></a></li>
                                    <li className="header_list">Logout</li>
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
                <BottomNavigationAction label="Add Post" icon={<AddCircleRoundedIcon />} />
                <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
                <BottomNavigationAction label="User" icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </Paper>
            </div>
        </div>
    );
};

export default Header;