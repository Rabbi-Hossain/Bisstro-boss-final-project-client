import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const [cart] = useCart()

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
<<<<<<< HEAD
        <li><Link to='/order/salad'>Food Order</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/'>
                <button className="btn">
                    <FaCartShopping />
                    <div className="badge badge-secondary ml-2">+{cart.length}</div>
                </button>
            </Link>
        </li>
        {user ? <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
        </>
            :
            <><li><Link to='/login'>Login</Link></li></>}

=======
      
>>>>>>> dc53488c086e08d8c3e17d695d81a052889e3da9
    </>

    return (

        <div className="navbar bg-black text-white max-w-screen-2xl fixed z-10 bg-opacity-30 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>

    );
};

export default NavBar;