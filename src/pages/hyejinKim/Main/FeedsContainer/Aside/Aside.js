import Footer from './Footer';
import './Aside.scss';

function Aside() {
  return (
    <div className="aside">
      <div className="profile">
        <img alt="profileIcon" src="/images/hyejinKim/profile_icon.jpg" />
        <div className="profile-info">
          <h3 className="profile-id">wecode_bootcamp</h3>
          <h3 className="profile-bottom">WeCode | 위코드</h3>
        </div>
      </div>
      <div className="sideBox storyBox">
        <div className="sideMenu">
          <h4 className="sideMenu-title">스토리</h4>
          <h4 className="sideMenu-showAll">모두 보기</h4>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile01.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">_yums_s</h3>
            <h3 className="profile-bottom">16분 전</h3>
          </div>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile03.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">drink_eat_drink</h3>
            <h3 className="profile-bottom">3시간 전</h3>
          </div>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile02.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">hyukyc</h3>
            <h3 className="profile-bottom">20시간 전</h3>
          </div>
        </div>
      </div>
      <div className="sideBox recommend">
        <div className="sideMenu">
          <h4 className="sideMenu-title">회원님을 위한 추천</h4>
          <h4 className="sideMenu-showAll">모두 보기</h4>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile04.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">joaaaaahye</h3>
            <h3 className="profile-bottom">_legend_a님 외 2명이 좋아합니다</h3>
          </div>
          <div className="profile-follow">
            <h3>팔로우</h3>
          </div>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile05.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">rampart81</h3>
            <h3 className="profile-bottom">
              ringo_in_seoul님 외 12명이 좋아합니다
            </h3>
          </div>
          <div className="profile-follow">
            <h3>팔로우</h3>
          </div>
        </div>
        <div className="profile">
          <img
            alt="profileImg"
            src="/images/hyejinKim/profiles/profile06.png"
          />
          <div className="profile-info">
            <h3 className="profile-id">shawnjioo</h3>
            <h3 className="profile-bottom">
              jimmylee220님 외 1명이 좋아합니다
            </h3>
          </div>
          <div className="profile-follow">
            <h3>팔로우</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aside;
