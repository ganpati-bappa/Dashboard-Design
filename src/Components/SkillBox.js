// SCSS
import './../SCSS/SkillBox.scss'

export const SkillBox = (props) => {
    return (
        <div className = "SkillBox_container">
            <div className = "SkillBox_profile_pic">
                <img src = {props.user.picture} alt = 'Internet Connection requirred'></img>
            </div>
        
            <div className = "SkillBox_users_name">
                <span>{props.user.title}</span>
                <span> {props.user.firstName}</span>
            </div>
        </div>
    )
}

export default SkillBox
