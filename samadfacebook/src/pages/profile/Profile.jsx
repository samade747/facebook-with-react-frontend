import './profile.css';
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/rightbar/Rightbar';
import Rightbar from '../../components/rightbar/Rightbar';
import CoverPic from '../../components/coverPic/CoverPic';
import ProfilePic from '../../components/profilePic/ProfilePic';
import UserIcon from '../../components/userIcon/UserIcon';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Edition from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../../context/AuthContext';
import useUploadImage from '../../hooks/useUploadImage';


//  Functional component definition
export default function Profile({ userInfo }) {
    // Destructuring currentUser and dispatch from AuthContext
    const { user: currentUser, dispatch } = useContext(AuthContext);
    console.log("dispatch", dispatch);
    const navigate = useNavigate(); // getting navigation function form useNavigation
    const [open, setOpen] = useState(false); // State For Modal Open/close
    const handleOpen = () => setOpen(true); // function to handle modal open
    const handleClose = () => setOpen(false); // function to handle modal close
    const [profile, setProfile] = useState(null); // state for profile pic
    const [cover, setCover] = useState(null); // state for cover pic
    const [loading, setLoading] = useState(false); // state for loading
    const [loading2, setLoading2] = useState(false); // state for loading
    const descRef = useRef(); // state for description input field
    const userNameef = useRef(); // state for username input field
    const emailRef = useRef(); // state for email input field
    const cityRef = useRef(); // state for city input field
    const fromRef = useRef(); // state for from input field
    const relationshipRef = useRef(); // state for relationship input field

    const [user, setUser] = useState({}); // state for user data 
    const username = useParams().username; // getting username from url



    






}

