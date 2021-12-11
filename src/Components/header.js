// SCSS
import '../SCSS/Header.scss'

// Icons
import { FaSearch } from 'react-icons/fa'

// User Default Dp
import ProfilePhoto from '../avatar.png'

export const Header = () => {
    return (
        <div className = "Header_container">

            <div className = "Header_heading">
                Dashboard
            </div>

            <div className = "Header_search_bar">

                <div className = "Header_search_icon"><FaSearch/></div>

                <input 
                    type = 'text' 
                    placeholder = 'Search user'
                    className = "Searchbar_container">
                </input>

            </div>

            <div className = "Header_user_info">
                <img src = {ProfilePhoto} alt = "User"></img>
            </div>

        </div>
    )
}

export default Header