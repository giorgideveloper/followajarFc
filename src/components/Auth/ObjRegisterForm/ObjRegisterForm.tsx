'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { objectOptionType, postUserData } from '@/app/(main)/api/api';
import toast from '@/components/helper/toast';
import { RegisterFromType } from './ObjRegisterForm.interface';
import Input from '@/components/Form/Input';
import Loading from '@/components/Loading';
import ImageUploader from '@/components/ImageUploader/ImageUploader';

const ObjRegisterForm = () => {
	const [loading, setLoading] = useState(false);
	const [optionType, setOptionType] = useState<string[]>([]);

	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFromType>();
	const [images, setImages] = useState<File[]>([]);

	const handleImagesUploaded = (uploadedImages: File[]) => {
		setImages(uploadedImages);
	};

	const [errorsMessage, setErrorsMessage] = useState([]);
	const [registrationStatus, setRegistrationStatus] = useState('');

	//Get option Type

	const getOptionType = async () => {
		try {
			const res = await objectOptionType();
			setOptionType(res);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getOptionType();
	}, []);

	function generateRandom11Digits() {
		const randomNumber = Math.floor(Math.random() * 100000000000);
		const formattedNumber = String(randomNumber).padStart(11, '0');
		return formattedNumber;
	}

	const onSubmit = async (data: RegisterFromType) => {
		const idNumber = generateRandom11Digits();
		const formData = new FormData();

		if (images) {
			images.map(element => {
				formData.append('uploaded_images', element);
			});
		}

		formData.append('id_number', idNumber);
		formData.append('object_name', data.object_name);
		formData.append('object_type', data.object_type);
		formData.append('name', data.name);
		formData.append('facebook', data.facebook);
		formData.append('instagram', data.instagram);
		formData.append('last_name', data.last_name);
		formData.append('address', data.address);
		formData.append('mobile', data.mobile);
		formData.append('time_from', data.time_from);
		formData.append('time_to', data.time_to);
		formData.append('discount', data.discount.toString());
		formData.append('email', data.email);
		formData.append('password', data.password);
		formData.append('description', data.description);
		// Append other form fields to formData

		try {
			setLoading(true);
			const response = await postUserData(formData);
			setRegistrationStatus(response.message);
			setLoading(false);
			toast('success', 'დარეგისტრირებულია წარმატებით');

			setTimeout(() => {
				router.push('/dashboard');
			}, 100);
		} catch (error: any) {
			if (error.response.data.mobile) {
				toast('error', `მომხმარებელი ამ მობილურით უკვე არსებობს`);
			}

			setRegistrationStatus('Error during registration');

			setLoading(false);
		}
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<form
					className=' w-full space-y-4 my-4'
					onSubmit={handleSubmit(onSubmit)}
				>
					<h3 className='flex'>
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
								d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<strong className='ml-2'>პირადი ინფორმაცია</strong>
					</h3>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<Input
								label='სახელი'
								type='text'
								id='name'
								placeholder='მაგ: გიორგი'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								{...register('name', {
									required: { value: true, message: 'შეიყვანეთ: სახელი' },
								})}
							/>
							{errors.name && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.name.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<Input
								label='გვარი'
								type='text'
								id='last_name'
								placeholder='მაგ: ბერიძე'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								{...register('last_name', {
									required: { value: true, message: 'შეიყვანეთ: გვარი' },
								})}
							/>
							{errors.last_name && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.last_name.message}
								</span>
							)}
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<Input
								label='მობილური'
								type='tel'
								id='mobile'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='მაგ: 555112233'
								{...register('mobile', {
									required: { value: true, message: 'შეიყვანეთ: მობილური' },
								})}
							/>
							{errors.mobile && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.mobile.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<Input
								label='მეილი'
								type='text'
								id='email'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='მაგ: giorgiberidze@mail.com'
								{...register('email', {
									required: { value: true, message: 'შეიყვანეთ: მეილი' },
								})}
							/>
							{errors.email && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.email.message}
								</span>
							)}
						</div>
					</div>
					<h3 className='flex'>
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
								d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<strong className='ml-2'>ობიექტის ინფორმაცია</strong>
					</h3>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<Input
								label='ობიექტის სახელი'
								type='text'
								id='object_name'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='მაგ: ობიექტი'
								{...register('object_name', {
									required: {
										value: true,
										message: 'შეიყვანეთ: ობიექტის სახელი',
									},
								})}
							/>
							{errors.object_name && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.object_name.message}
								</span>
							)}
						</div>

						<div className='w-full'>
							<div className='w-full'>
								<label
									htmlFor='object_type'
									className={'text-base font-medium text-gray-900'}
								>
									ობიექტის ტიპი
								</label>
								<select
									id='object_type'
									className='w-full input input-bordered mt-2 text-md text-gray-500'
									{...register('object_type', {
										required: {
											value: true,
											message: 'შეიყვანეთ: ობიექტის სახელი',
										},
									})}
								>
									{optionType.map(item => (
										<>
											<option key={item.id} value={item.id}>
												{item.name}
											</option>
										</>
									))}
								</select>
								{errors.object_type && (
									<span className='text-red-700 text-sm mt-2'>
										{errors.object_type.message}
									</span>
								)}
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<Input
								label='მისამართი'
								type='text'
								id='address'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='მაგ: ფარნავაზ მეფის 100'
								{...register('address', {
									required: { value: true, message: 'შეიყვანეთ: მისამართი' },
								})}
							/>
							{errors.address && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.address.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<Input
								label='ფასდაკლება'
								id='discount'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='მაგ: 1-დან 100-მდე'
								type='number'
								{...register('discount', {
									required: { value: true, message: 'შეიყვანეთ: ფასდაკლება' },
								})}
							/>
							{errors.discount && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.discount.message}
								</span>
							)}
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<label
								htmlFor='time_from'
								className={'text-base font-medium text-gray-900'}
							>
								მუშაობის დაწყების დრო
							</label>

							<input
								type='time'
								id='time_from'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								{...register('time_from', {
									required: {
										value: true,
										message: 'შეიყვანეთ: მუშაობის დაწყების დრო',
									},
								})}
							/>
							{errors.time_from && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.time_from.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<label
								htmlFor='time_to_type'
								className={'text-base font-medium text-gray-900'}
							>
								მუშაობის დასრულების დრო
							</label>
							<input
								type='time'
								id='time_to'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								{...register('time_to', {
									required: {
										value: true,
										message: 'შეიყვანეთ: მუშაობის დასრულების დრო',
									},
								})}
							/>
							{errors.time_to && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.time_to.message}
								</span>
							)}
						</div>
					</div>
					<div className='w-full'>
						<Input
							label='მოკლე აღწერა'
							type='text'
							id='description'
							placeholder='მოკლე აღწერა'
							className='w-full input input-bordered mt-2 h-28 text-md text-gray-500'
							{...register('description', {
								required: { value: true, message: 'შეიყვანეთ: მოკლე აღწერა' },
							})}
						/>
						{errors.description && (
							<span className='text-red-700 text-sm mt-2'>
								{errors.description.message}
							</span>
						)}
					</div>
					<div className='flex flex-col md:flex-row gap-4'>
						<div className='w-full'>
							<Input
								type='password'
								label='პაროლი'
								placeholder='მაგ: Password123!'
								{...register('password', {
									required: { value: true, message: 'შეიყვანეთ: პაროლი' },
								})}
							/>
							{errors.password && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.password.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<Input
								label='გაინმეორეთ პაროლი'
								type='password'
								id='password'
								placeholder='მაგ: Password123!'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
							/>
						</div>
					</div>
					<h3 className='flex'>
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
								d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
							/>
						</svg>
						<strong className='ml-2'>სოციალური ქსელები</strong>
					</h3>
					<div className='flex flex-col md:flex-row gap-4 mb-5'>
						<div className='w-full'>
							<Input
								label='Facebook'
								type='text'
								id='facebook'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='https://www.facebook.com/******/user'
								{...register('facebook')}
							/>
							{errors.facebook && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.facebook.message}
								</span>
							)}
						</div>
						<div className='w-full'>
							<Input
								label='Instagram'
								type='text'
								id='instagram'
								className='w-full input input-bordered mt-2 text-md text-gray-500'
								placeholder='https://www.instagram.com/******/user'
								{...register('instagram')}
							/>
							{errors.instagram && (
								<span className='text-red-700 text-sm mt-2'>
									{errors.instagram.message}
								</span>
							)}
						</div>
					</div>
					<h3 className='flex'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
							/>
						</svg>
						<strong className='ml-2'>ობიექტის ფოტო</strong>
					</h3>
					<ImageUploader onImagesUploaded={handleImagesUploaded} />
					<button className='btn btn-block btn-primary'>Submit</button>
				</form>
			)}
		</>
	);
};

export default ObjRegisterForm;
