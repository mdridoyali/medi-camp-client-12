import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";

const RegisteredCamp = () => {
    return (
        <div>
            <Helmet><title>MediCamp | Registered Camp</title></Helmet>
            <SectionHeading heading={'Registered Camp'} ></SectionHeading>
        </div>
    );
};

export default RegisteredCamp;