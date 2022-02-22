import { INFO_LIST } from './footerData.js';
import './Footer.scss';

function Footer() {
  /*
  const [INFO_LIST, setINFO_LIST] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/hyejinKim/footerData.json')
      .then(res => res.json())
      .then(data => {
        setINFO_LIST(data);
      });
  }, []);
*/
  return (
    <footer className="footer">
      <ul>
        {INFO_LIST.map(info => {
          return (
            <li key={info.id}>
              <a href={info.url}>{info.name}</a>
            </li>
          );
        })}
        <p className="copyright">2019 INSTAGRAM</p>
      </ul>
    </footer>
  );
}

export default Footer;
