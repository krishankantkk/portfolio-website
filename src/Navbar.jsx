import { useEffect, useState } from "react";

export default function Navbar() {
  const [opaque, setOpaque] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
     
      if (window.scrollY > 220) {
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const handleToggleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    setClosingAnimation(false);
  };


  const handleNavItemClick = () => {
    
    setMobileNavOpen(false);
  };

  return (
    <>
      <div
        className={`navbar-container flex justify-between items-center h-14 px-48 py-10 md:px-24 ${
          opaque && "bg-slate-950"
        }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
        }}
      >
        <div className="my-logo font-medium text-white">Krishan Kant</div>
        { 
          <div className=" text-md md:hidden toggle-icon text-white " onClick={handleToggleClick}>
          {mobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i> 
          ) : (
            <i className="fa-solid fa-bars"></i> 
          )}
        </div>
        }

        <div className="nav-links flex font-medium text-white justify-around gap-8">
          <a href="#" className="home">
            Home
          </a>
          <a href="#about-section" className="about">
            About
          </a>
          <a href="#skill-container" className="skill">
            Skills
          </a>
          <a href="#projects-container" className="project">
            Projects
          </a>
        </div>
      </div>

      <div
        className={`mobile-nav bg-slate-950 px-12 py-6 h-screen w-screen ${
          mobileNavOpen
            ? "slide-in-from-left block"
            : closingAnimation
            ? "slide-out-to-right" 
            : " hidden"
        }`}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        <div className="nav-links-mobile flex flex-col font-small text-white justify-around gap-4 mt-10">
          <a href="#" className="home" onClick={handleNavItemClick}>
            Home
          </a>
          <a
            href="#about-section"
            className="about"
            onClick={handleNavItemClick}
          >
            About
          </a>
          <a
            href="#skill-container"
            className="skill"
            onClick={handleNavItemClick}
          >
            Skills
          </a>
          
          <a
            href="#projects-container"
            className="project"
            onClick={handleNavItemClick}
          >
            Projects
          </a>
          
      
        </div>
      </div>
    </>
  );
}
