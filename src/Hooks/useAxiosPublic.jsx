import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://daily-dine-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;