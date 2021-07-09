// Header
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Header(){

  return(
    <div className="header">
      <nav className="test1">
        <Link to="/" className="idk"><h1 className="header_font">Ask Reddit Reader</h1></Link>
        <Link to="/singel">singel</Link>
        <Link to="/top">top</Link>

      </nav>




      {/* <nav>
        <Link to="">
          <h1 className="header_font">Ask Reddit Reader</h1>
        </Link>
        <div className="nav_holder">
          <div className="nav">
            <div className="nav_item">
              <Link to="/singel">singel</Link>
            </div>

            <div className="nav_item">
              <Link to="/top">top</Link>
            </div>
          </div>
        </div>
        
      </nav> */}
    </div>
  )
}
export {Header}