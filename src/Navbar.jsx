import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";
import { removeuser } from "./utils/userlice";
import axios from "axios"; 

const Navbar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout", {}, { withCredentials: true }); 
            dispatch(removeuser());
           return navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
           
        }
    };

    return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
                </div>

                {user && (
                    <div className="flex gap-2 items-center">
                        <p className="py-2">Welcome, {user.firstName}</p>
                        <div className="dropdown dropdown-end mx-5">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="user photoUrl"
                                        src={user.photoUrl}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    <button onClick={handleLogout} className="w-full text-left">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
