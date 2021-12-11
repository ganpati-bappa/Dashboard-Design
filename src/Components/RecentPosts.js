// SCSS
import './../SCSS/RecentPosts.scss'

// React state hooks
import { useEffect, useState } from 'react'

// PostsBox
import PostsBox from './PostsBox'

// Icons 
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'


export const RecentPost = () => {

    // Recent Posts
    const [posts, setPosts] = useState([])

    // For Loading The Posts
    useEffect(() => {
        fetchRecentPosts()
    }, [setPosts])

    // Pages
    const [pages, setPages] = useState(0)

    // Increase Page
    const handleIncreasePage = async () => {
        setPages((pages+1)%3)
        await fetchRecentPosts()
    }

    // To Transition Between Loading States
    const [Loading , setLoading] = useState(false)

    // Decrease Page
    const handleDecreasePage = async () => {
        setPages((pages-1+3)%3)
        await fetchRecentPosts()
    }


    // Fetching Recent Posts
    const fetchRecentPosts = async () => {
        setLoading(true)

        try {
            const res = await fetch(`https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca/post?page=${pages}&limit=5`, {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "app-id" : "61b430877160cc27de8194d8"
                }
            })

            const data = await res.json()
            setPosts(data.data)
        }
         catch (err) {
             console.log(err)
         }
         finally {
             setLoading(false)
         }
    }


    return (
        <div className = "RecentPosts_container">

            <div className = "RecentPosts_heading">
                <div>Recent Posts</div>
                <div className = "RecentPosts_pages_handler">
                    <div className = "RecentPosts_buttons" onClick = {handleIncreasePage}>
                        <FaAngleUp/>
                    </div>
                    <span>{pages + 1}</span>
                    <div className = "RecentPosts_buttons" onClick = {handleDecreasePage}>
                        <FaAngleDown/>
                    </div>
                </div>

            </div>

            {Loading ? (<div className = "LoadingCenter">
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
                <div className = "wave"></div>
            </div>) : (
                <ul className = "RecentPosts_boxes">
                    {posts.map(post => {
                        return (
                            <li className = "RecentPost_individual_box">
                                <PostsBox post = {post}></PostsBox>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default RecentPost