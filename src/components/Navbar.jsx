import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        FortniteInfo
      </Link>
      <ul>
        <CustomLink to="/map">Map</CustomLink>
        <CustomLink to="/news">News</CustomLink>
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/stats">Stats</CustomLink>
        <CustomLink to="/creatercode">Creater Code</CustomLink>
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