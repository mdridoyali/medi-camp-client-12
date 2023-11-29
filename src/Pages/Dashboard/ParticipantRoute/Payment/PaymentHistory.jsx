import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../../Components/sectionHeading";
import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../../Hooks/useAuth";
// import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payment=[] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history/${user?.email}`)
            return res.data
        }
    })
    console.log(payment)
 
    return (
        <div>
             <Helmet><title>MediCamp | Payment History</title></Helmet>
            <SectionHeading heading={'Your Payment History'} ></SectionHeading>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Camp Name</th>
                            <th>Date & Time</th>
                            <th>Venue</th>
                            <th>Camp Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payment.map((item) => (
                            <tr key={item._id}>
                                <td>{item.campName}</td>
                                <td>{item.scheduleDate}</td>
                                <td>{item.location}</td>
                                <td>${item.totalPrice}</td>
                                <td>{item.paymentStatus}</td>
                                <td>{item.confirmationStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;