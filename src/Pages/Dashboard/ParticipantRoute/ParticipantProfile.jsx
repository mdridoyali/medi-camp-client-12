import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";
import useAuth from "../../../Hooks/useAuth";

const ParticipantProfile = () => {
    const {user} = useAuth()

    return (
        <div>
            <Helmet><title>MediCamp | Participant Profile</title></Helmet>
            <SectionHeading heading={'Your Profile'} ></SectionHeading>
            <div className="grid mt-5 lg:grid-cols-3  mx-auto text-center">
                <div>c</div>
                <div className="mx-auto-  text-center">
                    <img className="mx-auto rounded-full w-28 h-28" src={user?.photoURL} />
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

export default ParticipantProfile;