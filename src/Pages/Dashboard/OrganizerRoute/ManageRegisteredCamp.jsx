import SectionHeading from "../../../Components/sectionHeading";
import { Helmet } from 'react-helmet-async';


const ManageRegisteredCamp = () => {
    return (
        <div className="mb-14">
              <Helmet>
                <title>MediCamp | Manage Register Camps</title>
            </Helmet>
            <SectionHeading heading={'Manage Register Camps'} />
        </div>
    );
};

export default ManageRegisteredCamp;