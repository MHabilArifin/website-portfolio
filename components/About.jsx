import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full md:h h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cils-3">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not normal ungraduated college student </p>
          <p className="py-2 text-gray-600">Hi, I am Muhammad Habil Arifin. Students who have not graduated majoring in Informatics Engineering from the University of the Informatics Institute and Darmajaya Business School.</p>
          <p className="py-2 text-gray-600">
            I am a person that enjoys challenges, seeks out chances to advance and improve, establish connections with numerous people, innovates, and makes an effort to make a difference in the industry that I work in as a back end
            developer.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest project</p>
        </div>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image className="rounded-xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="/" />
      </div>
    </div>
  );
};

export default About;
