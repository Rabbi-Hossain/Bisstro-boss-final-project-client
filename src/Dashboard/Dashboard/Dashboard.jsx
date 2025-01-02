import { FaListAlt, FaSearch } from "react-icons/fa";
import { GiCalendar, GiHomeGarage, GiShoppingCart } from "react-icons/gi";
import { MdGeneratingTokens } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/userHome"> <GiHomeGarage className="text-2xl"></GiHomeGarage> User Home</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/reservation"> <GiCalendar className="text-2xl"></GiCalendar> Reservation</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/review"> <MdGeneratingTokens className="text-2xl" />Add a Review</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/bookings"><FaListAlt className="text-2xl" /> My Bookings</NavLink>
                    </li>
                    <li><NavLink to="/dashboard/cart"> <GiShoppingCart className="text-2xl"></GiShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li><NavLink to="/"> <GiHomeGarage className="text-2xl"></GiHomeGarage> Home</NavLink>
                    </li>
                    <li><NavLink to="/order/salad"> <FaSearch className="text-2xl"></FaSearch> Menu</NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;