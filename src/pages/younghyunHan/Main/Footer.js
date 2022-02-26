import './Footer.scss';
import footerData from './FooterData';

function Footer() {
  return (
    <div>
      {footerData.map(data => {
        return (
          <div key={data.id} className="companyInformation">
            {data.content}
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
