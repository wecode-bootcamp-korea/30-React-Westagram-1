import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// 질문
// 1. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
// 2. 제어 컴포넌트랑 무슨 차이지?

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    // http://10.58.6.223:8000/users/login
    fetch('https://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        // name: '김혜진',
        // phone_number: '010-5003-3185',
      }),
    })
      .then(response => response.json())
      // .then(result => goToMain(result));
      .then(result => console.log('결과: ', result));
  };

  const goToMain = ({ token, message }) => {
    if (token) {
      // 200 - 통과
      alert('환영합니다!');
      navigate('/main-kim');
    } else if (message === 'INVALID_USER') {
      // 400 (Bad Request) - id, 비번 안맞음
      alert('ID와 PW를 다시 확인 해주세요');
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={sendLoginInfo}>
        <h1 id="logo" className="logo-font">
          Westagram
        </h1>
        <div className="loginWrapper">
          <input
            id="id"
            name="id"
            type="text"
            className="textField"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            id="password"
            name="password"
            type="password"
            className="textField"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button
            type="submit"
            className={`loginBtn ${
              id.indexOf('@') > -1 && pw.length >= 5 ? 'loginBtnLive' : ''
            }`}
          >
            로그인
          </button>
        </div>
        <div className="links">
          <a href="./main-kim.html">비밀번호를 잊으셨나요?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
