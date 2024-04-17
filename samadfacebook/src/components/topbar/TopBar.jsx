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
    const navigate = useNavigate();
    const { user, isShow, friends, dispatch } = useContext(AuthContext);
    
}
