import React from "react";
import TagSphere from "./TagSphere.tsx";

export const About = () => {
  const MyComponent = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);

      // Return a function from the effect that removes the event listener
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ? (
      <TagSphere width="30" radius="200" />
    ) : (
      <TagSphere width="50" radius="300" />
    );
  };
  return (
    <div className="h-full md:h-screen flex items-center flex-col justify-center py-10 md:px-10 " id="about">
      <div className="flex items-center flex-col md:flex-row basis-0 container">
        <div className="flex-1 justify-center text-sm md:text-2xl basis-0">
          <div className=" md:text-4xl mb-11 font-bold  ">About Me</div>
          <p>
            Namaste, im Utshuk, a recent graduate and a Full-stack developer
            located in Sydney, Australia who spends money on a camera and never
            uses it but enjoys learning from working on complex projects, is
            looking for an opportunity to kickstart career in Web development.
          </p>
          <p>
            I love JS and Python and I am currently learning NodeJS and Backend
            from theodinproject.
          </p>
        </div>
        <div className="flex-1 justify-center flex basis-0">
          <MyComponent />
        </div>
      </div>
    </div>
  );
};
