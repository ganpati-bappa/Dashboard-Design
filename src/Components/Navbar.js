// For Routing between one tab to another
import { Link } from 'react-router-dom'

// SCSS
import './../SCSS/Navbar.scss'

// Icons
import { FaHome, FaDiceD6, FaLaptop, FaBook, FaSignOutAlt } from 'react-icons/fa'

export const Navbar = () => {

    return (
        <div className = "Navbar_container">
            
            <ul className = "Navbar_Links_container">

                <li className = "Navbar_links">
                    <Link to = './' className = "Navbar_links_icons" > <FaHome/> </Link>
                </li>

                <li className = "Navbar_links">
                    <Link to = './' className = "Navbar_links_icons" > <FaDiceD6/> </Link>
                </li>

                <li className = "Navbar_links">
                    <Link to = './' className = "Navbar_links_icons"> <FaLaptop/> </Link> 
                </li>

                <li className = "Navbar_links">
                    <Link to = './' className = "Navbar_links_icons"> <FaBook/> </Link>
                </li>                
                
                <li className = "Navbar_links">
                    <Link to = './' className = "Navbar_links_icons" > <FaSignOutAlt/> </Link>
                </li>                

            </ul>

        </div>
    )
}

export default Navbar