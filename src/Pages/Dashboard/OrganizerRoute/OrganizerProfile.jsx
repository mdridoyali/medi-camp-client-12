import SectionHeading from "../../../Components/sectionHeading";
import { Helmet } from 'react-helmet-async';


const OrganizerProfile = () => {
    return (
        <div className="mb-14">
            <Helmet>
                <title>MediCamp | Organizer Profile</title>
            </Helmet>
            <SectionHeading heading={'Organizer profile'} ></SectionHeading>
        </div>
    );
};

export default OrganizerProfile;