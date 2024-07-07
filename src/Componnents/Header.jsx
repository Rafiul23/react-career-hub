import { NavLink } from "react-router-dom";
import logo from '../assets/logo/CareerHub.png'


const Header = () => {

    const links = <>
        <li className=" text-violet-600"><NavLink to='/' 
        className={({ isActive, isPending }) => {
            return isActive ? "font-bold underline" : isPending ? "pending" : "";
          }}
        >Home</NavLink></li>
        <li className="ml-5 text-violet-600"><NavLink to='/jobs'
        className={({ isActive, isPending }) => {
            return isActive ? "font-bold underline" : isPending ? "pending" : "";
          }}
        >Jobs</NavLink></li>
        <li className="ml-5 text-violet-600"><NavLink to='/appliedjobs'
        className={({ isActive, isPending }) => {
            return isActive ? "font-bold underline" : isPending ? "pending" : "";
          }}
        >Applied Jobs</NavLink></li>

        {/* <li className="ml-5 text-violet-600"><NavLink to='/blogs'
        className={({ isActive, isPending }) => {
            return isActive ? "font-bold underline" : isPending ? "pending" : "";
          }}
        >Blogs</NavLink></li>
        <li className="ml-5 text-violet-600"><NavLink to='/statistics'
        className={({ isActive, isPending }) => {
            return isActive ? "font-bold underline" : isPending ? "pending" : "";
          }}
        >Statistics</NavLink></li> */}
    </>

    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-primary">Start Apply</a>
                </div>
            </div>
        </div>
    );
};

export default Header;