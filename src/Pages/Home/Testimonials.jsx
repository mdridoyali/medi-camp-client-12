

import { Container, Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SectionHeading from '../../Components/sectionHeading';


const Testimonials = () => {
    const axiosPublic = useAxiosPublic()


    const { data: testimonialsData = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosPublic.get('feedback')
            return res.data
        }
    })

    const data = testimonialsData.filter(item => item.rating)
    console.log(data);

    return (

        <>

            <Container maxWidth='lg'>
                <SectionHeading heading={'Feedback & Rating'} ></SectionHeading>
                <Box sx={{ mt: 2, mb: 10 }}>

                    <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                        {
                            data?.map(data => <SwiperSlide key={data._id}>


                                <div className='flex gap-10  justify-center items-center '>
                                    <div className='text-center'>
                                        <img src={data.reviewerImg} alt="" className='rounded-full mx-auto w-28 h-28 ' />
                                        <h1 className='font-bold text-lg'>{data?.reviewerName}</h1>
                                    </div>

                                    <div className='text-center'>
                                        <p className=' text-2xl font-semibold'>{data?.campName}</p>
                                        <div className='text-center mx-auto flex justify-center'>
                                            <Rating
                                                style={{ maxWidth: 120 }}
                                                value={data?.rating}
                                                readOnly
                                            />
                                        </div>
                                        <h1 className=''>{data?.reviewTime}</h1>
                                        <h1 className=''>{data?.reviewDetails}</h1>
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