// SCSS
import './../SCSS/PostBox.scss'

// Icons
import { AiFillHeart } from 'react-icons/ai'

// To Generate Random Number
import faker from 'faker'

export const PostsBox = (props) => {

    const tags = props.post.tags

    const colors = ['red', 'yellow', 'green', 'blue', 'crimson']

    return (
        <div className = "PostsBox_container">
            <div className = "PostBox_image">
                <img src = {props.post.image} alt = "Internet Connection is required"></img>
            </div>

            <div className = "PostBox_description">
                <div className = "PostBox_heading">
                    {props.post.text}
                </div>

                <ul className = "PostBox_tags">
                    {tags.map(tag => {
                        return (
                            <li className = {`PostBox_tag ${colors[faker.datatype.number({min : 0 , max : 4})]}`} >
                                {tag}
                            </li>
                        )
                    })}
                </ul>

                <div className = "PostBox_likes">
                    <AiFillHeart/>
                    {props.post.likes}
                </div>
            </div>
        </div>
    )
}

export default PostsBox