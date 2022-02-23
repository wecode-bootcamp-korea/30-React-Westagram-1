import { useState, useEffect } from 'react';
import './Article.scss';
import Comment from './Comment';

function Article(props) {
  const [cmtContents, setCmtContents] = useState([]);
  const [cmtContLists, setCmtContLists] = useState([]);

  const onKeyPress = event => {
    let nextContents = event.target.value;
    if (event.code === 'Enter') {
      setCmtContents([...cmtContents, nextContents]);
      event.target.value = '';
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/younghyunHan/commentData.json')
      .then(res => res.json())
      .then(data => {
        setCmtContLists(data);
      });
  }, []);

  return (
    <div className="article">
      <article>
        <div className="feedTop">
          <div className="feedTopOne">
            <div className="profileLogo">
              <img className="profileLogoImg" src={props.profileLogo} />
            </div>
            <div className="profileName">
              <div className="profileNameOne">{props.userName}</div>
              <span className="profileNameTwo">Wecode - 위코드</span>
            </div>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <img alt="피드 이미지" className="feedImg" src={props.feedImg} />
        <div className="feedThree">
          <div>
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="fas fa-upload" />
          </div>
          <i className="far fa-bookmark" />
        </div>
        <div className="feedFour">
          <img alt="좋아요 누른 사람" className="man" src={props.userMan} />
          <span className="feedFourWord">seungyoun_iain</span>
          &nbsp;외&nbsp;
          <span className="feedFourWordTwo">4명</span>이 좋아합니다.
        </div>
        <div className="feedFive">
          <span className="feedFiveWord">wecode_bootcamp</span>"위코드는 단순
          교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개
          회사에서 오퍼를 받았습니다.
        </div>
        <div className="comment">
          {cmtContLists.map(content => {
            return (
              <Comment
                key={content.id}
                userName={content.userName}
                content={content.content}
              />
            );
          })}
          {cmtContents.map((content, index) => {
            return (
              <div key={index}>
                <Comment content={content} userName="test01" />
              </div>
            );
          })}
        </div>
        <span className="postTime">54분 전</span>
        <div className="commentSection">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="comment"
            onKeyPress={onKeyPress}
          />
          <button className="postButton">게시</button>
        </div>
      </article>
    </div>
  );
}

export default Article;
