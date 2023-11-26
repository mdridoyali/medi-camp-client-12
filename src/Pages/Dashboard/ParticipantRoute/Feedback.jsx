import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";


const Feedback = () => {
    return (
        <div>
             <Helmet><title>MediCamp | Feedback</title></Helmet>
            <SectionHeading heading={'Feedback And Rating'} ></SectionHeading>
        </div>
    );
};

export default Feedback;