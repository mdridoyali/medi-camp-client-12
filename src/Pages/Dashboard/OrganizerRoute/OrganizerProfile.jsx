import SectionHeading from "../../../Components/sectionHeading";
import { Helmet } from 'react-helmet-async';
import useAuth from "../../../Hooks/useAuth";


const OrganizerProfile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div className="mb-14">
            <Helmet>
                <title>MediCamp | Organizer Profile</title>
            </Helmet>
            <SectionHeading heading={'Organizer profile'} ></SectionHeading>
            <div className="grid mt-5 lg:grid-cols-3  mx-auto text-center">
                <div>c</div>
                <div className="mx-auto-  text-center">
                    <img className="mx-auto rounded-full" src={user?.photoURL} />
                    <p className="p-3" ></p>
                    <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <p className="p-3"  >User Id: {user?.uid}</p>
                </div>
                <div>c</div>
            </div>
        </div>
    );
};

export default OrganizerProfile;