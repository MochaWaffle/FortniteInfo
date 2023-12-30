import { Link, useMatch, useResolvedPath } from "react-router-dom"
import 'boxicons';

export default function Navbar() {
  return (
    // <nav className="nav">
    //   <Link to="/" className="site-title">
    //     FortniteInfo
    //   </Link>
    //   <ul>
    //     <CustomLink to="/map" className="linkStyle">Map</CustomLink>
    //     <CustomLink to="/news" className="linkStyle">News</CustomLink>
    //     <CustomLink to="/shop" className="linkStyle">Shop</CustomLink>
    //     <CustomLink to="/creatorcode" className="linkStyle">Creator Code</CustomLink>
    //   </ul>
    // </nav>
    <>
      <header className="header">
        <Link to="/" className="logo">FortniteInfo</Link>

        <input type="checkbox" id="check" />
        <label for="check" className="icons" >
          <box-icon name='menu' id="menu-icon" color="white" size="2.8rem"></box-icon>
          <box-icon name='x' id="close-icon" color="white" size="2.8rem"></box-icon>
        </label>
        <nav className="navbar">
          {/* <CustomLink to="/map">Map</CustomLink>
          <CustomLink to="/news">News</CustomLink>
          <CustomLink to="/shop">Shop</CustomLink>
          <CustomLink to="/creatorcode">Creater Code</CustomLink> */}
          <Link to="/map" style={{'--i': 0}}>Map </Link>
          <Link to="/news" style={{'--i': 1}}>News </Link>
          <Link to="/shop" style={{'--i': 2}}>Shop </Link>
          <Link to="/creatorcode" style={{'--i': 3}}>Creator Code</Link>
        </nav>
      </header>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}