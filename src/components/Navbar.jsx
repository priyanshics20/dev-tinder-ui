import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import LogoutService from '../services/Logout.Service'
import { removeUser } from '../utils/userSlice'
import toast from 'react-hot-toast'

const Navbar = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await LogoutService();
            dispatch(removeUser());
            navigate("/login")
            toast.success("Loggedout successfully");
        } catch (err) {
            toast.error(err.response.data);
        }
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            {user && <div className="flex gap-2 items-center">
                <div> Welcome, {user.firstName} </div>
                <div className="dropdown dropdown-end mx-5">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user.photoURL}
                            />
                        </div>
                    </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/connections">Connections</Link>
                            </li>
                            <li>
                                <Link to="/requests">Requests Recieved</Link>
                            </li>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
            </div>}
        </div>
    )
}

export default Navbar