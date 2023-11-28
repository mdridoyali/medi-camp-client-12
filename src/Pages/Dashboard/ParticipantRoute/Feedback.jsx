import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../Components/sectionHeading";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@mui/material";


const Feedback = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payment = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history/${user?.email}`)
            return res.data
        }
    })

    const handleReview = () => {

    }


    return (
        <div>
            <Helmet><title>MediCamp | Feedback</title></Helmet>
            <SectionHeading heading={'Feedback And Rating'} ></SectionHeading>
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
                            <th>Action</th>
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
                                <td>
                                    <button className="btn btn-sm bg-lime-600 text-white" onClick={() => document.getElementById('my_modal_5').showModal()} >
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold mb-3 text-lg">Write Your Feedback Here for This Camp!</h3>
                        <form onSubmit={handleReview} className="space-y-4">

                            <textarea
                                name="reviewDetails"
                                placeholder="Write Here Your Health Related Information"
                                className="border px-1 py-2 rounded w-full"
                            ></textarea>

                            <div className="flex justify-between mt-7">
                                {/* <form method="dialog"> */}
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                            </div>
                        </form>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default Feedback;