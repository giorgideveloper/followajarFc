'use client'
import Checkbox from "@/components/Form/Checkbox"
import Input from "@/components/Form/Input"
import { getRandomInt, randomString } from "@/utils/random"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ref } from "yup"


const getCharacterValidationError = (str: string) => {
    return `პაროლი უნდა შეიცავდეს მინიმუმ 1 ${str}`;
};

const schema = yup
    .object({
        name: yup.string().required('* აუცილებელი ველი'),
        lastname: yup.string().required('* აუცილებელი ველი'),
        email: yup.string().email('არასწორი ფორმატი').required('* აუცილებელი ველი'),
        birthday: yup.date().required('* აუცილებელი ველი'),
        tel: yup.string().required('* აუცილებელი ველი'),
        personalNumber: yup.string().length(11, 'პირადი ნომერი უნდა შედგებოდეს 11 ციფრისაგან!').matches(/^[0-9]+$/, 'გამოიყენეთ მხოლოდ ციფრები!').required('* აუცილებელი ველი'),
        password: yup.string()
            .required("* შეიყვანეთ პაროლი")
            .min(8, "პაროლი უნდა შედგებოდეს მინუმუმ 8 სიმბოლოსგან")
            .matches(/[0-9]/, getCharacterValidationError("ციფრს"))
            .matches(/[a-z]/, getCharacterValidationError("პატარა ასოს"))
            .matches(/[A-Z]/, getCharacterValidationError("დიდ ასოს")),
        rePassword: yup.string()
            .required("* გაიმეორეთ პაროლი")
            .oneOf([ref("password")], "პაროლები არ ემთხვევა"),
        fb: yup.string(),
        ig: yup.string(),
        yt: yup.string(),
        tk: yup.string(),
        avatar_url: yup.string().required('* აუცილებელი ველი'),
        rules: yup.boolean().required('* გთხოვთ დაეთანხმოთ წესებს და პირობებს'),
    })
    .required()


// interface IFormInput {
//     name: string
//     lastname: string
//     email: string
//     birthday: string
//     tel: string
//     personalNumber: string
//     password: string
//     rePassword: string
//     avatar_url: string
//     fb: string
//     ig: string
//     yt: string
//     tk: string
//     rules: boolean
// }

interface RegisterFormProps {
}

const RegisterForm: FC<RegisterFormProps> = () => {
    const router = useRouter()
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
    } = useForm({
        resolver: yupResolver(schema),
        // defaultValues: {
        //     // name: 'John',
        //     // lastname: 'Doe',
        //     // email: 'mkakh1dz3@gmail.com',
        //     // password: '1qazXSW@',
        //     // rePassword: '1qazXSW@',
        //     // birthday: 'string',
        //     // tel: 'string',
        //     // personalNumber: '61006055412',
        //     // fb: '',
        //     // ig: '',
        //     // yt: '',
        //     // tk: ''
        // }
    })

    const onSubmit: SubmitHandler<any> = async (values) => {
        const { email, password, rules, ...rest } = values

        try {
            setError('')
            setConfirmation(false)

            setLoading(true)


            const { data, error, } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        ...rest,
                        tour: getRandomInt(1, 8)
                    },
                },
            })

            if (error) {
                console.log('erorrr');
                throw error
            }

            // if (onSub) onSub()
            if (data) {
                console.log('balaa');

                setConfirmation(true)
                reset()

                // router.reload()
            }

        } catch (error) {
            //@ts-ignore
            setError(error?.message)

            console.log(error);

        }
        finally {
            setLoading(false)

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
                            render={({ field }) => <Input {...field} label="სახელი" placeholder="სახელი" aria-invalid={errors.name ? "true" : "false"} />}
                        />
                        {/* {errors.name && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>} */}
                        {errors.name && <span className="text-red-700 text-sm mt-2">{errors.name.message}</span>}
                    </div>

                    <div className="w-full">
                        <Controller
                            name="lastname"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} label="გვარი" placeholder="გვარი" />}
                        />
                        {/* {errors.lastname && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>} */}
                        {errors.lastname && <span className="text-red-700 text-sm mt-2">{errors.lastname.message}</span>}

                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="email" label="ელ. ფოსტა" placeholder="ელ. ფოსტა" />}
                        />
                        {errors.email && <span className="text-red-700 text-sm mt-2">{errors.email.message}</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="birthday"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="date" label="დაბადების თარიღი" placeholder="დაბადების თარიღი" />}
                        />
                        {errors.birthday && <span className="text-red-700 text-sm mt-2">{errors.birthday.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="tel"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="tel" label="ტელეფონი" placeholder="ტელეფონი" />}
                        />
                        {errors.tel && <span className="text-red-700 text-sm mt-2">{errors.tel.message}</span>}
                        {/* {errors.tel && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>} */}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="personalNumber"
                            control={control}
                            rules={{ required: true, }}
                            render={({ field }) => <Input {...field} type="text" label="პირადი ნომერი" placeholder="პირადი ნომერი" aria-invalid={errors.personalNumber ? "true" : "false"} />}
                        />
                        {errors.personalNumber && <span className="text-red-700 text-sm mt-2">{errors.personalNumber?.message}</span>}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true, minLength: 6 }}
                            render={({ field }) => <Input {...field} type="password" label="პაროლი" placeholder="პაროლი" />}
                        />
                        {errors.password && <span className="text-red-700 text-sm mt-2">{errors.password.message}</span>}
                    </div>
                    <div className="w-full">
                        <Controller
                            name="rePassword"
                            control={control}
                            rules={{ required: true, minLength: 6 }}
                            render={({ field }) => <Input {...field} type="password" label="გაიმეორეთ პაროლი" placeholder="პაროლი" />}
                        />
                        {errors.rePassword && <span className="text-red-700 text-sm mt-2">{errors.rePassword.message}</span>}
                    </div>
                </div>
                <Controller
                    name="fb"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Facebook" placeholder="https://www.facebook.com/*********/" />}
                /> {errors.fb && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="ig"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Instagram" placeholder="https://www.instagram.com/*********/" />}
                /> {errors.ig && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="yt"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Youtube" placeholder="https://www.youtube.com/@*********/" />}
                /> {errors.yt && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}
                <Controller
                    name="tk"
                    control={control}
                    render={({ field }) => <Input {...field} type="text" label="Tiktok" placeholder="https://www.tiktok.com/@*********/" />}
                /> {errors.tk && <span className="text-red-700 text-sm mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="avatar_url"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input
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
                />
                {errors.avatar_url && <span className="text-red-700 text-sm mt-2">{errors.avatar_url.message}</span>}

                <Controller
                    name="rules"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, ...rest } }) => <Checkbox {...rest} label="ვეთანხმები წესებს და პირობებს" />}
                />
                {errors.rules && <span className="text-red-700 text-sm mt-2">{errors.rules.message}</span>}
                {/* {errors.rules && <span className="text-red-700 mt-2">* გთხოვთ დაეთანხმოთ წესებს და პირობებს</span>} */}

                <div>
                    <button className="btn btn-block btn-primary" type='submit' disabled={loading}>
                        {loading && <span className="loading loading-spinner"></span>}
                        რეგისტრაცია</button>
                </div>
                {/* {error && <span className="text-red-700 mt-2">{error}</span>} */}
                {
                    confirmation &&
                    <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>შეამოწმეთ ელ.ფოსტა და დაადასტურეთ ანგარიში!</span>
                    </div>
                }

            </form>
            <span className='mt-3'>
                გაქვთ ანგარიში?
                <Link href="/login" className="text-blue-600 hover:text-blue-800 hover:underline"> შესვლა</Link>
            </span>
        </>
    )
}

export default RegisterForm