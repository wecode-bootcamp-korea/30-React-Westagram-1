import React, { useState } from 'react';

import './Feeds.scss';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { MdOutlineIosShare } from 'react-icons/md';
import { BsThreeDots, BsBookmarkFill } from 'react-icons/bs';

function Feeds() {
  let [commentText, setCommentText] = useState('');
  let [commentList, setCommentList] = useState([]);

  const commentChangeHandle = event => {
    setCommentText(event.target.value);
  };

  const addComment = comment => {
    setCommentList(commentList => [...commentList, comment]);
  };

  const commentUpload = event => {
    addComment(commentText);
    setCommentText('');
  };

  const commentEnterUpload = event => {
    if (event.key === 'Enter') {
      addComment(commentText);
      setCommentText('');
    }
  };
  return (
    <div className="feeds">
      <article className="article">
        <div className="feed-titlebox">
          <div className="feed-titleboxleft">
            <div className="feed-titlelogo">wecode</div>
            <div className="feed-title">
              <div className="title-name">wecode_bootcamp</div>
              <div className="title-author">wecode - 위코드</div>
            </div>
          </div>

          <div className="feed-config">
            <BsThreeDots />
          </div>
        </div>
        <div className="feed-img">
          <img
            src="/images/cheoljinPark/joshua-aragon-FGXqbqbGt5o-unsplash.jpg"
            alt="feed"
          />
        </div>
        <div className="feed-menus">
          <div className="feed-menusleft">
            <span className="menuslogo menusleft-heart">
              <AiTwotoneHeart />
            </span>
            <span className="menuslogo menusleft-comment">
              <BiCommentDetail />
            </span>
            <span className="menuslogo menusleft-share">
              <MdOutlineIosShare />
            </span>
          </div>
          <div className="feed-menusright">
            <div className="menusright-bookmark">
              <BsBookmarkFill />
            </div>
          </div>
        </div>

        <div className="feed-likebox">
          <div className="liker-profile">Hi</div>
          <div className="like-counter">
            <span className="bold">seungyoun_iain</span>님 외{' '}
            <span className="bold">4</span>명이 좋아합니다.
          </div>
        </div>
        <div className="feed-descripton">
          <span className="bold">wecode_bootcamp</span> "위코드는 단순
          교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개
          회사에서 오퍼를 받았습니다." - wecode 졸업생 강병진님...{' '}
          <span className="blur more">더 보기</span>
          <div className="blur timestamp">54분 전</div>
        </div>
        <div className="feed-commentbox">
          <ul className="feed-commentlist">
            {commentList.map((comment, idx) => (
              <li key={idx} className="comment-fadein">
                <span className="newcomment-id">Bueong</span>
                <span className="newcomment-text">{comment}</span>
              </li>
            ))}
          </ul>
          <div className="feed-comment">
            <input
              className="comment-text"
              placeholder="댓글 달기..."
              onChange={commentChangeHandle}
              onKeyDown={commentEnterUpload}
            />
            <button className="comment-add blur" onClick={commentUpload}>
              게 시
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
