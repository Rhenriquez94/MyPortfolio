import IcoLinkedIn from "../images/icon/iconLinkedin.tsx";
import Ring from "../images/icon/pattern-rings.svg";

import AvatarDesktop from "../images/webp/image-profile-desktop.webp";
import AvatarMobile from "../images/webp/image-profile-mobile.webp";
import Circle from "../images/icon/pattern-circle.svg";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mx-auto ">
          <div>
            <h1 className="text-4xl text-white mb-4 md:mb-0">adamkeyes</h1>
          </div>
          <div className="flex flex-row gap-5 z-10 mt-4 md:mt-0">
            <IcoLinkedIn/>
          </div>

        </div>
        <div>
          <img
            src={Ring}
            alt="ring"
            className="absolute top-50 transform -translate-x-80 w-72 max-w-full"
          />
        </div>


        <div className=" -mt-40 md:mt-0 md:h-[800px]">
          <picture>
            <source media="(min-width: 1024px)" srcSet={AvatarDesktop} />
            <img
              src={AvatarMobile}
              className="w-[80%] sm:w-[445px] h-auto md:-mt-20 mx-auto md:mx-0 md:ml-[800px]"
              alt="Description of image"
            />
          </picture>
          <img
            src={Circle}
            alt="ring"
            className="absolute top-[430px] left-80 w-24 sm:w-48 max-w-full md:left-[1050px]"
          />
       
        <div className="mt-20 relative z-10 md:bottom-[500px]">
          <div className="md:mt-20 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl xl:text-8xl text-white">
              Nice to meet you!
            </h1>
            <h1 className="text-4xl md:text-5xl xl:text-8xl text-white">
              I'm{" "}
              <span className="border-b-2" style={{ borderColor: "#4ee1a0" }}>
                Adam Keyes.
              </span>
            </h1>
          </div>
          <div className="mt-20 text-center px-4 md:text-left md:w-[450px] md:pl-0">
            <p className="text-[18px] m-0 max-w-md mx-auto">
              Based in the UK, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
          <div className="mt-20 w-[130px] m-0 mx-auto my-20 md:mx-0">
            <h2
              className="text-xl border-b-2 m-0"
              style={{ borderColor: "#4ee1a0" }}
            >
              CONTACT ME
            </h2>
          </div>
          </div>




        </div>
      </section>
    </>
  );
};

export default Hero;
