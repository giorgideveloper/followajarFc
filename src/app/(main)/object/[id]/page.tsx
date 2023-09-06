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
	const [lodaing, setLoading] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(`${API_URL}/object/${params.id}`);
				setPost(response.data);
				setLoading(true);
			} catch (err) {
				console.log('🚀 ~ file: page.tsx:30 ~ fetchPost ~ err:', err);
			}
		};
		if (params.id) {
			fetchPost();
		}
	}, [params.id]);
	const Dangerously = (str: any) => {
		const markup = { __html: `${str}` };
		return markup;
	};

	return (
		<>
			<div className='container mx-auto my-4 px-7'>
				{lodaing ? (
					<div className='  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2'>
						{post ? (
							<>
								<div className='card card-compact col-span-3'>
									<div className={`card-body `}>
										<div className='avatar'>
											<div className='w-full h-80 post-card rounded-t-lg border-b-4 border-[#D98200] relative'>
												<div className='top-left-main  absolute  '>
													<div className='top-left-bg'>
														<span>
															{(post.discount >= 100 && <span>Free</span>) || (
																<span>{post.discount} %</span>
															)}
														</span>
													</div>
												</div>
												<div className='w-full '>
													<Swiper
														modules={[Navigation, Pagination, Scrollbar, A11y]}
														spaceBetween={50}
														slidesPerView={1}
														navigation
														pagination={{ clickable: true }}
														onSlideChange={() => console.log('slide change')}
													>
														{post?.images?.map(img => (
															<SwiperSlide key={img.id}>
																{' '}
																<Image
																	onLoad={e =>
																		console.log(e.target.naturalWidth)
																	}
																	className='w-full '
																	src={
																		img.image ||
																		'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
																	}
																	alt={`${post.object_name}`}
																	width={400}
																	height={500}
																/>
															</SwiperSlide>
														))}
														...
													</Swiper>
												</div>
											</div>
										</div>
										<div className='card-content '>
											<div className='card-title '>
												<h1 className={`text-3xl Banner_caps pt-3 pl-2 `}></h1>
											</div>

											<div className='card-description'>
												<p className='font-banner-caps text-gray-500 pl-2 text-lg'>
													{post.description === undefined ? (
														'loading'
													) : (
														<div
															dangerouslySetInnerHTML={Dangerously(
																post.description
															)}
														/>
													)}
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
													{`${post.time_from?.slice(
														0,
														5
													)}-${post.time_to?.slice(0, 5)}`}
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
												<a
													className='pr-4'
													target='blank'
													href={`${post.facebook}`}
												>
													{' '}
													<button
														type='button'
														data-te-ripple-init
														data-te-ripple-color='light'
														className='mb-2 inline-block rounded px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
														style={{ backgroundColor: '#1877f2' }}
													>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='h-4 w-4'
															fill='currentColor'
															viewBox='0 0 24 24'
														>
															<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
														</svg>
													</button>
												</a>
												<a target='blank' href={`${post.instagram}`}>
													{' '}
													<button
														type='button'
														data-te-ripple-init
														data-te-ripple-color='light'
														className='mb-2 inline-block rounded px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
														style={{ backgroundColor: '#c13584' }}
													>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															className='h-4 w-4'
															fill='currentColor'
															viewBox='0 0 24 24'
														>
															<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
														</svg>
													</button>
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
				) : (
					<>
						<div
							role='status'
							className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center pt-4'
						>
							<div
								className='flex items-center justify-center w-full h-80  bg-gray-300 rounded  dark:bg-gray-300'
								style={{ height: '400px' }}
							>
								<svg
									className='w-20 h-10 text-gray-200 dark:text-gray-400'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 18'
								>
									<path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
								</svg>
							</div>
							<div className='w-full'>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-8 max-w-[480px]'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px] mb-8'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[480px]'></div>
							</div>

							<span className='sr-only'>Loading...</span>
						</div>
						<div className='w-full pt-5'>
							<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
							<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
							<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 max-w-[720px] mb-4'></div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
