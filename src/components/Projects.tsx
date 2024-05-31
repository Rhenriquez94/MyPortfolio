import project1 from '../images/webp/thumbnail-project-1-small.webp'
import project2 from '../images/webp/thumbnail-project-2-small.webp'
import project3 from '../images/webp/thumbnail-project-3-small.webp'
import project4 from '../images/webp/thumbnail-project-4-small.webp'
import project5 from '../images/webp/thumbnail-project-5-small.webp'
import project6 from '../images/webp/thumbnail-project-6-small.webp'

import Card from "./Card";



interface Proyects {
  id: number;
  title: string;
  language: string[];
  image:string
}

const proyects: Proyects[] = [
  { id: 1, title: 'DESIGN PORTFOLIO', language: ['HTML','CSS'], image:project1},
  { id: 2, title: 'E-LEARNING LANDING PAGE',language: ['HTML','CSS'],image:project2 },
  { id: 4, title: 'TODO WEB APP', language: ['HTML','CSS','JAVASCRIPT'],image:project3},
  { id: 5, title: 'ENTERTAINMENT WEB APP', language: ['HTML','CSS','JAVASCRIPT'],image:project4 },
  { id: 6, title: 'MEMORY GAME', language: ['HTML','CSS','JAVASCRIPT'],image:project5 },
  { id: 7, title: 'ART GALLERY SHOWCASE', language: ['HTML','CSS','JAVASCRIPT'],image:project6 },
  
];

const Proyects: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
      <div className='flex flex-row justify-between items-center p-0 m-0'>
        <h1 className="text-5xl font-bold m-0 p-0 text-white">Proyects</h1>
        <h2 className="text-xl border-b-2 border-[#4ee1a0] m-0 p-0">CONTACT ME</h2>
      </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-30 md:mt-10">
          {proyects.map((proyecto) => (
            <Card
              key={proyecto.id}
              title={proyecto.title}
              language={proyecto.language}
              image={proyecto.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects;