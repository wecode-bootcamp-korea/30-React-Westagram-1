import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  // 질문
  // 1. () 안에 초기값 안 적으면?
  // 2. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
  // 3. 제어 컴포넌트랑 무슨 차이지?

  const handleIdInput = e => {
    setIdValue(e.target.value);
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
  };

  const checkId = value => {
    if (value.includes('@')) {
      return true;
    } else {
      return false;
    }
  };

  const checkPw = value => {
    if (value.length >= 5) {
      return true;
    } else {
      return false;
    }
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
            type="password"
            className="textField"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button
            type="button"
            className="loginBtn"
            disabled
            onClick={goToMain}
          >
            로그인
          </button>
        </div>
        <div className="links">
          <a href="./main.html">비밀번호를 잊으셨나요?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
