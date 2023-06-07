import javaScript from '../../images/icons/Javascript.png';
import reactJs from '../../images/icons/react.svg';
import typeScript from '../../images/icons/typescript.svg';
import redux from '../../images/icons/redux.png';
import html from '../../images/icons/html.png';
import css from '../../images/icons/css.png';
import figma from '../../images/icons/figma.png';
import git from '../../images/icons/git-bash.svg';

export const About = () => {
  return (
    <main>
      <section className="about">
        <div className="about__content">
          <h1 className="about__content-title">
            <strong>Hi, my name is <br /> <em>Pavlo Maistrenko</em></strong><br />
            a frontend developer
          </h1>
          <div className="about__content-text">
            <p>with passion to creating and improving.</p>
          </div>
          <a
            href="../../files/CV Pavlo Maistrenko FrontEnd.pdf"
            className="button"
            download
          >
            Download CV
          </a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content-list">
          <h2 className="title-1">Frontend skills</h2>
            <div className="skills">
              <div className="skill">
                <img src={javaScript} alt="JavaScript" />
                JavaScript
              </div>
              <div className="skill">
                <img src={reactJs} alt="ReactJS" />
                ReactJS
              </div>
              <div className="skill">
                <img src={typeScript} alt="TypeScript" />
                TypeScript
              </div>
              <div className="skill">
                <img src={redux} alt="Redux" />
                Redux
              </div>
              <div className="skill">
                <img src={html} alt="HTML" />
                HTML
              </div>
              <div className="skill">
                <img src={css} alt="CSS" />
                CSS
              </div>
              <div className="skill">
                <img src={figma} alt="Figma" />
                Figma
              </div>
              <div className="skill">
                <img src={git} alt="Git" />
                Git
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
