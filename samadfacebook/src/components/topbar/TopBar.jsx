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
        {
            key: "2",
            label: (
            <Link to={`/profile/${user.username}`}>
                Profile
            </Link>
            ),
        },
        {
            key: "3",
            label: "Sign Out",
            onClick: () => signOutHandler(),
            
        },
        {
            key: "4",
            label: "Show Friends",
            onClick: () => showFriendsHandler(),
        },
    ];
   const showHiddenLeftbar = () => { // function to handle showing and hiding leftbar
       dispatch({ type: "HIDDEN_LEFTBAR", payload: !isShow }) // dispatch action to show and hide leftbar
       console.log('isShow', isShow);
   } 


   return(
        <div className="topbarContainer">   

            <div className="topbarLeft">
                <Link to={'/'}>
                <span className="logo">Facebook</span>
                </Link>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div>

            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem" style={{display:"flex", alignItems:"center"}}>
                    <FaBars className="fabarsIcon" style={{fontSize:"20px"}} onClick={showHiddenLeftbar}/>
                    </div>
                </div>

                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                c
            </div>

            <Dropdown
                menu={{
                    items,
                }}
                placement="bottomRight"
                arrow={{
                    pointAtCenter: true,
                }}
                >  
                <img src={user.profilePicture ? user.profilePicture : Pic_1}  />
                </Dropdown>



        </div>

   )
}



export default TopBar;

