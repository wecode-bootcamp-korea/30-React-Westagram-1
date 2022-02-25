import Nav from '../../../components/Nav/Nav';
import FeedsContainer from './FeedsContainer/FeedsContainer';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <Nav />
      <FeedsContainer />
    </div>
  );
}

export default Main;
