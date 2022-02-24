import '../Main/Main.scss';
import { MdFavorite } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import { BsUpload, BsBookmark, BsThreeDots } from 'react-icons/bs';

import Nav from '../../../components/Nav/Nav';
import CommentList from './CommentList';

const Main = () => {
  return (
    <div className="main-container">
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feed-titlebox">
              <div className="feed-titleboxleft">
                <div className="feed-titlelogo">wecode</div>
                <div className="feed-title">
                  <div className="title-name">wecode_bootcamp</div>
                  <div className="title-author">wecode - 위코드</div>
                </div>
              </div>

              <div className="feed-config">
                <span className="feed-icons">
                  <BsThreeDots />
                </span>
              </div>
            </div>
            <div className="feed-img">
              {/* <img src="./public/images/ggomi1.jpeg" alt=" " /> */}
            </div>
            <div className="feed-menus">
              <div className="feed-menus-left">
                <span className="feed-icons">
                  <MdFavorite />
                </span>
                <span className="feed-icons">
                  <FaRegComment />
                </span>
                <span className="feed-icons">
                  <BsUpload />
                </span>
              </div>
              <div className="feed-menus-right">
                <span className="feed-icons">
                  <BsBookmark />
                </span>
              </div>
              <div className="feed-likebox">
                <div className="liker-profile">Hi</div>
                <div className="like-counter">
                  <b>seungyoun_iain</b>님 외 <b>4</b>명이 좋아합니다.
                </div>
              </div>
            </div>
            {/* 댓글창 */}
            <div className="feed-box">
              <CommentList />
            </div>
          </article>
        </div>

        <div className="main-right">
          <div className="side-titlebox">
            <div className="side-titlelogo">wecode</div>
            <div className="side-title">
              <div className="title-name">wecode_bootcamp</div>
              <div className="title-author">wecode - 위코드</div>
            </div>
          </div>

          <div className="side-storiesbox">
            <div className="side-storiestitle">
              <span className="blur">스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="side-storieslist">
              <li className="side-story">
                <div className="story-profile" />
                {/* <img src="/images/ggomi1.jpeg" alt="profile" /> */}
                <div className="story-title">
                  <div className="story-name">ggomi1</div>
                  <div className="story-time">2시간 전</div>
                </div>
              </li>
              <li className="side-story">
                <div className="story-profile" />
                <div className="story-title">
                  <div className="story-name">ggomi2</div>
                  <div className="story-time">1시간 전</div>
                </div>
              </li>
              <li className="side-story">
                <div className="story-profile" />
                <div className="story-title">
                  <div className="story-name">ggomi3</div>
                  <div className="story-time">49분 전</div>
                </div>
              </li>
              <li className="side-story">
                <div className="story-profile" />
                <div className="story-title">
                  <div className="story-name">ggomi4</div>
                  <div className="story-time">24분 전</div>
                </div>
              </li>
              <li className="side-story">
                <div className="story-profile" />
                <div className="story-title">
                  <div className="story-name">ggomi5</div>
                  <div className="story-time">11분 전</div>
                </div>
              </li>
            </ul>
          </div>
          {/* 회원님을 위한 추천 */}
          <div className="side-recommandsbox">
            <div className="side-recommandstitle">
              <span className="blur">회원님을 위한 추천</span>{' '}
              <span>모두 보기</span>
            </div>
            <ul className="side-recommandslist">
              <li className="side-recommand">
                <div className="recommand-profile" />
                <div className="recommand-title">
                  <div className="recommand-name">ggomi6</div>
                  <div className="recommand-follower">
                    회원님을 팔로우합니다
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="side-recommand">
                <div className="recommand-profile" />
                <div className="recommand-title">
                  <div className="recommand-name">ggomi7</div>
                  <div className="recommand-follower">
                    회원님을 팔로우합니다
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="side-recommand">
                <div className="recommand-profile" />
                <div className="recommand-title">
                  <div className="recommand-name">ggomi8</div>
                  <div className="recommand-follower">
                    회원님을 팔로우합니다
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="side-recommand">
                <div className="recommand-profile" />
                <div className="recommand-title">
                  <div className="recommand-name">ggomi9</div>
                  <div className="recommand-follower">
                    회원님을 팔로우합니다
                  </div>
                </div>
                <button>팔로우</button>
              </li>
              <li className="side-recommand">
                <div className="recommand-profile" />
                <div className="recommand-title">
                  <div className="recommand-name">ggomi10</div>
                  <div className="recommand-follower">
                    회원님을 팔로우합니다
                  </div>
                </div>
                <button>팔로우</button>
              </li>
            </ul>
          </div>

          <div className="side-information">
            Westagram · 정보 · 지원 · 홍보센터 · API · 채용 · 정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
          </div>
          <div className="side-company">© 2022 Westagram</div>
        </div>
      </main>
    </div>
  );
};

export default Main;
