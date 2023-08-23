'use client'

import Script from "next/script"
import { useState } from "react"

const SocialFeeds = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className='my-20'>
            <h1 className="font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl p-1 ml-10 text-gray-900">კამპანიის ფარგლებში ბოლოს დამატებული პოსტები</h1>
            <div className="divider"></div>

            <div className="tabs ml-10">
                <a className={`tab tab-lg ${index === 0 ? 'tab-active' : ''}`} onClick={() => setIndex(0)}>Instagram</a>
                <a className={`tab tab-lg ${index === 1 ? 'tab-active' : ''}`} onClick={() => setIndex(1)}>Facebook</a>
                <a className={`tab tab-lg ${index === 2 ? 'tab-active' : ''}`} onClick={() => setIndex(2)}>Tiktok</a>
            </div>

            <Tabs index={index} />
        </div>
    )
}

export default SocialFeeds

const Tabs = ({ index }: { index: number }) => {

    return (
        <>
            <div className="elfsight-app-2bcd1b8a-7d77-4651-8775-3acc1d7ab645" style={{ display: index == 0 ? 'block' : 'none' }}></div>
            <div className='sk-ww-facebook-hashtag-feed' data-embed-id='184031' style={{ display: index == 1 ? 'block' : 'none' }}></div>
            <div className="elfsight-app-7761cb95-401c-46e4-8ec7-6548960b1308" style={{ display: index == 2 ? 'block' : 'none' }}></div>

            <Script src='https://static.elfsight.com/platform/platform.js' data-use-service-core defer></Script>
            <Script src='https://widgets.sociablekit.com/facebook-hashtag-posts/widget.js' async defer></Script>
            <Script src='https://static.elfsight.com/platform/platform.js' data-use-service-core defer></Script>
        </>
    )
}