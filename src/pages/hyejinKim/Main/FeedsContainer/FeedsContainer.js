import './FeedsContainer.scss';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';

function FeedsContainer() {
  return (
    <main className="feedsContainer">
      <div className="feeds">
        <Feed />
        <Feed />
      </div>
      <Aside />
    </main>
  );
}

export default FeedsContainer;
