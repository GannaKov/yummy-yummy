import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/restaurants">Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="">Log In</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
