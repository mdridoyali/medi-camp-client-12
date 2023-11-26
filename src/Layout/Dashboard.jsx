
import { FaBars, } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import OrganizerPage from '../Components/OrganizerPage';
import ParticipantPage from '../Components/ParticipantPage';
import useUser from '../Hooks/useUser';

const Dashboard = () => {
    const [userRole] = useUser()
    console.log(userRole?.role)

    return (
        <div className=' ' >
            {/* side bar */}
            <div className=''>
                <div className="drawer md:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-sm mt-5 ml-5 h-11 mb-3 rounded-full text-xl drawer-button md:hidden"><FaBars /></label>
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        {
                            userRole?.role === 'organizer' && <OrganizerPage />
                        }
                        {
                            userRole?.role === 'participant' && <ParticipantPage />
                        }

                    </div>
                </div>
            </div>
            {/* main content */}

        </div>
    );
};

export default Dashboard;