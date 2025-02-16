import React from "react";
import { FaJs, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMongodb, SiMysql, SiGit } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";

import { BiLogoCPlusPlus } from "react-icons/bi";

import { FaLinux } from "react-icons/fa";

import { FaNetworkWired } from "react-icons/fa";

import { FaAws } from "react-icons/fa";

import { MdOutlineDataObject } from "react-icons/md";


import { RiTailwindCssFill } from "react-icons/ri";
<RiTailwindCssFill />
const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "Java", icon: <FaJava />, color: "red" },
        {name:"C/C++" , icon : <BiLogoCPlusPlus/> , color:"blue"},
        { name: "Python", icon: <FaPython />, color: "greenyellow" },
      ],
    },
    {
      category: "Libraries/Frameworks",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <FaNodeJs />, color: "#000000" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Mongoose", icon: <FaDatabase />, color: "#800000" },
      ],
    },
    {
      category: "Tools/Platforms",
      items: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
        { name: " EC2", icon: <FaAws />, color: "gray" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    
    {
      category: "Other Course Work",
      items: [
        { name: "Computer Networks", icon: <FaNetworkWired />, color: "black" },
        { name: "Operating System", icon: <FaReact />, color: "#61DAFB" },
        { name: "Linux", icon: <FaLinux />, color: "#4479A1" },
        { name: "OOP", icon: <MdOutlineDataObject />, color: "orange" },
        { name: "DBMS", icon: <FaDatabase />, color: "#4DB33D" },
        { name: "HTML", icon: <FaHtml5 />, color: "red" },
        { name: "CSS", icon: <FaCss3Alt />, color: "blue" },
        { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "Tailwind", icon: <RiTailwindCssFill/>, color: "pink" },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      {skills.map((skillCategory, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.categoryTitle}>{skillCategory.category}</h3>
          <div className="skill-shows" style={styles.iconContainer} >
            {skillCategory.items.map((item, idx) => (
              <div key={idx} style={{ ...styles.skillItem, backgroundColor: "white"  , color:"black"}}>
                <span style={{...styles.icon , color:item.color }}>{item.icon}</span>
                <span style={{...styles.skillName , marginLeft:"5px"}}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  
  
  categoryTitle: {
    fontSize: "1.5rem",
    margin: "10px  5px 0 0",
    color: "#333",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "5px",
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
    color: "#fff",
    width:"120px",
    fontSize: "1rem",
    boxShadow: " 2px 4px 6px 2px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    padding:"4px",
    borderRadius:"5px"
  },
  skillItemHover: {
    transform: "scale(1.1)",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "10px",
    display:"flex",
    paddingTop:"10px"
  },
  skillName: {
    fontSize: "0.9rem",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default SkillsSection;
