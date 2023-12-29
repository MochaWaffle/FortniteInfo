import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        FortniteInfo
      </Link>
      <ul>
        <CustomLink to="/map" className="linkStyle">Map</CustomLink>
        <CustomLink to="/news" className="linkStyle">News</CustomLink>
        <CustomLink to="/shop" className="linkStyle">Shop</CustomLink>
        <CustomLink to="/creatorcode" className="linkStyle">Creator Code</CustomLink>
      </ul>
    </nav>
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