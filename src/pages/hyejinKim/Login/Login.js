import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 질문
// 1. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
// 2. 제어 컴포넌트랑 무슨 차이지?

function Login() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({ opacity: 0.5, cursor: 'default' });

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-kim');
  };

  const handleIdInput = e => {
    setIdValue(e.target.value);
    handleInput();
  };

  const handlePwInput = e => {
    setPwValue(e.target.value);
    handleInput();
  };

  const checkId = value => {
    return value.includes('@') ? true : false;
  };

  const checkPw = value => {
    return value.length >= 5 ? true : false;
  };

  const handleInput = () => {
    const isValidId = checkId(idValue); // id 검사
    const isValidPw = checkPw(pwValue); // pw 검사
    // 결과에 따라 버튼 live
    if (isValidId && isValidPw) {
      handleBtn(true);
    } else {
      handleBtn(false);
    }
  };

  const handleBtn = btnValid => {
    setDisabled(!btnValid); // 반대값
    setStyle({
      opacity: btnValid ? 1 : 0.5,
      cursor: btnValid ? 'pointer' : 'default',
    }); // true 1, false 0.5
    // if (window.event.code === "Enter") {
    //     success();
    // }
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
            type="submit"
            className="loginBtn"
            style={style}
            disabled={disabled}
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
