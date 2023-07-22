
'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { FC, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Input from '../Form/Input';
import { randomString } from '@/utils/random';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

interface IFormInput {
    image: string
    views: string
}


interface SocialCardProps {
    id: string
    title: string
    userId: string
}

const SocialCard: FC<SocialCardProps> = ({ id, title, userId }) => {
    const [screens, setScreens] = useState<any[]>([])
    const router = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const supabase = createClientComponentClient()

    const {
        control,
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isDirty },

    } = useForm<IFormInput>({})

    const onSubmit: SubmitHandler<IFormInput> = async (values) => {
        try {
            setError('')
            setLoading(true)


            const { data, error } = await supabase
                .from('screens')
                .insert([
                    {
                        ...values,
                        social: id,
                        user_id: userId
                    },
                ])
                .select()

            if (error) {
                setError(error?.message)
            }

            if ((data?.length ?? 0) > 0) {
                reset()
                router.replace('profile#')
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }
    const getScreens = async () => {

        let { data, error: err } = await supabase
            .from('screens')
            .select("*")

            // Filters
            .eq('social', id)
            .eq('user_id', userId)
            .limit(10)

        if (data) setScreens(data)

    }
    useEffect(() => {
        getScreens()
    }, [])
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {screens.length == 0 &&
                        <p>No screens</p>
                    }
                    <div className='flex flex-wrap gap-2'>

                        {screens.length > 0 &&
                            screens.map(item =>
                                <Image
                                    key={item.id}
                                    className='rounded-sm'
                                    alt=''
                                    width={80}
                                    height={80}
                                    src={`https://qncbnxbxcvvacstnmmdk.supabase.co/storage/v1/object/public/screens/${item.image}`}
                                />
                            )}
                    </div>
                    <div className="card-actions justify-end">
                        <a href={`#socModal_${id}`} className="btn">დამატება</a>
                    </div>
                </div>
            </div>

            <div id={`socModal_${id}`} className="modal">
                <div className="modal-box">
                    <div className='flex items-center justify-between'>
                        <h3 className="font-bold text-lg">{title}</h3>
                        <a href="#" className="btn">X</a>
                    </div>

                    <form className='space-y-6 my-4' onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="image"
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
                                        .from('screens')
                                        .upload(name, e.target.files[0])
                                    if (error) {
                                        setError(error.message)
                                        return
                                    }
                                    field.onChange(data?.path ?? '')
                                    setLoading(false)
                                }
                                }
                            />}
                        /> {errors.image && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}

                        <Controller
                            name="views"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <Input {...field} type="number" label="ნახვების რაოდენობა" placeholder="12345" />}
                        />
                        {errors.views && <span className="text-red-700 mt-2">* აუცილებელი ველი</span>}


                        <div>
                            <button className="btn btn-block btn-primary" type='submit' disabled={loading || !isDirty}>
                                {loading && <span className="loading loading-spinner"></span>}
                                ატვირთვა</button>
                        </div>
                        {error && <span className="text-red-700 mt-2">{error}</span>}

                    </form>
                    {/* <div className="modal-action">
                        <a href="#" className="btn">დახურვა</a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default SocialCard