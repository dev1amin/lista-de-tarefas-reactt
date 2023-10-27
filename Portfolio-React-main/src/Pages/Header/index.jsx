import React, { useState, useEffect } from 'react';
import './init.css';
import arrumado from '../../assets/arrumado.png';

function Init() {
  const [typedText, setTypedText] = useState('');
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const text = 'fullstacker junior';

    let currentText = '';

    const type = () => {
      if (currentText === text) {
        setAnimationCompleted(true);
        return;
      }

      currentText = text.substring(0, currentText.length + 1);
      setTypedText(currentText);
      setTimeout(type, 100);
    };

    type();
  }, []);

  return (
    <div className="portfolio-container">
      <header>
        <ul className="header">
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </header>

      <section className="main-section">
        <div className="center-texts">
          <div className="text-container">
            <h1>Olá, <br></br> eu sou o Amin</h1>
            <h2>{typedText}</h2>
          </div>
              <img src={arrumado} className="image-animation"/>
        </div>

        <div className="scroll-icons">
          <div className="scroll-down">&#8595;</div>
          <div className="scroll-up">&#8595;</div>
        </div>
      </section>
    </div>
  );
}

export default Init;
