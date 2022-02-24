import React, { useState } from 'react';
import CommentList from './CommentList';
import './Feed.scss';

function Feed({
  userName,
  address,
  profileImg,
  likeUserImg,
  firstLikeUser,
  likeCount,
  content,
  feedImg,
  feedCommentList,
}) {
  // Q. 스테이트를 여기다 두면, 새로운 댓글 추가할 때마다 피드 통째로 재렌더링 되는데 맞는건지..?
  // commentList를 쓰는 형제 관계의 태그가 있어서 Feed에 둠..
  // CommentList 컴포넌트에 댓글 목록 + 댓글 쓰는 인풋까지 합치려고 했는데 postTime도 함께 들어가야해서 안했음

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]); // 댓글 내용만 모아놓은 배열
  const isCommentValid = comment.length >= 1;

  const getComment = e => {
    setComment(comment);
  };

  const addComment = e => {
    e.preventDefault();
    const id = commentList.length + 1;
    const userName = `test04`;
    const content = comment;
    setCommentList([...commentList, { id, userName, content }]);
    setComment(''); // 인풋 초기화
  };

  return (
    <article className="feed">
      <div className="profileContainer">
        <div className="profile">
          <img alt="profileImg" src={profileImg} />
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
        <img alt="feedImg" src={feedImg} />
      </div>
      <div className="feedImageBottom">
        <div className="feedMenu">
          <div className="feedMenu-left">
            <div
              className="postLikeBtn postLikeBtn-white"
              // onClick="postLike(event)"
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
          <img alt="likeUserImg" src={likeUserImg} />
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
        <CommentList
          commentList={commentList}
          feedCommentList={feedCommentList}
        />
        <p className="postTime">42분 전</p>
      </div>
      <form className="commentWrite" onSubmit={addComment}>
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={getComment}
        />
        <button
          className={`commentBtn ${isCommentValid ? 'commentBtnLive' : ''}`}
          type="submit"
          disabled={!isCommentValid}
        >
          게시
        </button>
      </form>
    </article>
  );
}

export default Feed;
