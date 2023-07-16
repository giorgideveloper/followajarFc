'use client'
import Input from "@/components/Form/Input"
import { randomString } from "@/utils/random"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { FC, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"


interface IFormInput {
    name: string
    lastname: string
    email: string
    birthday: string
    tel: string
    personalNumber: string
    password: string
    rePassword: string
    avatar_url: string
    fb: string
    ig: string
    yt: string
    tk: string
}

interface RegisterFormProps {
    setStatus?: (status: string) => void
    onSub?: () => void
}

const RegisterForm: FC<RegisterFormProps> = ({ setStatus, onSub }) => {
    const [error, setError] = useState<string>('')
    const [confirmation, setConfirmation] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const supabase = createClientComponentClient()

    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<IFormInput>({
        defaultValues: {
            // name: 'John',
            // lastname: 'Doe',
            // email: 'miriankakhidze@gmail.com',
            // password: '1qazXSW@',
            // birthday: 'string',
            // tel: 'string',
            // personalNumber: '61006055453',
            // fb: '',
            // ig: '',
            // yt: '',
            // tk: ''
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = async (values) => {
        const { email, password, ...rest } = values
        try {
            setError('')
            setConfirmation(false)

            setLoading(true)
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        ...rest
                    },
                },
            })

            if (error) {
                setError(error?.message)
            }

            if (onSub) onSub()
            if (data) {
                setConfirmation(true)
                reset()

                // router.reload()
            }
            setLoading(false)

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <form className=' w-full space-y-4 my-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} label="სახელი" placeholder="სახელი" />}
                        /> {errors.name && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>

                    <div className="w-full">
                        <Controller
                            name="lastname"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} label="გვარი" placeholder="გვარი" />}
                        /> {errors.lastname && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="email" label="ელ. ფოსტა" placeholder="ელ. ფოსტა" />}
                        /> {errors.email && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="birthday"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="date" label="დაბადების თარიღი" placeholder="დაბადების თარიღი" />}
                        /> {errors.birthday && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="tel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="tel" label="ტელეფონი" placeholder="ტელეფონი" />}
                        /> {errors.tel && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="personalNumber"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="text" label="პირადი ნომერი" placeholder="პირადი ნომერი" />}
                        /> {errors.personalNumber && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="password" label="პაროლი" placeholder="პაროლი" />}
                        /> {errors.password && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="rePassword"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="password" label="გაიმეორეთ პაროლი" placeholder="პაროლი" />}
                        /> {errors.rePassword && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                    </div>
                </div>
                <Controller
                    name="fb"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Facebook" placeholder="https://www.facebook.com/*********/" />}
                /> {errors.fb && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="ig"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Instagram" placeholder="https://www.instagram.com/*********/" />}
                /> {errors.ig && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="yt"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Youtube" placeholder="https://www.youtube.com/@*********/" />}
                /> {errors.yt && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="tk"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Tiktok" placeholder="https://www.tiktok.com/@*********/" />}
                /> {errors.tk && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="avatar_url"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input
                        // {...field}
                        type="file"
                        label="სურათი"
                        placeholder="სურათი"
                        className="file-input file-input-bordered w-full"
                        onChange={async (e: any) => {
                            setLoading(true)
                            const name = randomString(16)
                            const { data, error } = await supabase.storage
                                .from('avatars')
                                .upload(name, e.target.files[0])

                            field.onChange(data?.path ?? '')
                            setLoading(false)
                        }
                        }
                    />}
                /> {errors.avatar_url && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}


                <div>
                    <button className="btn btn-block btn-primary" type='submit' disabled={loading}>
                        {loading && <span className="loading loading-spinner"></span>}
                        რეგისტრაცია</button>
                </div>
                {error && <span className="text-red-700 mt-2">{error}</span>}
                {
                    confirmation &&
                    <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>შეამოწმეთ ელ.ფოსტა და დაადასტურეთ ანგარიში!</span>
                    </div>
                }
                {/* <input type="text" placeholder="personalNumber" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="lastname" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="birthday" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="phone" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="fb" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="ig" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="tk" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="yt" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="avatar_url" className="input input-bordered w-full max-w-xs" /> */}

                {/* <Auth
                    supabaseClient={supabase}
                    view={status == "SIGNIN" ? "sign_in" : "sign_up"}
                    appearance={{ theme: ThemeSupa }}
                    theme="light"
                    // showLinks={false}
                    providers={[]}
                    redirectTo="http://localhost:3000/auth/callback"
                /> */}
            </form>
            <span className='mt-3'>
                გაქვთ ანგარიში?
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline" onClick={() => { if (setStatus) setStatus('SIGNIN') }}> შესვლა</a>
            </span>
        </>
    )
}

export default RegisterForm