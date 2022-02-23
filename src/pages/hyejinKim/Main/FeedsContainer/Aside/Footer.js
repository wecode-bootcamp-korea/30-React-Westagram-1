import { FOOTER_INFO } from './footerData.js';
import './Footer.scss';

// Q. 푸터인포 파일은 로컬에서 관리하나요? 파일 경로 어디로 하면 되는지.. (src? public?)
// Q. map으로 렌더링은 했는데, 3~4개씩 붙어서 나오게 하려면?? 원래는 <div> 안에 글자를 그대로 적어줬음

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
      <p className="copyright">2019 INSTAGRAM</p>
    </footer>
  );
}

export default Footer;
