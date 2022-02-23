import React, { useState, useEffect } from 'react';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './FeedsContainer.scss';

function FeedsContainer() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/hyejinKim/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <main className="feedsContainer">
      <div className="feeds">
        {feedList.map(feed => {
          return (
            <Feed
              key={feed.id}
              userName={feed.userName}
              address={feed.address}
              profileImg={feed.feedImg}
              likeUserImg={feed.likeUserImg}
              firstLikeUser={feed.firstLikeUser}
              likeCount={feed.likeCount}
              content={feed.content}
              feedImg={feed.feedImg}
            />
          );
        })}
      </div>
      <Aside />
    </main>
  );
}

export default FeedsContainer;
