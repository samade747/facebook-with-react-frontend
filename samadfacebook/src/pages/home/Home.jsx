import HomeIcon from '@mui/icons-material/Home';
import "./home.css";
import TopBar from '../../components/topbar/TopBar';
import Sidebar from 'antd/es/layout/Sider';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';


const Home = () => {
    
    return(
        <>
        <TopBar />   
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
        </>

      
    )

}

export default Home;