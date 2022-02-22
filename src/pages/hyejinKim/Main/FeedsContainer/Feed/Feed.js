import './Feed.scss';
import CommentList from './CommentList';
import React, { useState, useEffect, useRef } from 'react';

function Feed({
  userName,
  address,
  firstLikeUser,
  likeCount,
  content,
  imgURL,
}) {
  const [comment, setComment] = useState(''); // 댓글 내용
  const [commentList, setCommentList] = useState([]); // 댓글 내용만 모아놓은 배열
  const ref = useRef();
  let strs = '';

  const getComment = e => {
    strs += e.target.value;
    setComment(strs);
  };

  const addComment = e => {
    e.preventDefault();
    let userName = `test04`;
    let content = comment; // 지금 내가 input에 친 댓글 내용 저장
    let nextObj = { userName, content };
    setCommentList([...commentList, nextObj]);
    // 빈 문자열로 input 초기화
    ref.current.value = '';
    setComment([]);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/hyejinKim/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <article className="feed">
      <div className="profileContainer">
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile00.jpg"
          />
          <div className="profile-info">
            <h3 className="profile-id">{userName}</h3>
            <h3 className="profile-bottom">{address}</h3>
          </div>
        </div>
        <img
          alt="dotMenu"
          src="/images/hyejinKim/option.png"
          className="dotMenu"
        />
      </div>
      <div className="feedImage">
        <img alt="feedImg" src={imgURL} />
      </div>
      <div className="feedImageBottom">
        <div className="feedMenu">
          <div className="feedMenu-left">
            <div
              className="postLikeBtn postLikeBtn-white"
              onClick="postLike(event)"
            />
            <img alt="chatIcon" src="/images/hyejinKim/chat.png" />
            <img alt="shareIcon" src="/images/hyejinKim/share.png" />
          </div>
          <div className="feedMenu-right">
            <img
              alt="bookMarkIcon"
              className="bookMarkBtn"
              src="./images/hyejinKim/bookmark.png"
            />
          </div>
        </div>
        <div className="likeCount">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile04.png"
          />
          <p>
            <b id="likeUser">{firstLikeUser}</b>님 외
            <b id="likeUserCnt"> {likeCount}명</b>이 좋아합니다
          </p>
        </div>
        <p className="postArea">
          <b id="postUser">{userName} </b>
          <span className="postContent">{content}</span>
          <b className="morePost">더 보기</b>
        </p>
        <CommentList commentList={commentList} />
        <p className="postTime">42분 전</p>
      </div>
      <form className="commentWrite" onSubmit={addComment}>
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onKeyPress={getComment}
          ref={ref}
        />
        <button className="commentBtn" type="submit">
          게시
        </button>
      </form>
    </article>
  );
}

export default Feed;
