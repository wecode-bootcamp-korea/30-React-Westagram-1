import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/variables.scss';
import Feed from './Feed';
import MainRight from './MainRight';
import { useState, useEffect } from 'react';

function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younghyunHan/feedData.json')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main>
        <div className="feeds">
          {articles.map((content, index) => {
            return (
              <div key={index}>
                <Feed
                  userName={content.userName}
                  feedImg={content.feedImg}
                  userMan={content.userMan}
                  profileLogo={content.profileLogo}
                />
              </div>
            );
          })}
        </div>
        <MainRight />
      </main>
    </div>
  );
}

export default Main;
