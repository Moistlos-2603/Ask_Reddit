import './App.css';
import {TopPosts} from "./top_posts/top_posts"
import {Header} from "./Components/header"
function App() {




  return (
    <div>
      <Header></Header>


      <TopPosts sub="tailsfromtechsupport" limet="5" time_filter="day" />
    </div>

    
  );
}

export default App;
