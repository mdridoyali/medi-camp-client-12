
import { FaBars, } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import OrganizerPage from '../Components/OrganizerPage';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Hooks/useAuth';
import ParticipantPage from '../Components/ParticipantPage';

const Dashboard = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loader} = useAuth() 
    console.log(user)
    const {data = [],} = useQuery({
        queryKey: [user?.email, 'user'],
        enabled: !loader,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/${user.email}`);
            return res.data
        }
    })
    console.log(data.role)
    // const userRoll = data.map((item )=> item.roll)

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
                         data.role === 'organizer' && <OrganizerPage />
                       }
                       {
                         data.role === 'participant' && <ParticipantPage />
                       }
                       
                    </div>
                </div>
            </div>
            {/* main content */}

        </div>
    );
};

export default Dashboard;