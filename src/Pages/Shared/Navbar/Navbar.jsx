import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const NavLinks = <>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;