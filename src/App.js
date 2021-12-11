// SCSS
import './SCSS/default.scss'
import './SCSS/App.scss'

// Components
import { Navbar } from './Components/Navbar.js'
import { Header } from './Components/header.js'
import { TopSkills } from './Components/Top_skills'
import { UserActivityChart } from './Components/UserActivityChart.js'
import { RecentPost } from './Components/RecentPosts.js'

export const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header> </Header>
      <div className = "App_main">  
        <div className = "App_main_top">          
          <TopSkills></TopSkills>
        </div>
        
        <div className = "App_user_info">

          <div className = "User_Graph">          
            <UserActivityChart></UserActivityChart>
          </div>

          <div className = "RecentPosts">
              <RecentPost></RecentPost>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
