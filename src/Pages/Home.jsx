import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";


const Home = () => {
    return (
        <div  className="min-h-[60vh]">
            <Helmet><title>MediCamp</title></Helmet>
            <Banner/>
          
        </div>
    );
};

export default Home;


