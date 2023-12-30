import { Link, useMatch, useResolvedPath } from "react-router-dom"
import 'boxicons';

export default function Navbar() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">FortniteInfo</Link>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons" >
          <box-icon name='menu' id="menu-icon" color="white" size="2.8rem"></box-icon>
          <box-icon name='x' id="close-icon" color="white" size="2.8rem"></box-icon>
        </label>
        <nav className="navbar">
          <Link to="/map" style={{'--i': 0}}>Map </Link>
          <Link to="/news" style={{'--i': 1}}>News </Link>
          <Link to="/shop" style={{'--i': 2}}>Shop </Link>
          <Link to="/creatorcode" style={{'--i': 3}}>Creator Code</Link>
        </nav>
      </header>
    </>
  )
}