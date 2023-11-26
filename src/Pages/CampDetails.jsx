import { Helmet } from "react-helmet-async";
import SectionHeading from "../Components/sectionHeading";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import Loading from "../Components/Loading";
import useUser from "../Hooks/useUser";

const CampDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic();
    const [userRole] = useUser()

    console.log(userRole?.role)


    const { data: camp = {}, isLoading } = useQuery({
        queryKey: ['camp-details', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/camp/${id}`)
            return res.data
        }
    })

    const { campName, campFees, location, specializedService, healthProfessional, audience, image, scheduleDate, description, _id } = camp


    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phoneNumber = e.target.phoneNumber.value;
        const age = e.target.age.value;
        const gender = e.target.gender.value;
        const address = e.target.address.value;
        const healthInfo = e.target.healthInfo.value;
        const formData = {
            name, age, gender, phoneNumber, address, healthInfo, campFees
        }
        console.log(formData)


    };





    if (isLoading) return <Loading />




    return (
        <div className="w-11/12 mb-16 md:w-9/12 mx-auto">
            <Helmet><title>MediCamp | CampDetails</title></Helmet>
            <SectionHeading heading={'Camp Details'} ></SectionHeading>

            <Card sx={{}}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" sx={{ textTransform: "uppercase" }} >{campName} </Typography>
                    <Typography variant="body1"  >Audience: {audience} </Typography>
                    <Typography variant="body1"  >Health Professional: {healthProfessional} </Typography>
                    <Typography variant="body1"  >Specialized Service: {specializedService} </Typography>
                    <Typography variant="body1"  >Location: {location} </Typography>
                    <Typography variant="body1"  >Schedule Date: {scheduleDate} </Typography>
                    <Typography variant="body1"  >Camp Fees: ${campFees} </Typography>
                    <Divider sx={{ width: 300, marginTop: 2 }} />
                    <Typography sx={{ marginTop: 2 }} variant="body1"  >Description: {description} </Typography>

                </CardContent>
                <CardActions>
                    {
                        userRole?.role === 'participant' &&
                        <Link to={`/camp-details/${_id}`}>
                            <Button variant="contained" color="primary" onClick={() => document.getElementById('my_modal_5').showModal()} >
                                Join Camp
                            </Button>
                        </Link>
                    }
                </CardActions>
            </Card>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold mb-3 text-lg">Fill Up The Join Camp Form!</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            name="name"
                            className="border px-1 py-2 rounded w-full"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            name="phoneNumber"
                            className="border px-1 py-2 rounded w-full"
                            type="number"
                            placeholder="Phone Number"
                        />
                        <div className="flex gap-4">
                            <input
                                name="age"
                                className="border px-1 py-2 flex-1 rounded w-full"
                                type="number"
                                placeholder="Age"
                            />
                            <select
                                name="gender"
                                className="border px-1 py-2 flex-1 rounded w-full"
                            >
                                <option disabled>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Custom</option>
                            </select>
                        </div>
                        <div className="flex gap-4">
                            <input
                                name="address"
                                className="border px-1 py-2 rounded w-full"
                                type="text"
                                placeholder="Address"
                            />
                            <input
                                disabled
                                className="border px-1 py-2 rounded w-full"
                                type="text"
                                defaultValue={campFees}
                            />
                        </div>
                        <textarea
                            name="healthInfo"
                            placeholder="Write Here Your Health Related Information"
                            className="border px-1 py-2 rounded w-full"
                        ></textarea>

                        <div className="flex justify-between mt-7">
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                            <button type="button" className="btn btn-outline">
                                Cancel
                            </button>
                        </div>
                    </form>

                </div>
            </dialog>

        </div>
    );
};

export default CampDetails;