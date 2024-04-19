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
                     <Bookmark className="sidebarIcon" />
                     <span className="sidebarListItemText">Bookmarks</span>                                         
                  </li>


                  <li className="sidebarListItem">
                     <HelpOutline className="sidebarIcon" />
                     <span className="sidebarListItemText">Questions</span>                                         
                  </li>


                  <li className="sidebarListItem">
                     <WorkOutline className="sidebarIcon" />
                     <span className="sidebarListItemText">Jobs</span>                                         
                  </li>


                  <li className="sidebarListItem">
                     <Event className="sidebarIcon" />
                     <span className="sidebarListItemText">Events</span>                                         
                  </li>


                  <li className="sidebarListItem">
                     <School className="sidebarIcon" />
                     <span className="sidebarListItemText">Courses</span>                                         
                  </li>
               </ul>
                  <button className="sidebarbutton">Show More</button>
                  <hr className="sidebarHr" />                  
                  <ul  className='sidebarFriendList'>  
                     {
                        Users?.map((u) => (
                           <CloseFriend key={u.id} user={u} />
                        ))
                     }
                  </ul>
               </div>                           
         </div>
        }
            </div> 
    )   
   }

export default Sidebar;