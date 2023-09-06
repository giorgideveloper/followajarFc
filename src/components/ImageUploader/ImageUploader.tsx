import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css';

const ImageUploader: React.FC = ({ onImagesUploaded }) => {
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
	const [imgLarg, setImgLarg] = useState();
	const onDrop = (acceptedFiles: File[]) => {
		const maxSize = 2242880; // Maximum size in bytes (2MB)

		acceptedFiles.forEach(file => {
			if (file.size > maxSize) {
				setImgLarg(
					`File ${file.name} აღემატება მაქსიმალური ზომის ლიმიტს 2 მეგაბაიტი.`
				);
			} else {
				setImgLarg('ფოტოს მაქსიმალური ზომა 2 მეგაბაიტი');
				// Process the accepted file
				setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
				onImagesUploaded([...uploadedFiles, ...acceptedFiles]);
			}
		});
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: 'image/*',
		multiple: true,
	});

	return (
		<div>
			<div {...getRootProps()} className='dropzone'>
				<input {...getInputProps()} />
				{imgLarg ? (
					<p className='text-red-500'> {imgLarg}</p>
				) : (
					<p className='text-neutral-400'>ფოტოს მაქსიმალური ზომა 2 მეგაბაიტი</p>
				)}
			</div>
			<div className='uploaded-files'>
				{uploadedFiles.map((file, index) => (
					<div key={index} className='uploaded-file'>
						<img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} />
						<p>{file.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageUploader;
