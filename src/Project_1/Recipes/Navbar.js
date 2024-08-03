import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../../logo.svg"
const NavBar=()=>{
    const linkStyle = {
        textDecoration: "none",
        color:"white",
        margin:"3vw",
        fontSize:"15px"
      
      };
    
      const listStyle = {
        margin: 10,
      };
   return(
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark" >
    <div className="container-fluid" style={{display:"flex",flexDirection:"row",gap:"20vw"}}>
    <NavLink to={"/"}><img src={logo} alt="logo" width={100}></img></NavLink>
      <ul className="navbar-nav">
        <li className="nav-item" style={listStyle}>
          <NavLink to={"/Recipes"} style={linkStyle}>
            Recipes
          </NavLink>
        </li>
        <li className="nav-item" style={listStyle}>
          {/* <a className="nav-link" href="#">
            Settings
          </a> */}
          <NavLink to={"/TodoList"} style={linkStyle}>
            Task Manager
          </NavLink>
        </li>
        {/* <li className="nav-item" style={listStyle}>
         
          <Link to={"/"} style={linkStyle}>
            Login
          </Link>
        </li> */}
        <li className="nav-item" style={listStyle}>
          <NavLink to={"/Logout"} style={linkStyle}>
           Logout <RiLogoutBoxRLine />

          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
   )
}
export default NavBar