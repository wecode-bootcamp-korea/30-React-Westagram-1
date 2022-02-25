import { FOOTER_INFO } from './footerData.js';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <ul>
        {FOOTER_INFO.map((info, index) => {
          return (
            <li key={info.id} className="footerList">
              <a href={info.url} className="footerLink">
                {info.name}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">2022 INSTAGRAM</p>
    </footer>
  );
}

export default Footer;
