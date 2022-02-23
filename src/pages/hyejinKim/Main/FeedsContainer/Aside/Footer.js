import { FOOTER_INFO } from './footerData.js';
import './Footer.scss';

// Q. 푸터인포 파일은 로컬에서 관리하는게 맞나요?

function Footer() {
  return (
    <footer className="footer">
      <ul>
        {FOOTER_INFO.map((info, index) => {
          return (
            <li key={info.id}>
              <a href={info.url}>{info.name}</a>
              {index !== FOOTER_INFO.length - 1 ? (
                <span>&nbsp;·&nbsp;</span>
              ) : null}
            </li>
          );
        })}
      </ul>
      <p className="copyright">2022 INSTAGRAM</p>
    </footer>
  );
}

export default Footer;
