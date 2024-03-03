import profileImg from "./assets/IMG_9102.jpg";
export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-5 justify-between py-20 bg-slate-900 w-full "
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Krishan Kant <span className="wave">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            I'm Krishan Kant from{" "}
            <span className="text-sky-500"> NIT Jaipur</span>, and I possess
            many skills that could greatly benefit your organization. Proficient
            in <span className="text-sky-500">C/C++</span>, and{" "}
            <span className="text-sky-500">Javascript</span> and I have Solved{" "}
            <span className="text-sky-500"> 400+</span> DSA problems on{" "}
            <span className="text-sky-500">
              {" "}
              <a href="https://leetcode.com/krishan_kant15/">Leetcode</a>
            </span>
            ,{" "}
            <span className="text-sky-500">
              {" "}
              <a href="https://auth.geeksforgeeks.org/user/xyzkk2000">GFG</a>
            </span>
            , and{" "}
            <span className="text-sky-500">
              {" "}
              <a href="https://www.hackerrank.com/profile/KRISHANKANT1508">
                Hackerank
              </a>
            </span>
            .
            <br />
            <br />
            <p>
              My expertise in{" "}
              <span className="text-sky-500">
                HTML, CSS, JavaScript, ReactJs, TailwindCSS, Bootstrap
              </span>{" "}
              equips me for front-end development, while my grasp of{" "}
              <span className="text-sky-500"> MySQL</span> and{" "}
              <span className="text-sky-500"> Nodejs</span> empowers me in
              back-end and data tools.
              <br />
              <br />
              My grasp on{" "}
              <span className="text-sky-500">
                {" "}
                Data Structures, Algorithms, OOPs,
              </span>{" "}
              and <span className="text-sky-500">GitHub</span> highlights my
              commitment to crafting efficient and sustainable code. I'm
              confident that these skills, along with my dedication to
              continuous improvement, would make me an invaluable addition to
              your team.
            </p>
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Beyond programming, I am a{" "}
            <span className="text-sky-500">continuous learner</span>, always
            eager to explore new technologies and expand my skill set. I believe
            in the power of lifelong learning to foster personal and
            professional growth
          </p>
        </div>

        <img
          src={profileImg}
          alt="krishan kant -img"
          className="text-white img-krishan"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "40vw",
            height: "50vh",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
