import './Feed.scss';
import Comment from './Comment';
import { useState } from 'react';

function Feed() {
  const [cmtContents, setCmtContents] = useState([]);

  const onKeyPress = e => {
    let nextContent = e.target.value;
    if (e.code === 'Enter') {
      setCmtContents([...cmtContents, nextContent]);
    }
  };

  // const handleBtn = e => {
  //   let nextContent = e.target.value;
  //   setCmtContents([...cmtContents, nextContent]);
  // };

  return (
    <article className="feed">
      <div className="profileContainer">
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile00.jpg"
          />
          <div className="profile-info">
            <h3 className="profile-id">tyui3185</h3>
            <h3 className="profile-bottom">서울, 세운상가</h3>
          </div>
        </div>
        <img
          alt="dotMenu"
          src="/images/hyejinKim/option.png"
          className="dotMenu"
        />
      </div>
      <div className="feedImage">
        <img alt="feedImg" src="/images/hyejinKim/feedImage01.png" />
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
            <b id="likeUser">aineworld</b>님 외<b id="likeUserCnt">10명</b>이
            좋아합니다
          </p>
        </div>
        <p className="postArea">
          <b id="postUser">tyui3185 </b>
          <span className="postContent">
            위코드 사람들과 함께 산책 중입니다 어때요 룰루랄라~~
          </span>
          <b className="morePost">더 보기</b>
        </p>
        <div className="commentPrint">
          {cmtContents.map((content, index) => {
            return (
              <div key={index}>
                <Comment content={content} />
              </div>
            );
          })}
        </div>
        <p className="postTime">42분 전</p>
      </div>
      <div className="commentWrite">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
          onKeyPress={onKeyPress}
        />
        <button className="commentBtn" type="submit">
          게시
        </button>
      </div>
    </article>
  );
}

export default Feed;
