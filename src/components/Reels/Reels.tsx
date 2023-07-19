'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

const reels = new Array(15).fill(5)

const html = [
    `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CuhexSCIuOu/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CuhexSCIuOu/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CuhexSCIuOu/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Europe 🇪🇺 Travel | Hotels | Food | Tips (@europexplores)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`,
    `<blockquote class="instagram-media"   data-instgrm-permalink="https://www.instagram.com/p/CupFCo-Ijzm/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CupFCo-Ijzm/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CupFCo-Ijzm/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Europe 🇪🇺 Travel | Hotels | Food | Tips (@europexplores)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@taggeorgia/video/7183448748658330881" data-video-id="7183448748658330881" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@taggeorgia" href="https://www.tiktok.com/@taggeorgia?refer=embed">@taggeorgia</a> <a title="batumi" target="_blank" href="https://www.tiktok.com/tag/batumi?refer=embed">#batumi</a> <a title="beautifulworld" target="_blank" href="https://www.tiktok.com/tag/beautifulworld?refer=embed">#beautifulworld</a> <a target="_blank" title="♬ original sound - myah" href="https://www.tiktok.com/music/original-sound-7139557157531503406?refer=embed">♬ original sound - myah</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@explore__georgia/video/7234529289960443137" data-video-id="7234529289960443137" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@explore__georgia" href="https://www.tiktok.com/@explore__georgia?refer=embed">@explore__georgia</a> <a title="batumi" target="_blank" href="https://www.tiktok.com/tag/batumi?refer=embed">#batumi</a> <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a> <a title="batumi2023" target="_blank" href="https://www.tiktok.com/tag/batumi2023?refer=embed">#batumi2023</a> <a target="_blank" title="♬ оригинальный звук - Anton Zubarev" href="https://www.tiktok.com/music/оригинальный-звук-7164481837149309698?refer=embed">♬ оригинальный звук - Anton Zubarev</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
    `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@averaveravv/video/7199959170060143874" data-video-id="7199959170060143874" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@averaveravv" href="https://www.tiktok.com/@averaveravv?refer=embed">@averaveravv</a> Evening Batumi greeted us violently <a title="batumi" target="_blank" href="https://www.tiktok.com/tag/batumi?refer=embed">#batumi</a> <a title="georgia" target="_blank" href="https://www.tiktok.com/tag/georgia?refer=embed">#georgia</a> <a title="sea" target="_blank" href="https://www.tiktok.com/tag/sea?refer=embed">#sea</a> <a title="lifeingeorgia" target="_blank" href="https://www.tiktok.com/tag/lifeingeorgia?refer=embed">#lifeingeorgia</a> <a title="batumi_georgia" target="_blank" href="https://www.tiktok.com/tag/batumi_georgia?refer=embed">#batumi_georgia</a> <a target="_blank" title="♬ Escapism. - RAYE &#38; 070 Shake" href="https://www.tiktok.com/music/Escapism-7146071473319315457?refer=embed">♬ Escapism. - RAYE &#38; 070 Shake</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`,
]

// const url = 'https://www.tiktok.com/api/search/general/full/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=MacIntel&browser_version=5.0%20%28Linux%3B%20Android%206.0%3B%20Nexus%205%20Build%2FMRA58N%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F114.0.0.0%20Mobile%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7255584047769978373&device_platform=web_mobile&focus_state=true&from_page=search&history_len=8&is_fullscreen=false&is_page_visible=true&keyword=%23batumi&offset=0&os=android&priority_region=&referer=&region=GE&screen_height=762&screen_width=1933&search_source=normal_search&tz_name=Asia%2FTbilisi&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%7D%7D&webcast_language=en&msToken=vK3jsiGVWBA9Gk5q0meOENcsUoYKnd8Fitk_lOZ9f3MUNkEVDTV2k8uRHswcgyU6JNz3RveYQQTqCvnGigTqP2IvI3qzDiUnrS6oDJ0EfN8o-4ELsRx7UTa0fDdEvQONIliiAt2EwWjHvYc=&X-Bogus=DFSzywGLQRUANy5htj1Zyfok/RK0&_signature=_02B4Z6wo00001yRrR6AAAIDAdBwDWO7Cnu8kS0MAAK223c'


const Reels = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    // const getReels = () => {
    //     fetch('https://www.tiktok.com/api/search/general/full/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=MacIntel&browser_version=5.0%20(Linux%3B%20Android%206.0%3B%20Nexus%205%20Build%2FMRA58N)%20AppleWebKit%2F537.36%20(KHTML,%20like%20Gecko)%20Chrome%2F114.0.0.0%20Mobile%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_mobile&focus_state=true&from_page=search&history_len=2&is_fullscreen=false&is_page_visible=true&keyword=%23batumi&offset=0&os=android&priority_region&referer&region=GE&screen_height=513&screen_width=1933&search_source=normal_search&tz_name=Asia%2FTbilisi&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1,%22mt_search_general_user_live_card%22%3A1%7D%7D%7D%7D&webcast_language=en')
    //         .then(response => response.json())
    //         .then(json => console.log('reels-> ', json))
    // }
    useEffect(() => {
        // getReels()
    }, [])
    return (
        <div className='my-20'>
            <h1 className="font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl p-1 ml-10 text-gray-900">კამპანიის ფარგლებში ბოლოს დამატებული პოსტები</h1>
            <div className="divider"></div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={1}
                // centeredSlides={true}
                spaceBetween={30}
                breakpoints={{
                    '@0.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '@1.00': {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    '@1.50': {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {reels.map((item, i) =>
                    <SwiperSlide key={i}>
                        <div dangerouslySetInnerHTML={{ __html: html[Math.round(Math.random() * (html.length - 1))] }}></div>
                        {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"  /> */}
                    </SwiperSlide>
                )}
            </Swiper>

            {/* <div className=" carousel w-full">
                <div className="relative">

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {reels.map((item, i) =>
                    <div id={`slide${i}`} className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    </div>
                )
                }


            </div> */}





            {/* <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box">
                 {reels.map((item, i) =>
                     <div className="carousel-item" key={i}>
                         <div dangerouslySetInnerHTML={{ __html: html[Math.round(Math.random() * (html.length - 1))] }}></div>
                     </div>
                 )
                 }
             </div > */}
        </div>
    )
}

export default Reels
{/* {
    i % 2 == 0 ?
        // < Image
        //     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-box"
        //     src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        //     alt="Logo"
        //     priority
        //     width={100}
        //     height={100}
        // />
        <>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
        // <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
        :
        <div dangerouslySetInnerHTML={{ __html: html1 }}></div>
    // <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
} */}

