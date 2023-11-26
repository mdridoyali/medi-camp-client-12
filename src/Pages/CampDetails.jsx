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

    const handleJoinCamp = () => {

    }




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
                            <Button variant="contained" color="primary" onClick={() => handleJoinCamp(camp)}>
                                Join Camp
                            </Button>
                        </Link>
                    }

                </CardActions>
            </Card>

        </div>
    );
};

export default CampDetails;