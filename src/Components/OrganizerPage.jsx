import { FaHome, FaMinus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const OrganizerPage = () => {
    const {user} = useAuth()
    return (
        <div className="drawer-content">
            <ul className="menu px-4 w-72 min-h-screen space-y-5 bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <div className='flex justify-end'> <label htmlFor="my-drawer-2" aria-label="close sidebar" className=" btn btn-sm md:hidden rounded-full bg-base-100 w-11 h-11 text-xl drawer-overlay"><FaMinus /></label></div>
                <Link to={'/'}><img className='w-14 h-13' src={'https://i.ibb.co/FzwdnpL/Screenshot-1.jpg'} /></Link>
                <NavLink
                    to={"/dashboard/organizer-profile"}
                    className={({ isActive }) =>
                        isActive
                            ? "btn bg-lime-600 rounded-full text-white"
                            : "btn btn-ghost  btn-active rounded-full "
                    }
                >
                    Organizer Profile
                </NavLink>
                <NavLink
                    to={"/dashboard/add-a-camp"}
                    className={({ isActive }) =>
                        isActive
                            ? "btn bg-lime-600 rounded-full text-white"
                            : "btn btn-ghost  btn-active rounded-full "
                    }
                >
                    Add A Camp
                </NavLink>
                <NavLink
                    to={"/dashboard/manage-camps"}
                    className={({ isActive }) =>
                        isActive
                            ? "btn bg-lime-600 rounded-full text-white"
                            : "btn btn-ghost  btn-active rounded-full "
                    }
                >
                    Manage Camps
                </NavLink>
                <NavLink
                    to={"/dashboard/manage-registered-camps"}
                    className={({ isActive }) =>
                        isActive
                            ? "btn bg-lime-600 rounded-full text-white"
                            : "btn btn-ghost  btn-active rounded-full "
                    }
                >
                    Manage Register Camps
                </NavLink>
                
                <hr />
                <Link to={"/"}  className="btn btn-outline rounded-full flex items-center gap-5 justify-center text-xl "><FaHome /> <p >  Home </p></Link>
                <div className="flex gap-3 items-center text-base font-semibold">
                    <img src={user?.photoURL} className="rounded-full w-14" />
                    <div>
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </ul>

        </div>
    );
};

export default OrganizerPage;