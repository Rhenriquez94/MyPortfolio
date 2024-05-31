import Ring from "../images/icon/pattern-rings.svg";

const Skills = () => {
  return (
    <section className='grid-skills p-12 w-[90%] h-auto my-8 border-t-2 border-b-2 border-gray md:w-[100%]'>
        <div className=" h-28">
            <h1 className="text-center text-4xl font-bold text-white">HTML</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div className=" h-28">
            <h1 className="text-center text-4xl font-bold text-white">CSS</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div className=" h-28">
            <h1 className="text-center text-4xl font-bold text-white">Javascript</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div className=" h-16">
            <h1 className="text-center text-4xl font-bold text-white">Accesibility</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div className=" h-16">
            <h1 className="text-center text-4xl font-bold text-white">React</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div className=" h-16">
            <h1 className="text-center text-4xl font-bold text-white">Sass</h1>
            <p className="text-center text-base">4 Years Experience</p>
        </div>

        <div>
        <img
            src={Ring}
            alt="ring"
            className="left-48 z-0 absolute top-[1880px]"
          />
        </div>
    </section>
  )
}

export default Skills