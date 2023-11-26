import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";

const PaymentHistory = () => {
    return (
        <div>
             <Helmet><title>MediCamp | Payment History</title></Helmet>
            <SectionHeading heading={'Your Payment History'} ></SectionHeading>
        </div>
    );
};

export default PaymentHistory;