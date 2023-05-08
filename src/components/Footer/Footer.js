import linkedIn from "../../images/icons/linkedIn.svg";
import gitHub from "../../images/icons/gitHub.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/PaulMaistrenko" target="_blank" rel="noreferrer">
                <img src={linkedIn} alt="gitHub" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/pavlomaistrenko/" target="_blank" rel="noreferrer">
                <img src={gitHub} alt="linkedIn" />
              </a>
            </li>
        </ul>
      </div>
  </div>
  </footer>
  )
}