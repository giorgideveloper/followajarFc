'use client'

import Input from '@/components/Form/Input';
import { useState, useRef } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { sendMail } from './action';

export default function Submit() {
    const { pending } = useFormStatus()

    return (
        <button type="submit" className="btn btn-neutral" disabled={pending}>
            {pending && <span className="loading loading-spinner"></span>}
            {pending ? ' იგზავნება...' : 'გაგზავნა'}
        </button>
    )
}

export function ContactForm() {
    const [status, setStatus] = useState<string>("");
    const formRef = useRef<HTMLFormElement>(null);

    const formHandle = async (formData: FormData) => {
        const data = Object.fromEntries(formData.entries());

        const response = await sendMail(data);

        if (response?.status === 200) setStatus(response.message);
        formRef?.current?.reset();
    };
    return (
        <form className="w-full" action={formHandle} ref={formRef}>
            <div className="flex flex-col gap-4 my-6 w-full">
                <Input
                    name="name"
                    label="სახელი"
                    placeholder="თქვენი სახელი"
                    required
                />
                <Input
                    name="email"
                    type="email"
                    label="ელ. ფოსტა"
                    placeholder="თქვენი ელ. ფოსტა"
                    required
                />
                <Input
                    name="subject"
                    label="სათაური"
                    placeholder="წერილის სათაური"
                    required
                />
                <div>
                    <label className="text-lg font-medium text-gray-900">
                        <span className="text-base label-text">წერილი</span>
                    </label>
                    <textarea
                        name="text"
                        className="textarea textarea-bordered w-full"
                        placeholder="თქვენი წერილი..."
                        required
                    ></textarea>
                </div>
                <div>
                    <Submit></Submit>
                </div>
            </div>

            {status == "success" && (
                <div className="alert alert-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>შეტყობინება წარმატებით გაიგზავნა!</span>
                </div>
            )}
        </form>
    )
}