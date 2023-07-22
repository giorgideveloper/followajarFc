'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Navigation, Pagination } from 'swiper/modules';

const Reels = async () => {
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const supabase = createClientComponentClient()

    let { data: reels, error } = await supabase
        .from('reels')
        .select('*')
        .order('id', { ascending: false })

    return (
        <div className='my-20'>
            <h1 className="font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl p-1 ml-10 text-gray-900">კამპანიის ფარგლებში ბოლოს დამატებული პოსტები</h1>
            <div className="divider"></div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                // centeredSlides={true}
                spaceBetween={30}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {reels?.map((item, i) =>
                    <SwiperSlide key={i} className='gap-32' >
                        <div dangerouslySetInnerHTML={{ __html: item.html }}></div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Reels

