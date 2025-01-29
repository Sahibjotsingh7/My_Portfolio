import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import MySkills from "./MySkills";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading" >About Me</h1>
          <p
            className="about--section--description"
        
          >
            Aspiring Software Engineer with a strong foundation in MERN stack
            development, database management, and object-oriented programming.
            Adept at creating scalable web applications and passionate about
            delivering user-friendly solutions.
          </p>
          <p
            className="about--section--description"
          >
            Proficient in integrating modern tools and technologies to build
            innovative projects that solve real-world problems. Enthusiastic
            about learning and applying new concepts to advance in the tech
            industry.
          </p>
        </div>
        <div style={{marginTop:"50px"}}>
           <FaGraduationCap size={100} style={{}}/>
         
          <h1  style={{marginBottom:"10px"}}>Education</h1>
          <span style={{fontSize:"1rem" , color:"green"}}>2022 - Present</span>
          <h2>Bachlor's of  Computer Science Engineering</h2>
          <p className="about--section--description">Chitkara University, Punjab, Rajpura City</p>
        </div>
      </div>

      <div>
        <h1 style={{paddingTop:"50px"}}>Skill Set</h1>
        <MySkills/>
      </div>
    </section>
  );
}
