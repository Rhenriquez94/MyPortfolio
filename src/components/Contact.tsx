import IcoGitHub from "../images/icon/iconGithub.svg";
import IcoLinkedIn from "../images/icon/icon-linkedin.svg";
import IcoTwitter from "../images/icon/icon-twitter.svg";

const Contact = () => {
  return (
    <>
        <section className="bg-form flex flex-col gap-8 py-8 px-7 w-full md:p-20 md:flex md:flex-row md:justify-center">
        <div className="md:w-[445px] flex flex-col justify-center w-72 text-center md:text-left ml-10">
            <h1 className="pt-4 text-white text-4xl mb-9">CONTACT</h1>
            <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
            </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex flex-row w-full md:w-[330px]">
            <form action="">
                <input
                className="bg-form h-11 w-full md:w-[312px] mt-8"
                type="text"
                placeholder="Name"
                />
                <input
                className="bg-form h-11 w-full md:w-[312px] mt-8"
                type="email"
                placeholder="Email"
                />
                <input
                className="bg-form h-11 w-full md:w-[312px] mt-8"
                type="text"
                placeholder="Message"
                />
            </form>
            </div>
            <div className="flex flex-col md:flex-row"></div>
        </div>

        </section>

        <div className="bg-form pb-9 w-full">
            <p className="p-0 md:w-[118px] md:ml-[1230px] h-auto border-b-2 bg-form w-32 ml-60" style={{ borderColor: "#4ee1a0" }}>
                Send Message
            </p>
        </div>


 

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
  );
};

export default Contact;
