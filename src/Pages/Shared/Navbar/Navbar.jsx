import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/Authproviders";


const Navbar = () => {
    const { user,logOut  } = useContext(AuthContext);

    const handleSignOut =()=>{
        logOut()
            .then()
            .catch()
    }
    const NavLinks = <>
                    <li> <NavLink to="/">Home</NavLink> </li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/career">Career</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
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

                  
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                    {
                        user ? 
                        <button onClick={handleSignOut} className="btn">SignOut </button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;