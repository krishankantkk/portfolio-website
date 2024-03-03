
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        
      >
        <p className="name font-medium text-white text-8xl content-center">
          Krishan <span className="text-sky-500">Kant</span>
        </p>
        <p className="title text-white text-2xl">
         Aspiring Software Developer & frontend Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:kantk1508@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1XRLGGQQzmEjVw4iWqTdZV5mRaVPEVbij/view"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/krishan-kant-2828aa217/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/krishankantkk" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/Krishankant1579" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
