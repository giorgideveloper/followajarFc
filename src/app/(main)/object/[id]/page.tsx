'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import location from '../icon/location.svg';
import clock from '../icon/clock.svg';
import phone from '../icon/phone.svg';
import email from '../icon/email.svg';
import folder from '../icon/folder.svg';
import user from '../icon/user.svg';
import fb from '../icon/fb.svg';
import inst from '../icon/inst.svg';
import { Banner_caps } from '../fonts/fonts';
import { objIdType } from './ObjId.Interface';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const API_URL = 'https://follow.geoevents.ge/api';

export default function Page({ params }: { params: { id: string } }) {
	const [post, setPost] = useState<objIdType[]>([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(`${API_URL}/object/${params.id}`);
				setPost(response.data);
			} catch (err) {
				console.log('🚀 ~ file: page.tsx:30 ~ fetchPost ~ err:', err);
			}
		};
		if (params.id) {
			fetchPost();
		}
	}, [params.id]);

	return (
		<>
			<div className='container mx-auto my-4 px-7'>
				<div className='  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2'>
					{post ? (
						<>
							<div className='card card-compact col-span-3'>
								<div className={`card-body ${Banner_caps.className}`}>
									<div className='avatar'>
										<div className='w-full h-80 post-card rounded-t-lg border-b-4 border-[#D98200] relative'>
											<div className='top-left-main absolute  '>
												<div className='top-left-bg'>
													<span>
														{(post.discount >= 100 && <span>Free</span>) || (
															<span>{post.discount} %</span>
														)}
													</span>
												</div>
											</div>
											<div className='w-full'>
												<Swiper
													modules={[Navigation, Pagination, Scrollbar, A11y]}
													spaceBetween={50}
													slidesPerView={1}
													navigation
													pagination={{ clickable: true }}
													scrollbar={{ draggable: true }}
													onSlideChange={() => console.log('slide change')}
												>
													{post?.images?.map(img => (
														<SwiperSlide key={img.id}>
															{' '}
															<Image
																className='w-full'
																loading='lazy'
																src={
																	img.image ||
																	'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
																}
																alt={`${post.name}`}
																width={400}
																height={500}
															/>
														</SwiperSlide>
													))}
													...
												</Swiper>
												{/* <div className='swiper' modules={[Navigation]}>
													<div className='swiper-wrapper'>
														{post?.images &&
															post?.images?.map(img => (
																// eslint-disable-next-line react/jsx-key
																<div className='swiper-slide' key={img.id}>
																	<Image
																		className='w-full'
																		loading='lazy'
																		src={
																			img.image ||
																			'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
																		}
																		alt={`${post.name}`}
																		width={400}
																		height={500}
																	/>
																</div>
															))}
													</div>

													<div className='swiper-pagination'></div>

													<div className='swiper-button-prev'></div>
													<div className='swiper-button-next'></div>

													<div className='swiper-scrollbar'></div>
												</div> */}
											</div>
										</div>
									</div>
									<div className='card-content '>
										<div className='card-title '>
											<h1 className={`text-3xl Banner_caps pt-3 pl-2 `}></h1>
										</div>

										<div className='card-description'>
											<p className='font-banner-caps text-gray-500 pl-2 text-lg'>
												{post.description}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='my-4'>
								<div className='card-info w-full'>
									<ul className='ul-post w-full'>
										<li className='li-post'>
											<Image className='w-4' src={user} alt='' />

											<span className='pl-2 '>{post.object_name}</span>
										</li>

										<li className='li-post'>
											<Image className='w-4' src={location} alt='' />

											<span className='pl-2 '>{post.address}</span>
										</li>
										<li className='li-post'>
											<Image className='w-5 ' src={clock} alt='' />

											<span className='pl-2'>
												{`${post.time_from?.slice(0, 5)}-${post.time_to?.slice(
													0,
													5
												)}`}
											</span>
										</li>
										<li className='li-post'>
											<Image className='w-4' src={phone} alt='' />

											<span className='pl-2 '>{post.mobile}</span>
										</li>
										<li className='li-post'>
											<Image className='w-4' src={email} alt='' />

											<span className='pl-2 '>{post.email}</span>
										</li>
										<li className='li-post'>
											<Image className='w-4' src={folder} alt='' />

											<span className='pl-2 '>
												{post?.object_type?.name === undefined
													? 'loading'
													: post?.object_type?.name}
											</span>
										</li>
										<li className='li-post cursor-pointer'>
											<a className='pr-4' href={`${post.facebook}`}>
												{' '}
												<Image className='w-4' src={fb} alt='' />
											</a>
											<a href={`${post.instagram}`}>
												{' '}
												<Image className='w-4' src={inst} alt='' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</>
					) : (
						'loading'
					)}
				</div>
			</div>
		</>
	);
}
