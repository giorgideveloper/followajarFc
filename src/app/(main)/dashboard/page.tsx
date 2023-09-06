'use client';
// pages/dashboard.tsx
import location from '../object/icon/location.svg';
import clock from '../object/icon/clock.svg';
import { useState, useEffect } from 'react';
import { refreshAccessToken } from '@/components/Auth/utils/api';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { dashboardApi } from '../api/api';
import { Banner_caps } from '../object/fonts/fonts';
import logOut from './icon/log-outs.gif';
import { Item } from './Dashboard.interface';

const Page = () => {
	const router = useRouter();

	const [userData, setUserData] = useState<Item[]>([]);

	useEffect(() => {
		async function fetchUserData() {
			try {
				const response = await dashboardApi();
				setUserData(response);
			} catch (error: any) {
				if (error.response && error.response.status === 401) {
					try {
						await refreshAccessToken();
						fetchUserData();
					} catch (refreshError) {
						// Handle refresh token error
						// Redirect to login or show an error message
					}
				}
			}
		}

		fetchUserData();
	}, []);

	const clearLocal = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('userId');
		router.replace('/');
	};
	if (userData) {
	}

	return (
		<div>
			{/* Display user-specific content */}

			<div>
				<div className='container-2xl mx-auto '>
					{userData ? (
						<div
							className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4${Banner_caps.className} `}
						>
							<div className=' portfolio'>
								<div className='avatar pt-5 align-middle flex justify-center'>
									<div className='relative flex text-center items-center justify-center w-20 h-20 overflow-hidden text-3xl bg-gray-100 rounded-full dark:bg-gray-600'>
										<span className='font-medium text-gray-600 dark:text-gray-300'>
											{userData.name === undefined || userData.name === null
												? ''
												: `${userData.name.slice(0, 1)} 
												 ${userData.last_name.slice(0, 1)}`}
										</span>
									</div>
								</div>

								<h2 className='text-white text-center	font-bold text-lg pt-4'>
									{userData.object_name}
								</h2>

								<div className='detail clearfix pt-10 text-slate-400'>
									<ul className='mb-0'>
										<li>
											<span>
												{/* <i className='fa fa-map-marker'></i>  */}
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
													/>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
													/>
												</svg>

												{userData.address}
											</span>
										</li>
										<li>
											<span className='active'>
												{/* <i className='fa fa-user'></i> */}

												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
													/>
												</svg>

												{userData.email}
											</span>
										</li>
										<li>
											<span>
												{/* <i className='fa fa-list' aria-hidden='true'></i> */}
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
													/>
												</svg>

												{userData.mobile}
											</span>
										</li>
										<li>
											<span>
												{/* <i className='fa fa-heart' aria-hidden='true'></i> */}
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-6 h-6'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>

												{userData.time_from === undefined ||
												userData.time_from === null
													? ''
													: `${userData.time_from.slice(
															0,
															5
													  )} - ${userData.time_to.slice(0, 5)}`}
											</span>
										</li>
										<li>
											<Link href={`/editobject`}>
												<span className='cursor-pointer'>
													{/* <i className='fa fa-list' aria-hidden='true'></i> */}
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														className='w-6 h-6'
													>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
														/>
													</svg>
													რედაქტირება
												</span>
											</Link>
										</li>
										<li className='flex text-left'>
											<span
												className='cursor-pointer log-out '
												onClick={clearLocal}
											>
												<Image
													className='w-full log-out-img pr-2 '
													src={logOut}
													alt='log-out'
													width={50}
													height={50}
												/>
												გამოსვლა
											</span>
										</li>
									</ul>
								</div>
							</div>
							<Link href={`/object/${userData.id}`}>
								<div
									className='card card-compact  cursor-pointer '
									key={userData.id}
								>
									<div className={`card-body `}>
										<div className='avatar'>
											<div className='w-full h-80 rounded-t-lg border-b-4 border-[#D98200] relative'>
												<div className='top-left absolute  '>
													<div className='top-left-bg'>
														<span>
															{(userData.discount >= 100 && (
																<span>Free</span>
															)) || <span>{userData.discount} %</span>}
														</span>
													</div>
												</div>
												<div className='bottom-left absolute'>
													{userData?.object_type?.name}
												</div>
												<Image
													className='w-full'
													loading='lazy'
													src={
														userData?.images?.[0]?.image ||
														'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
													}
													alt={userData?.name || 'Image'}
													width={400}
													height={500}
												/>
											</div>
										</div>
										<div className='card-content '>
											<div className='card-title '>
												<h1 className={`text-3xl Banner_caps pt-3 pl-2 `}>
													{userData.object_name}
												</h1>
											</div>

											<div className='card-info'>
												<ul className='ul'>
													<li className='li'>
														<Image className='w-4' src={location} alt='' />

														<span className='pl-2 '>{userData.address}</span>
													</li>
													<li className='li'>
														<Image className='w-5 ' src={clock} alt='' />

														<span className='pl-2'>
															{' '}
															{userData.time_from === undefined ||
															userData.time_from === null
																? ''
																: `${userData.time_from.slice(
																		0,
																		5
																  )} - ${userData.time_to.slice(0, 5)}`}
														</span>
													</li>
												</ul>
											</div>

											<div className='card-description'>
												<p className='font-banner-caps text-gray-500 pl-2'>
													{userData.description === undefined ||
													userData.description === null
														? ''
														: `${userData.description.slice(0, 150)}`}
												</p>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
					) : (
						'loading'
					)}
				</div>
			</div>
		</div>
	);
};

export default Page;
