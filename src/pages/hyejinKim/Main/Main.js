import './Main.scss';
import '../../../styles/scss/variables.scss';
import Nav from '../../../components/Nav/Nav';
import FeedsContainer from './FeedsContainer/FeedsContainer';

function Main() {
  return (
    <div className="main">
      <Nav />
      <FeedsContainer />
    </div>
  );
}

export default Main;
