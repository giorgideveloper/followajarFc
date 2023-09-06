'use client';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { infoText, objectApi } from '../api/api';
import { ObjectType } from '../api/api.types';
import clock from './icon/clock.svg';
import location from './icon/location.svg';

const Banner_caps = localFont({
	src: './fonts/bpg_banner_caps.ttf',
	display: 'swap',
	variable: '--BPG-ExtraSquare-Mtavruli',
});

interface InfoType {
	id: number;
	description: string;
}
const Page = () => {
	const [data, setData] = useState<ObjectType[]>([]);
	const [info, setInfo] = useState<InfoType[]>([]);
	const [lodaing, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response: any = await objectApi();
				setData(response);
				setLoading(true);
			} catch (e) {
				console.log(e);
			}
		};
		const fetchInfo = async () => {
			try {
				const response = await infoText();
				setInfo(response);
			} catch (error) {
				console.log('🚀 ~ file: page.tsx:54 ~ fetchData ~ error:', error);
			}
		};
		fetchData();
		fetchInfo();
	}, []);

	const Dangerously = (str: any) => {
		const markup = { __html: `${str}` };
		return markup;
	};

	const userId =
		typeof window !== 'undefined' ? localStorage.getItem('userId') : false;
	return (
		<>
			<div className='container mx-auto my-4 px-7 '>
				{info.map((item, index) => (
					<>
						<div key={item.id} className='info text-center pb-3 '>
							<h2 className={` m-4 pb-3`}></h2>
							<div dangerouslySetInnerHTML={Dangerously(item.description)} />
							{userId ? (
								''
							) : (
								<div className='id pt-5 pb-5'>
									<Link
										className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4  border border-gray-400 rounded shadow '
										href={{
											pathname: '/objlogin',
										}}
									>
										შესვლა
									</Link>
									<Link
										className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 border border-gray-400 rounded shadow '
										href={{
											pathname: '/objregister',
										}}
									>
										რეგისტრაცია
									</Link>
								</div>
							)}
						</div>
					</>
				))}
				{lodaing ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
						{data.map(item => (
							// eslint-disable-next-line react/jsx-key
							<Link key={item.id} href={`/object/${item.id}`}>
								<div
									className='card card-compact  cursor-pointer '
									key={item.id}
								>
									<div className={`card-body `}>
										<div className='avatar'>
											<div className='w-full h-80 rounded-t-lg border-b-4 border-[#D98200] relative'>
												<div className='top-left absolute  '>
													<div className='top-left-bg'>
														<span>
															{((item.discount ?? 0) >= 100 && (
																<span>Free</span>
															)) || <span>{item.discount} %</span>}
														</span>
													</div>
												</div>
												<div className='bottom-left absolute'>
													{item?.object_type?.name}
												</div>

												<Image
													className='w-full'
													loading='lazy'
													src={
														item?.images?.[0]?.image ||
														'https://follow.geoevents.ge/media/media/obieqtebi/default.jpg'
													}
													alt={`${data.name}`}
													width={400}
													height={500}
												/>
											</div>
										</div>
										<div className='card-content '>
											<div className='card-title '>
												<h1 className={`text-3xl  pt-3 pl-2 `}>
													{item.object_name}
												</h1>
											</div>

											<div className='card-info'>
												<ul className='ul w-full'>
													<li className='li'>
														<Image className='w-4' src={location} alt='' />

														<span className='pl-2 '>{item.address}</span>
													</li>
													<li className='li'>
														<Image className='w-5 ' src={clock} alt='' />

														<span className='pl-2'>{`${item.time_from.slice(
															0,
															5
														)}-${item.time_to.slice(0, 5)}`}</span>
													</li>
												</ul>
											</div>

											<div className='card-description'>
												<p
													className=' text-gray-500 pl-2'
													dangerouslySetInnerHTML={
														item.description === undefined
															? ''
															: Dangerously(item.description.slice(0, 150))
													}
												></p>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				) : (
					<>
						<div className='text-center w-full pb-5'>
							<div
								role='status'
								className='space-y-2.5 animate-pulse w-full text-center'
							>
								<div className='flex items-center w-full space-x-5'>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
								</div>
								<div className='flex items-center w-full space-x-2 '>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24'></div>
								</div>
								<div className='flex items-center w-full space-x-2 '>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-80'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
								</div>
								<div className='flex items-center w-full space-x-2 '>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24'></div>
								</div>
								<div className='flex items-center w-full space-x-2 '>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-32'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-24'></div>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-full'></div>
								</div>
								<div className='flex items-center w-full space-x-2 max-w-[800px]'>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
									<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-80'></div>
									<div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-300 w-full'></div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
							<div
								role='status'
								className='max-w-sm  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-300'
							>
								<div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
									</svg>
								</div>
								<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
								<div className='flex items-center mt-4 space-x-3'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
									</svg>
									<div>
										<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2'></div>
										<div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
									</div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
							<div
								role='status'
								className='max-w-sm  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-300'
							>
								<div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
									</svg>
								</div>
								<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
								<div className='flex items-center mt-4 space-x-3'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
									</svg>
									<div>
										<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2'></div>
										<div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
									</div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
							<div
								role='status'
								className='max-w-sm  p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-300'
							>
								<div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 16 20'
									>
										<path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
										<path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
									</svg>
								</div>
								<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5'></div>
								<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
								<div className='flex items-center mt-4 space-x-3'>
									<svg
										className='w-10 h-10 text-gray-200 dark:text-gray-300'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
									</svg>
									<div>
										<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2'></div>
										<div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300'></div>
									</div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Page;
