import React from 'react'
import moatup from './Assets/moatup.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
// import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import './css/header1.css';
// import header1operations from './header1operations.js';
// import Header1Operations from './header1operations.js';
import Header1Operations from './Header1Operations.js';

import { Link } from "react-router-dom";

export default function Header1() {
    return (
        <div className="header1">
            <div className="header1_left">
                <div className="header1_logo">
                    <img src={moatup} alt="logo" />
                </div>

                <div className="header1_search">
                    <input type="text" placeholder='Search' />
                    <SearchIcon className="search_icon" />
                </div>
            </div>

            <div className="header1_right">
    <Link to="/home">
        <Header1Operations Icon={HomeIcon} title="Home" />
    </Link>
    <Link to="/mynetwork">
        <Header1Operations Icon={PeopleIcon} title="My Network" />
    </Link>
    <Link to="/calendar">
        <Header1Operations Icon={CalendarMonthIcon} title="My Calendar" />
    </Link>
    <Link to="/messages">
        <Header1Operations Icon={MessageIcon} title="Message" />
    </Link>
    <Link to="/notifications">
        <Header1Operations Icon={NotificationsIcon} title="Notification" />
    </Link>
    <div className="header1_avatar">
        <Avatar
            alt="Vishal"
            src="/static/images/avatar/1.jpg"  // Avatar image
            sx={{ width: 40, height: 40 }}  // Avatar size
        />
        <span className="avatar_title">Tata Capital</span> 
    </div>
</div>

            {/* <div className="header1_right">
                <Header1Operations Icon={HomeIcon} title="Home" to="/" />
                <Header1Operations Icon={PeopleIcon} title="My Network" to="/network" />
                <Header1Operations Icon={CalendarMonthIcon} title="My Calendar" to="/calendar" />
                <Header1Operations Icon={MessageIcon} title="Message" to="/message" />
                <Header1Operations Icon={NotificationsIcon} title="Notification" to="/notifications" />
                <div className="header1_avatar">
                    <Avatar alt="Vishal" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} />
                    <span className="avatar_title">Tata Capital</span>
                </div>
            </div> */}

        </div>
    )
}
