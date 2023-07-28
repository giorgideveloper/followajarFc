'use client'

import Image from "next/image"

const Footer = () => {
    return (
        <div className="container mx-auto ">
            <div className="divider"></div>
            <footer className="footer p-10 text-base-content justify-between">
                <div>
                    <span className="footer-title text-base label-text font-fira-go">ჩვენი სხვა ვებ-გვერდები</span>
                    <a className="link link-hover text-md text-gray-500 font-fira-go" target="_blank" href="http://visitbatumi.com">visitbatumi.com</a>
                    <a className="link link-hover text-md text-gray-500 font-fira-go" target="_blank" href="http://visitajara.com">visitajara.com</a>
                    <a className="link link-hover text-md text-gray-500 font-fira-go" target="_blank" href="http://Batumievents.com">batumievents.com</a>
                </div>
                <div>
                    <span className="footer-title text-base label-text font-fira-go">საკონტაქტო ინფორმაცია</span>
                    <a className="link link-hover text-md text-gray-500 font-fira-go">(+995) 599 16 99 09</a>
                    <a href="mailto:infovisitbatumi@gmail.com" className="link link-hover text-md text-gray-500 font-fira-go">infovisitbatumi@gmail.com</a>
                    <a className="link link-hover text-md text-gray-500 font-fira-go">84/86 ფარნავაზ მეფის ქუჩა, ბათუმი, საქართველო</a>
                </div>
                {/* <div>
                    <span className="footer-title text-base label-text font-fira-go">მობილური აპლიკაციები</span>
                    <a href="https://apps.apple.com/us/app/anbani-tour/id1579766195"
                        className="link link-hover ">
                        <Image
                            width={120}
                            height={50}
                            src="/app-store.webp"
                            alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.helixmob.anbani&hl=en&gl=US&pli=1"
                        className="link link-hover ">
                        <Image
                            width={120}
                            height={50}
                            src="/play-store.webp"
                            alt="" /></a>
                </div> */}
                <div>
                    <span className="footer-title text-base label-text font-fira-go">სოციალური ქსელები</span>
                    <div className="grid grid-flow-col gap-5">
                        <a href="https://www.facebook.com/visitbatumi" target="_blank" className="m-auto"><img src="./fb3.svg" alt="" width={30} height={30} /></a>
                        <a href="https://youtube.com/@Gobatumi" target="_blank" className="m-auto"><img src="./yt1.svg" alt="" width={30} height={30} /></a>
                        <a href="https://instagram.com/visitbatumi" target="_blank" className="m-auto"><img src="./ig.svg" alt="" width={25} height={25} /></a>
                        {/* <a href="https://tiktok.com/visitbatumi" target="_blank" className="m-auto"><img src="./tk1.svg" alt="" width={30} height={30} /></a> */}
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
