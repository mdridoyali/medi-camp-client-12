import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Banner = () => {
  return (

      <div className="relative">
        <img
          className="md:h-[550px]  w-full"
          src="https://img.freepik.com/free-vector/gradient-healthcare-establishment-facebook-cover-template_23-2149669138.jpg?size=626&ext=jpg&uid=R119605278&ga=GA1.1.132439167.1700879951&semt=ais"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
        <div className="absolute top-[10%] px-6 text-2xl md:text-5xl lg:text-7xl font-bold text-slate-100">
          <h1 className=" text-4xl md:text-8xl text-white">
            Medi Camp
          </h1>
          <br />
          <p className="text-white">Explore our all blogs</p> <br />
          <Link to={"/allBlogs"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.4 }} 
              className="md:text-2xl  rounded-full font-bold btn border-none">
              Explore More
            </motion.button>
          </Link>
        </div>
      </div>
 
  );
};

export default Banner;
