import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';


const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loading} = useAuth() 
    // console.log(user)
    const {data: userRole,} = useQuery({
        queryKey: [user?.email, 'user'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/${user.email}`);
            return res.data
        }
    })
    // console.log(data.role)
    return [userRole]
};

export default useUser;

