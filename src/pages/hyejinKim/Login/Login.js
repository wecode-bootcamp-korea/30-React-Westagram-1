import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 질문
// 1. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
// 2. 제어 컴포넌트랑 무슨 차이지?

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-kim');
  };

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  return (
    <div className="login">
      <form className="loginForm">
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
              idValue.indexOf('@') > -1 && pwValue.length >= 5
                ? 'loginBtnLive'
                : ''
            }`}
            onClick={goToMain}
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
