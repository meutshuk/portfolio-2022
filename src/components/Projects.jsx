import React from "react";
import Calculator from "./images/calculator.png";
import Etch from "./images/etch-a-sletch.png";
import MemoryCard from "./images/memory-card.png";
import Chatbot from "./images/chatbot.png";
import Weather from "./images/weather-app.png";
import Shopping from "./images/shopping-cart.png";
import DevtoClone from "./images/dev.png";
import Cards from "./Cards";

export default function Projects() {
  const projectsObj = [
    {
      name: "Chatbot",
      image: Chatbot,
      gitLink: "https://github.com/meutshuk/utshukAppliedProject",
      link: "https://chatbot1121.pythonanywhere.com",
    },
    {
      name: "Dev.to Clone",
      image: DevtoClone,
      gitLink: "https://github.com/meutshuk/instagram",
      link: "https://instagram-meutshuk.vercel.app/utshuk",
    },
    {
      name: "Calculator",
      image: Calculator,
      gitLink: "https://github.com/meutshuk/calculator",
      link: "https://meutshuk.github.io/calculator/",
    },
    {
      name: "Etch-a-Sketch",
      image: Etch,
      gitLink: "https://github.com/meutshuk/etch-a-sketch",
      link: "https://meutshuk.github.io/etch-a-sketch/",
    },
    {
      name: "Memory Card",
      image: MemoryCard,
      gitLink: "https://github.com/meutshuk/memory-card",
      link: "https://meutshuk.github.io/memory-card/",
    },
    {
      name: "Weather App",
      image: Weather,
      gitLink: "https://github.com/meutshuk/weather-app",
      link: "https://meutshuk.github.io/weather-app/",
    },
    // {
    //   name: "Shopping App",
    //   image: Shopping,
    //   gitLink: "https://github.com/meutshuk/shopping-cart",
    //   link: "https://meutshuk.github.io/shopping-cart/",
    // },
  ];

  const card = projectsObj.map((item) => {
    return (
      <Cards
        key={item.name}
        name={item.name}
        image={item.image}
        gitLink={item.gitLink}
        link={item.link}
      />
    );
  });

  return (
    <div
      className="xl:h-screen h-full flex flex-col items-center"
      id="projects"
    >
      <div className="mt-10 text-4xl">Projects</div>
      <div className=" py-20 px-10 grid xl:grid-cols-3 grid-cols-1 auto-rows-auto gap-x-4 gap-y-8 items-stretch md:grid-cols-2 justify-evenly content-evenly justify-items-center">
        {card}
      </div>
    </div>
  );
}
