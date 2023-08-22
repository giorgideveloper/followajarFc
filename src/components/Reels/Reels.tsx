'use client'

import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';

const Reels = ({ data }: any) => {
    return (
        <div className='my-20'>
            <h1 className="font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl p-1 ml-10 text-gray-900">კამპანიის ფარგლებში ბოლოს დამატებული პოსტები</h1>
            <div className="divider"></div>


            <Tabs
                className=""

                selectedTabClassName='tab-active'>
                <TabList>
                    <Tab className="tab tab-lg tab-lifted font-fira-go">Instagram</Tab>
                    <Tab className="tab tab-lg tab-lifted font-fira-go">Facebook</Tab>
                    <Tab className="tab tab-lg tab-lifted font-fira-go">Tiktok</Tab>
                </TabList>
                <TabPanel>
                    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                    <div className="elfsight-app-2bcd1b8a-7d77-4651-8775-3acc1d7ab645"></div>
                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>
                    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                    <div className="elfsight-app-7761cb95-401c-46e4-8ec7-6548960b1308"></div>
                </TabPanel>
            </Tabs>


            {/* <Swiper

                // onSwiper={setSwiperRef}
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
                        spaceBetween: 10,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((item: any, i: number) =>
                    <SwiperSlide key={i} className='w-full bg-transparent' >
                        {item.social !== 'ig' ?
                            <iframe
                                width={350}
                                className='w-full h-screen'
                                src={item.html}></iframe>
                            :
                            <div dangerouslySetInnerHTML={{ __html: item.html }}></div>
                        }
                    </SwiperSlide>
                )}
            </Swiper> */}
        </div>
    )
}

export default Reels

