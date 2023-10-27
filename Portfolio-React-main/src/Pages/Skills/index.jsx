import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaLess, FaJs, FaReact, FaPython, FaPhp, FaDatabase, FaDocker, FaFigma, FaLinux } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import './style.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#2965f1' },
  { name: 'LESS', icon: <FaLess />, color: '#1D365D' },
  { name: 'JS', icon: <FaJs />, color: '#F0DB4F' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Python', icon: <FaPython />, color: '#3572A5' },
  { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
  { name: 'MySQL', icon: <FaDatabase />, color: '#F24E1E' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
  { name: 'Office365', icon: <FiAtSign />, color: '#0078D7' },
];

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(skillsRef.current);

    return () => {
      observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <h2 className="section-title">Skills & Sobre mim</h2>
      <div className="skills-container">
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
        <div className="skills-text">
        <p>Educação <br></br>
            Colégio Cotemig <br></br>
            (Previsão de conclusão: em 2023) <br></br>
            Técnico em informática  <br></br>
            Unidade: Floresta <br></br>
            3ª série - Manhã</p>
        
          <p>Informações Pessoais <br></br>
            Nome: Amin Morais <br></br>
            Idade: 17 anos <br></br>
            Email : aminayad56@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
