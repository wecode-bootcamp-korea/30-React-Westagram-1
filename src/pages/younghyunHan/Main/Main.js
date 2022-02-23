import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/variables.scss';
import Article from './Article';
import { useState, useEffect } from 'react';

function Main() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younghyunHan/articleData.json')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main>
        <div className="feeds">
          {articles.map((content, index) => {
            return (
              <div key={index}>
                <Article
                  userName={content.userName}
                  feedImg={content.feedImg}
                  userMan={content.userMan}
                  profileLogo={content.profileLogo}
                />
              </div>
            );
          })}
        </div>
        <div className="mainRight">
          <div className="sideOne">
            <div className="profileLogoTwo">wecode</div>
            <div className="profileName">
              <div className="profileNameThree">wecode_bootcamp</div>
              <span className="profileNameFour">Wecode | 위코드</span>
            </div>
          </div>
          <div className="sideTwo">
            <div className="friendStory">
              <div className="story">스토리</div>
              <div className="viewAll">모두 보기</div>
            </div>
            <div className="friendStoryNumber">
              <div className="friendStoryOne">
                <img
                  alt="친구1"
                  className="friendOne"
                  src="https://media.istockphoto.com/photos/happy-to-travel-again-picture-id1305828428?b=1&k=20&m=1305828428&s=170667a&w=0&h=5SAGDam9ySPJRYW4BGoh9EkGboiQ76dLDGluh63hJhw="
                />
                <div>
                  <div className="friendNameOne">_yum_s</div>
                  <span className="uploadTimeOne">16분 전</span>
                </div>
              </div>
              <div className="friendStoryTwo">
                <img
                  alt="친구2"
                  className="friendTwo"
                  src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
                />
                <div>
                  <div className="friendNameTwo">drink_eat_drink</div>
                  <span className="uploadTimeTwo">3시간 전</span>
                </div>
              </div>
              <div className="friendStoryThree">
                <img
                  alt="친구3"
                  className="friendThree"
                  src="https://media.istockphoto.com/photos/woman-walking-on-a-path-by-the-sea-holding-a-friends-hand-picture-id1288078486?b=1&k=20&m=1288078486&s=170667a&w=0&h=_Hh6hjBsu4hxPhphKow6kk8YHaqtqYFCRRsadwnvRRY="
                />
                <div>
                  <div className="friendNameThree">hyukyc</div>
                  <span className="uploadTimeThree">20시간 전</span>
                </div>
              </div>
              <div className="friendStoryFour">
                <img
                  alt="친구4"
                  className="friendFour"
                  src="https://media.istockphoto.com/photos/couple-pushing-trolley-with-their-child-at-airport-picture-id1325212877?b=1&k=20&m=1325212877&s=170667a&w=0&h=lEey74nmiKVFn2Nc0vVUNUhKysbTbiJnyMn3uv013uM="
                />
                <div>
                  <div className="friendNameFour">jminkeek</div>
                  <span className="uploadTimeFour">10시간 전</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sideThree">
            <div className="recommendStory">
              <div className="recommend">회원님을 위한 추천</div>
              <div className="viewAll">모두 보기</div>
            </div>
            <div className="friendrecommendNumber">
              <div className="friendRecommendOne">
                <img
                  alt="친구5"
                  className="friendFive"
                  src="https://media.istockphoto.com/photos/portrait-of-two-happy-black-guys-embracing-while-posing-over-beige-picture-id1337920042?b=1&k=20&m=1337920042&s=170667a&w=0&h=PdoIL9qrqZ9ASgeO03PHopEPIQEbshWr9Aks2aeEoiQ="
                />
                <div>
                  <div className="friendNameFive">joaaaaaahye</div>
                  <span className="uploadTimeOne">_legend_a님 외 2명이...</span>
                </div>
              </div>
              <div className="friendRecommendTwo">
                <img
                  alt="친구6"
                  className="friendSix"
                  src="https://media.istockphoto.com/photos/two-black-woman-walking-through-a-grass-field-picture-id1300214955?b=1&k=20&m=1300214955&s=170667a&w=0&h=144AXl3crU7paS1BWMc-fgTDdWgL3gpWgBas8HP6Krg="
                />
                <div>
                  <div className="friendNameSix">rampart81</div>
                  <span className="uploadTimeTwo">
                    ringo.in.seoul님 외 12...
                  </span>
                </div>
              </div>
              <div className="friendRecommendThree">
                <img
                  alt="친구7"
                  className="friendSeven"
                  src="https://media.istockphoto.com/photos/multiracial-senior-women-having-fun-together-after-sport-workout-picture-id1312102723?b=1&k=20&m=1312102723&s=170667a&w=0&h=jPV0YWw2qL7NdJKKzyTWy3WpOlldMG3uOXPDthuymLI="
                />
                <div>
                  <div className="friendNameSeven">shawnjjoo</div>
                  <span className="uploadTimeThree">
                    jimmylee1220님 외 1...
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="companyInformation">
            <div className="companyInformationOne">
              Instagram 정보 · 지원 · 홍보 센터 · API ·
            </div>
            <div className="companyInformationTwo">
              채용 정보 · 개인정보처리방침 · 약관 ·
            </div>
            <div className="companyInformationThree">
              디렉토리 · 프로필 · 해시태그 · 언어
            </div>
            <div className="companyInformationFour">2022 INSTAGRAM</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
