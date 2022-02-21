import React, { useState, useEffect } from 'react';
import './FeedsContainer.scss';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';

function FeedsContainer() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/hyejinKim/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  console.log(feedList);

  return (
    <main className="feedsContainer">
      <div className="feeds">
        {feedList.map(feed => {
          return (
            <Feed
              key={feed.id}
              userName={feed.userName}
              address={feed.address}
              firstLikeUser={feed.firstLikeUser}
              likeCount={feed.likeCount}
              content={feed.content}
              imgURL={feed.imgURL}
            />
          );
        })}
      </div>
      <Aside />
    </main>
  );
}

export default FeedsContainer;
