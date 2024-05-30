import Card from "./Card";

const Projects = () => {
  return (
    <section>
      <div className="flex flex-row justify-between w-auto gap-14 my-16">
        <h1 className="text-center text-5xl font-bold text-white">Projects</h1>
        <h2
          className="text-lg border-b-2 m-0 p-0 flex items-center"
          style={{ borderColor: "#4ee1a0" }}
        >
          CONTACT ME
        </h2>
      </div>

      <Card />
    </section>
  );
};

export default Projects;
