import Input from "@/components/Form/Input"

const Page = () => {

    async function sendMail(formData: FormData) {
        'use server'
        const nodemailer = require("nodemailer")
        const data = Object.fromEntries(formData.entries())

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: process.env.NEXT_EMAIL_USER,
                pass: process.env.NEXT_EMAIL_PASSWORD,
            }
        });


        try {

            transporter.verify(async function (error: any, success: any) {
                if (error) {
                    console.log('error', error);
                } else {
                    console.log("Server is ready to take our messages");

                    const info = await transporter.sendMail({
                        from: data.email,
                        to: process.env.NEXT_EMAIL_USER,
                        subject: data.subject,
                        text: data.text
                        // html: "<b>Hello world?</b>", // html body
                    });

                    console.log("Message sent: %s", info.messageId);

                }
            });

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className="container mx-auto px-4">
            <div className="my-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4276.050523350726!2d41.635257207721374!3d41.648192529758134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406786151e3f0a0f%3A0x7c6e5a872743c65!2zODQvODYg4YOk4YOQ4YOg4YOc4YOQ4YOV4YOQ4YOWIOGDm-GDlOGDpOGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDkeGDkOGDl-GDo-GDm-GDmCA2MDEw!5e0!3m2!1ska!2sge!4v1688888639296!5m2!1ska!2sge"
                    width="100%"
                    height="450"
                    style={{
                        border: 0
                    }}

                    loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>


            <div className="flex flex-wrap gap-10 my-10 justify-between items-start">
                <div className="">
                    <h3 className="text-lg mb-3">დაგვირეკეთ</h3>
                    <p className="text-slate-600 text-sm">(+995) 577 90 90 93/91</p>
                </div>

                <div className="">
                    <h3 className="text-lg mb-3">მოგვწერეთ</h3>
                    <p className="text-slate-600 text-sm"><a href="mailto:infovisitbatumi@gmail.com">infovisitbatumi@gmail.com</a></p>
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
                    <p className="text-slate-600 text-sm"><a href="https://visitbatumi.com" target="_blank" rel="noopener noreferrer">visitbatumi.com</a></p>
                    <p className="text-slate-600 text-sm"><a href="https://batumievents.com" target="_blank" rel="noopener noreferrer">batumievents.com</a></p>
                    <p className="text-slate-600 text-sm"><a href="https://visitajara.com" target="_blank" rel="noopener noreferrer">visitajara.com</a></p>
                    <p className="text-slate-600 text-sm"><a href="https://infoajara.com" target="_blank" rel="noopener noreferrer">infoajara.com</a></p>
                    <p className="text-slate-600 text-sm"><a href="https://batumibirdfest.com" target="_blank" rel="noopener noreferrer">batumibirdfest.com</a></p>
                </div>
            </div>

            <div className="divider"></div>


            <div className="card w-full bg-base-100 shadow-xl">
                {/* <h1 className="text-2xl mb-10">დაგვიკავშირდით</h1> */}

                <div className="card-body">
                    <h2 className="card-title">დაგვიკავშირდით</h2>
                    <form className="w-full md:w-1/3" action={sendMail}>
                        <div className="flex flex-col gap-4 my-6 w-full">
                            <Input name="name" label="სახელი" placeholder="თქვენი სახელი" required />
                            <Input name="email" type="email" label="ელ. ფოსტა" placeholder="ელ. ფოსტა" required />
                            <Input name="subject" label="სათაური" placeholder="თემის სათაური" required />
                            <div>
                                <textarea name="text" className="textarea textarea-bordered w-full" placeholder="ტექსტი" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-neutral">გაგზავნა</button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Page