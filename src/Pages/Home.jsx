import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Testimonials from "./Home/Testimonials";
import PopularCamp from "./Home/PopularCamp";


const Home = () => {
    return (
        <div className="min-h-[60vh]">
            <Helmet><title>MediCamp</title></Helmet>
            <Banner />
            <PopularCamp />
            <Testimonials/>

        </div>
    );
};

export default Home;


