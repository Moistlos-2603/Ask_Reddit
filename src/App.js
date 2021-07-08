import './App.css';
import {TopPosts} from "./top_posts/top_posts"
import {Header} from "./Components/header"
import {SingelPostMitLink} from "./singl_post_mit_link/singel_post_mit_link"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          
          <Switch>
            <Route path="/top">
              <TopPosts sub="HFY" limet="5" time_filter="all" />
            </Route>
            <Route path="/singel">
              <SingelPostMitLink></SingelPostMitLink>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>

    
  );
}

export default App;
// https://www.reddit.com/r/HFY/comments/ikjpar/the_humans_do_not_have_three_brains_part_8/












