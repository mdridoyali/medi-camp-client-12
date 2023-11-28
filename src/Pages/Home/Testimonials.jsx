// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { FaUtensils } from "react-icons/fa";
// // import { Navigation } from "swiper/modules";
// // import { Rating } from "@smastrom/react-rating";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import '@smastrom/react-rating/style.css'


// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";


// // import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// const Testimonials = () => {
//     const axiosPublic = useAxiosPublic()


//     const { data: testimonialsData = [] } = useQuery({
//         queryKey: ['registered-camp-testimonials'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('registered-camp-testimonials')
//             return res.data
//         }
//     })

//     const data = testimonialsData.filter(item => item.rating)
//     console.log(data);

//     return (
//         <div className="my-20">

//  <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//       </Swiper>

//         </div>
//     );
// };

// export default Testimonials;



import { Container, Grid, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';


const Testimonials = () => {
    const { user, loading } = useAuth()
    const axiosPublic = useAxiosPublic()


    const { data: testimonialsData = [] } = useQuery({
        queryKey: ['registered-camp-testimonials'],
        queryFn: async () => {
            const res = await axiosPublic.get('registered-camp-testimonials')
            return res.data
        }
    })

    const data = testimonialsData.filter(item => item.rating)
    console.log(data);

    return (

        <>

            <Container maxWidth='lg'>
                <Box sx={{ my: 10 }}>

                    <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                        {
                            data?.map(data => <SwiperSlide key={data._id}>


                                <div className=' md:flex gap-10  justify-center items-center '>
                                    <div className='text-center'>
                                        <img src={data.reviewerImg} alt="" className='rounded-full  w-28  ' />
                                        <h1 className='font-bold text-lg'>{data?.name}</h1>
                                    </div>

                                    <div className='text-center'>
                                        <p className=' text-2xl font-semibold'>{data?.campName}</p>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={data?.rating}
                                            readOnly
                                        />
                                        <h1 className=''>{data?.reviewDetails}</h1>
                                        <h1 className=''>{data?.reviewTime}</h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Box>
            </Container>
        </>
    );
};

export default Testimonials;