import IcoGitHub from "../images/icon/iconGithub.svg";
import IcoLinkedIn from "../images/icon/icon-linkedin.svg";
import IcoTwitter from "../images/icon/icon-twitter.svg";

const Contact = () => {
    return (
        <>
            <section className=" bg-form flex flex-col gap-8 py-8 px-7 w-auto">
                <h1 className="pt-4 text-center text-white text-4xl">CONTACT</h1>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                <div className="w-auto">
                    <form action="">
                        <input className=" bg-form h-11 w-[312px] mt-8" type="text" placeholder="Name" />
                        <input className=" bg-form h-11 w-[312px] mt-8" type="email" placeholder="Email" />
                        <input className=" bg-form h-11 w-[312px] mt-8" type="text" placeholder="Message" />
                    </form>
                </div>
                <div className="flex justify-end p-8">
                    <div className="w-[144px] h-auto border-b-2 p-0" style={{ borderColor: "#4ee1a0" }}>
                        <p className="p-0">Send Message</p>
                    </div>
                </div>
            </section>
            
            <footer className="bg-form w-full h-40 flex flex-col justify-center gap-8 items-center p-4 border-t-2">
                <h1 className=" text-2xl font-bold text-white">adamkeyes</h1>
                <div className="flex flex-row gap-10">
                    <img
                        src={IcoGitHub}
                        alt="GitHub Icon"
                        className="w-7 h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                    />
                    <img
                        src={IcoLinkedIn}
                        alt="LinkedIn Icon"
                        className="w-7 h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                    />
                    <img
                        src={IcoTwitter}
                        alt="Twitter Icon"
                        className="w-7 h-7 md:w-8 md:h-8 lg:w-8 lg:h-8"
                    />
                </div>
            </footer>
        </>
    )
}

export default Contact