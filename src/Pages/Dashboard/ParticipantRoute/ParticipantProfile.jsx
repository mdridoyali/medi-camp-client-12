import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";

const ParticipantProfile = () => {
    return (
        <div>
            <Helmet><title>MediCamp | Participant Profile</title></Helmet>
            <SectionHeading heading={'Your Profile'} ></SectionHeading>
        </div>
    );
};

export default ParticipantProfile;