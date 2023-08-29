import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css';

const ImageUploader: React.FC = ({onImagesUploaded}) => {
	const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
	const onDrop = (acceptedFiles: File[]) => {
		setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
    onImagesUploaded([...uploadedFiles, ...acceptedFiles])
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: 'image/*',
		multiple: true,
		minSize={0}
   	maxSize={5242880}
	});

	return (
		<div>
			<div {...getRootProps()} className='dropzone'>
				<input {...getInputProps()} />
				<p>Drag and drop some image files here, or click to select files</p>
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
