import { Person, Chat, Notifications } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import { Button, Dropdown } from "antd";
import { FaBars } from "react-icons/fa";


import Pic_1 from "./Person/1.jpg";
import UserIcon from "./Person/UserIcon";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
    const navigate = useNavigate(); // Creates a navagation instance usng react router

    // Uses the AuthContext to retrieve the current user, show state, friends list, and dispatch function
    const { user, isShow, friends, dispatch } = useContext(AuthContext); 
    
    console.log("friends", friends);

    // functon to handle user sign-out
    const signOutHandler = () => {
        console.log("checking sign out handler")        
        localStorage.removeItem('user') // removes the user from local storage
        window.location.reload(); // reload the page
        navigate("/login") // navigate to login page
    }

    // function to handle showing and hiding friends list
    const showFriendsHandler = () => {
        console.log("checking show friends handler")
        dispatch({ type: "SHOW_FRIENDS", payload: !isShow }) // dispatch action to show and hide friends list
        console.log('friends', friends);
    };

    // Defines menu items for the dropdown
    const items = [
        {
            key: "1",
            label: (<Link to={'/'}>
            Home
            </Link>
            ),
        },
        






    ]







}
