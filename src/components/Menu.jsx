// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      {/* <Link to='.'>Home</Link> */}

      {/* <NavLink to='.' end>
        Home
      </NavLink> */}

      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        to='.'
        end
      >
        Home
      </NavLink>
      <NavLink to='courses'>Courses</NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to='about'
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        to='contacts'
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
