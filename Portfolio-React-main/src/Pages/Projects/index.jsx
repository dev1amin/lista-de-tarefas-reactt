import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './project.css';

function Project() {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/dev1amin/repos');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          throw new Error('Erro ao obter os projetos');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const response = await fetch(project.languages_url);
          if (response.ok) {
            const data = await response.json();
            const languages = Object.keys(data);
            return { ...project, languages };
          } else {
            return project;
          }
        })
      );
      setProjects(updatedProjects);
    };

    fetchLanguages();
  }, [projects]);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#F0DB4F',
      HTML: '#E34F26',
      CSS: '#2965f1',
      Python: '#3572A5',
    };

    return colors[language] || '#333';
  };

  useEffect(() => {
    if (showAllProjects) {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.slice(0, 4));
    }
  }, [showAllProjects, projects]);

  const handleShowMoreClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  const filteredProjects = displayedProjects.filter((project) => project.name !== 'dev1amin');


  
  return (
    <section className="main-section">
      <div className="projects-section">
        <h2 className="section-title">Projetos</h2>
        <ul className="projects-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://raw.githubusercontent.com/dev1amin/${project.name}/main/images/index.png`}
                  alt={project.name}
                  className="project-image"
                />
                <span className="project-name">{project.name}</span>
                <div className="project-languages">
                  {project.languages &&
                    project.languages.map((language) => (
                      <span
                        key={language}
                        className="project-language"
                        style={{ color: getLanguageColor(language) }}
                      >
                        {language}
                      </span>
                    ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
        {projects.length > 3 && (
          <button className="show-more-button" onClick={handleShowMoreClick} onFocus={(e) => e.target.blur()}>
            {showAllProjects ? 'Mostrar Menos' : 'Mostrar Mais'}
          </button>
        )}
      </div>
    </section>
  );
}

export default Project;
