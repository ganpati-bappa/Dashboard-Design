import { useEffect, useState } from "react"

// Component
import { SkillBox } from "./SkillBox";

// SCSS
import '../SCSS/TopSkills.scss'

export const TopSkills = () => {

    // Users Array
    const [users, setUsers] = useState([])

    // For Loading Transitions
    const [Loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        handleFetchInformation();

    },[setUsers])

    const handleFetchInformation = async () => {

        try {
            const res = await fetch('https://dummyapi.io/data/v1/user?limit=15',{
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "app-id" : "61b430877160cc27de8194d8"
                }
            })

            const data = await res.json()
            setUsers(data.data)
        } 
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className = "Top_Skills_container">
            <div className = "Top_Skills_heading">Top Friends</div>
            <div>
                {Loading ? (
                    <div  className = "Top_skills_friends">
                            <div className = "Top_skills_loader"></div>
                    </div>) : (                    
                    <ul className = "Individual_Skills"> 
                        {users.map(user => {
                        return (   
                            <li>
                                <SkillBox user = {user}></SkillBox>
                            </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default TopSkills