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
          const {
            id,
            userName,
            address,
            feedImg,
            likeUserImg,
            firstLikeUser,
            likeCount,
            content,
            feedCommentList,
          } = feed;
          return (
            <Feed
              key={id}
              userName={userName}
              address={address}
              profileImg={feedImg}
              likeUserImg={likeUserImg}
              firstLikeUser={firstLikeUser}
              likeCount={likeCount}
              content={content}
              feedImg={feedImg}
              feedCommentList={feedCommentList}
            />
          );
        })}
      </div>
      <Aside />
    </main>
  );
}

export default FeedsContainer;
