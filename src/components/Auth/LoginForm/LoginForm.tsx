import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { FC, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import Input from "@/components/Form/Input"
import { useRouter } from "next/router"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


interface IFormInput {
    email: string
    password: string
}

interface LoginFormProps {
    onSub: () => void
    setStatus: (status: string) => void
}

const LoginForm: FC<LoginFormProps> = ({ setStatus, onSub }) => {
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const supabase = createClientComponentClient()

    // const router = useRouter()
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },

    } = useForm<IFormInput>({
        defaultValues: {
            // email: 'miriankakhidze@gmail.com',
            // password: '1qazXSW@'
        }
    })

    const onSubmit: SubmitHandler<IFormInput> = async (values) => {
        try {
            setError('')
            setLoading(true)
            const { data, error } = await supabase.auth.signInWithPassword({
                ...values
            })

            if (error) {
                setError(error?.message)
            }
            // console.log(data);

            if (data.user) {
                onSub()
                // redirect('/app/')
                // router.reload()
            }
            setLoading(false)
            // console.log(data);
            console.log(error?.message);

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <>
            <form className='space-y-4 my-4' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} label="ელ. ფოსტა" placeholder="ელ. ფოსტა" />}
                />
                {/* <Input label="name" type="email" register={register} required /> */}
                {errors.email && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}

                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Input {...field} label="პაროლი" type="password" placeholder="შეიყვანეთ პაროლი" />}
                />
                {errors.password && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}

                <div>
                    <button className="btn btn-block btn-primary" type='submit'>
                        {loading && <span className="loading loading-spinner"></span>}
                        შესვლა</button>
                </div>
                {error && <span className="text-red-700 mt-2">{error}</span>}
            </form>
            <span className='mt-8'>{`არ გაქვს არგარიში`}?
                <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline" onClick={() => setStatus('SIGNUP')}> რეგისტრაცია</a>
            </span>
        </>
    )
}

export default LoginForm