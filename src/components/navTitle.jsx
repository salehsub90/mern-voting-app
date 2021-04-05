const NavTitle = ({ title }) => {
  return ( 
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        {title}
      </span>
    </nav>
  );
}
 
export default NavTitle;