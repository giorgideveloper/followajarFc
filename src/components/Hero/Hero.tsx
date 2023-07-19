'use client'

import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const bluredVideoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        videoRef.current?.play()
        bluredVideoRef.current?.play()

    }, [])

    return (
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            {/* <video
                ref={bluredVideoRef}
                autoPlay
                controls={false}
                muted={true}
                src="./Ajara Tourist Alphabet.mp4"
                poster="https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg"
                id="blurred"></video> */}
            <div
                className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
            >
                <p>#გამომყევიაჭარაში</p>
                <p>იმოგზაურე აჭარაში და მოიგე 100 000 ლარი</p>
            </div>
            <video
                ref={videoRef}
                // className="w-full shadow-2xl h-1/2"
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                autoPlay
                muted={true}
                loop
                height={234}
                poster="th.jpeg"
            >
                <source src="/Ajara-Tourist-Alphabet.mp4" type="video/mp4"></source>
                <source src="/Ajara-Tourist-Alphabet.mp4" type="video/ogg" />
                <source src="/Ajara-Tourist-Alphabet.webm" type="video/webm"></source>
            </video>

            {/* <video src="https://www.youtube.com/watch?v=qyTZLWNtf84"  width={500} height={300} autoPlay loop muted /> */}
        </div>
    )
}

export default Hero
