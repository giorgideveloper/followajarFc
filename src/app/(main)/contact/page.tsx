// "use client";

import Input from "@/components/Form/Input";
import { sendMail } from "./action";

import { useRef, useState } from "react";
import Submit, { ContactForm } from "./form";
import { openGraphImage } from "@/app/shared-metadata";
import { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "კონტაქტი",
  openGraph: {
    ...openGraphImage,
    title: "კონტაქტი",
  },
};

const Page = async () => {

  const supabase = createServerComponentClient({ cookies })

  let { data: { data } } = await supabase
    .from('settings')
    .select(`*`)
    .eq('name', 'contact')
    .single()


  return (
    <div className="container mx-auto px-4">
      <div className="card w-full bg-base-100 shadow-xl mt-5">
        <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="my-auto">
            <iframe
              className="shadow-xl rounded-lg"
              src="https://contact-map.vercel.app"
              width="100%"
              height="375"
            ></iframe>
          </div>
          <div>
            <h2 className="card-title">დაგვიკავშირდით</h2>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 my-10 justify-between items-start">
        <div className="">
          <h3 className="text-lg mb-3">დაგვირეკეთ</h3>
          <p className="text-slate-600 text-sm">{data.tel}</p>
        </div>

        <div className="">
          <h3 className="text-lg mb-3">მოგვწერეთ</h3>
          <p className="text-slate-600 text-sm">
            <a href={`mailto:${data.email}`}>
              {data.email}
            </a>
          </p>
        </div>
        {/* <div className="contents">
                </div> */}
        <div className="">
          <h3 className="text-lg mb-3">მისამართი</h3>
          <p className="text-slate-600 text-sm">84/86 ფარნავაზ მეფის ქუჩა,</p>
          <p className="text-slate-600 text-sm">ბათუმი, აჭარა, საქართველო</p>
          <p className="text-slate-600 text-sm">6010</p>
        </div>

        <div className="">
          <h3 className="text-lg mb-3">ჩვენი ვებ-გვერდები</h3>
          <p className="text-slate-600 text-sm">
            <a
              href="https://visitbatumi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitbatumi.com
            </a>
          </p>
          <p className="text-slate-600 text-sm">
            <a
              href="https://batumievents.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              batumievents.com
            </a>
          </p>
          <p className="text-slate-600 text-sm">
            <a
              href="https://visitajara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitajara.com
            </a>
          </p>
          <p className="text-slate-600 text-sm">
            <a
              href="https://infoajara.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              infoajara.com
            </a>
          </p>
          <p className="text-slate-600 text-sm">
            <a
              href="https://batumibirdfest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              batumibirdfest.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
