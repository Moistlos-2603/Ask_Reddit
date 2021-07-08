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
    <h1 className="header_font">Ask Reddit Reader</h1>
    <nav>
      <ul>
        <li>
          <Link to="/singel">singel</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </nav>

  </div>
)





}
export {Header}