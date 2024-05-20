import { FaCalendar, FaCartShopping, FaHouse, FaList } from 'react-icons/fa6';
import { RiMenuSearchLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import {NavLink, Outlet} from 'react-router-dom'
import { useCart } from '../Hook/useCart';
export const Dashboard = () => {

    const [cart] = useCart()

  return (
    <div className='flex'>
        {/* dashboard side option */}
        <div className="w-64 min-h-screen bg-orange-500">
            <ul className='menu p-4'>
                <li><NavLink to="/dashboard/userHome"><FaHouse></FaHouse> userHome</NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My Cart ({cart?.length})</NavLink></li>
                <li><NavLink to="/dashboard/review"><MdOutlineReviews />Add Review</NavLink></li>
                <li><NavLink to="/dashboard/bookings"><FaList></FaList>My Bookings</NavLink></li>
                <div className='divider'></div>
                <li><NavLink to="/"><FaHouse></FaHouse>Home</NavLink></li>
                <li><NavLink to="/order/salad"><RiMenuSearchLine />Menu</NavLink></li>
            </ul>

        </div>
        {/* dashboard content */}
        <div className='flex-1 p-8'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
