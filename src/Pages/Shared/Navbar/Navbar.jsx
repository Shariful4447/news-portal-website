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
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;