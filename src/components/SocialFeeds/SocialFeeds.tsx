'use client'

import Script from "next/script"
import { useState } from "react"
import Instagram from "./Instagram"
import Tiktok from "./Tiktok"
import Facebook from "./Facebook"

const SocialFeeds = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='my-20'>
            <h1 className="font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl p-1 ml-10 text-gray-900">კამპანიის ფარგლებში ბოლოს დამატებული პოსტები</h1>
            <div className="divider"></div>

            <div className="tabs ml-10">
                <a className={`tab tab-lg ${index === 0 ? 'tab-active' : ''}`} onClick={() => setIndex(0)}>Instagram</a>
                <a className={`tab tab-lg ${index === 1 ? 'tab-active' : ''}`} onClick={() => setIndex(1)}>Tiktok</a>
                <a className={`tab tab-lg ${index === 2 ? 'tab-active' : ''}`} onClick={() => setIndex(2)}>Facebook</a>
            </div>

            <Tabs index={index} />
        </div>
    )
}

export default SocialFeeds

const Tabs = ({ index }: { index: number }) => {
    if (index === 0) return <Instagram />
    if (index === 1) return <Tiktok />
    if (index === 2) return <Facebook />
}
