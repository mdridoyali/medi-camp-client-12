import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Testimonials from "./Home/Testimonials";
import PopularCamp from "./Home/PopularCamp";
import UpcomingCamps from "./Home/UpcomingCamps";


const Home = () => {
    return (
        <div className="min-h-[60vh]">
            <Helmet><title>MediCamp</title></Helmet>
            <Banner />
            <PopularCamp />
            <Testimonials/>
            <UpcomingCamps/>

        </div>
    );
};

export default Home;


