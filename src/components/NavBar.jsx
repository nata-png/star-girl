import "./Nav.css" 
import {Link} from'react-router-dom'
function Navbar(){
    return(
        <div className="App">
    <nav>
        <ul>
        <li>
        <Link to ="/">Home</Link>
        </li>
            <li>
                <Link to ="/about">about</Link>
            </li>
            <li><Link to ="/contact">contact</Link></li>
        </ul>
    </nav>
    </div>
    );
};
export default Navbar;