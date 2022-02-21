import './Feed.scss';
import CommentList from './CommentList';

function Feed({
  userName,
  address,
  firstLikeUser,
  likeCount,
  content,
  imgURL,
}) {
  // const onKeyPress = e => {
  //   let nextContent = e.target.value; // 지금 내가 input에 친 댓글 내용 저장
  //   if (e.code === 'Enter') {
  //     setCmtContents([...cmtContents, nextContent]);
  //     e.target.value = ''; // 빈 문자열로 input 초기화
  //   }
  // };

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
        <CommentList />
        <p className="postTime">42분 전</p>
      </div>
      <div className="commentWrite">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
          // onKeyPress={onKeyPress}
        />
        <button className="commentBtn" type="submit">
          게시
        </button>
      </div>
    </article>
  );
}

export default Feed;
