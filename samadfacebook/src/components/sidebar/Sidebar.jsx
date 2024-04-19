import { Bookmark, chat, Event, Group, HelpOutline, PlayCircleFilledOutline, RssFeed, School, WorkOutline } from "@mui/icons-material";
import { Users } from "../../dummyData";
import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { useContext } from "react"; // Imports the useContext hook from the react library
import { AuthContext } from "../../context/AuthContext";

// Defines the Sidebar component
const Sidebar = () => {
    // Destructures the user isShow from the AuthContext
    const { user, isShow } = useContext(AuthContext);
    // 
    return (
       <div>
        {/* Displays the user's profile picture and name */}
        { isShow &&
         <div className="sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                  <li className="sidebarListItem" >
                     <RssFeed className="sidebarIcon" />
                     <span className="sidebarListItemText">Feed</span>
                  </li>


                  <li className="sidebarListItem">
                     <Chat className="sidebarIcon" />
                     <span className="sidebarListItemText">Chats</span>
                  </li>


                  <li className="sidebarListItem">
                     <PlayCircleFilledOutline className="sidebarIcon" />
                     <span className="sidebarListItemText">Videos</span>
                  </li>


                  <li className="sidebarListItem">
                     <Group className="sidebarIcon" />
                     <span className="sidebarListItemText">Groups</span>
                     
                  </li>

                  <li className="sidebarListItem">
                     <Group className="sidebarIcon" />
                     <span className="sidebarListItemText">Bookmarks</span>                                         
                  </li>















               </ul>  
         </div>
        }
            </div> 
    )

   
}

