import "./navbar.scss"
import { AccountCircleOutlined, FavoriteBorderOutlined, ShoppingBagOutlined, SearchOutlined } from '@mui/icons-material'
import DropDownNav from "./DropdownNav/DropDownNav"
import { useState , useEffect} from "react"
import Profile from "./Profile/Profile"
import { Badge } from "@mui/material"
import { useSelector } from 'react-redux'
import { Link, useParams , useNavigate} from "react-router-dom"
import axios from "axios"


const Navbar = () => {

    const navigate = useNavigate()

    const [loggedUser, setLoggedUser] = useState({})

    const { userid } = useParams()
    

    
    const [dropDown, setDropDown] = useState(false)
    const [profile, setProfile] = useState(false)

    const initialBagCount = useSelector((state) => state.bagCount)

    useEffect(() => {
      const loggedUser = async ()=> {
        let getUserById = await axios.get(`http://localhost:5000/getUserById/${userid}`)
        let {data : {userInfo}} = getUserById
        setLoggedUser(userInfo)
      }

      loggedUser()
    }, [])
    

    // console.log(loggedUser);

    const home = ()=>{
        navigate(`/${userid}`)
    }

    

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light navbarBody" >
                <div className="container-fluid container ">
                    <a onClick={home} className="navbar-brand">Fashion.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div onm className="collapse navbar-collapse navContents" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onMouseOver={() => setDropDown(!dropDown)}>
                                <a className="nav-link active" aria-current="page" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Kids</a>
                            </li>
                        </ul>
                        <div className="input-group searchBox">
                            <input type="text" className="form-control" placeholder="Search for products,brands and more" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <div className="searchIcon">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="navIcons">
                            <div onClick={() => setProfile(!profile)} className="icons">
                                <AccountCircleOutlined />
                                <span>Profile</span>
                            </div>
                            <div className="icons">
                                <FavoriteBorderOutlined />
                                <span>Wishlist</span>
                            </div>
                            <Link style={{textDecoration:"none" , color:"inherit"}} to={`/home/cart/bag/${userid}`}>
                                <div  className="icons">
                                    <Badge badgeContent={initialBagCount} color="secondary">
                                        <ShoppingBagOutlined />
                                    </Badge>
                                    <span>Bag</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            {dropDown && <DropDownNav />}

            {profile && <Profile loggedUser={loggedUser} userid = {userid}/>}

        </div>
    )
}

export default Navbar


//                            

//                            

