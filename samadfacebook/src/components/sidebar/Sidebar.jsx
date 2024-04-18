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
            <div>

         </div>
        }






       </div> 
    )

}

