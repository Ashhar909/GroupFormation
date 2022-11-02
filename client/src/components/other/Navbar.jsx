import { Link  } from 'react-router-dom';
import SignedOutLinks from '../auth/SignedOutLinks';

function ColorSchemesExample() {
  return (
  <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius:"0px 0px 20px 20px", padding:"15px 100px"}}>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link active" to="/home">
                <h4>Home</h4>
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/group">
                <h4>Group</h4>
              </Link>
            </li>
          </ul>
        </div>

        <SignedOutLinks/>
      </nav>
      </div>
  );
}

export default ColorSchemesExample;
