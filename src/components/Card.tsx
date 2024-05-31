// import project1 from '../images/webp/thumbnail-project-1-small.webp'
// import project2 from '../images/webp/thumbnail-project-2-small.webp'
// import project3 from '../images/webp/thumbnail-project-3-small.webp'
// import project4 from '../images/webp/thumbnail-project-4-small.webp'
// import project5 from '../images/webp/thumbnail-project-5-small.webp'
// import project6 from '../images/webp/thumbnail-project-6-small.webp'


import React from 'react';

interface CardProps {
  title: string;
  language: string[];
  image:string
}

const Card: React.FC<CardProps> = ({ title, language, image }) => {
  return (
    <div className="p-6 overflow-hidden md:size-[500px] ">
      <img className="w-full h-64 object-cover" src={image} alt="" />
      <h3 className="text-2xl font-bold my-4 text-white">{title}</h3>
      <p className="text-gray-400">
      {language.join(', ')}
      </p>
      
    </div>
  );
};

export default Card;
