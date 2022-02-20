import './Login.scss';
import React, { useState } from 'react';
import { MdSettingsInputSvideo } from 'react-icons/md';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleIdInput = event => {
    setInputId(event.target.value);
  };
  const handlePwInput = event => {
    setInputPw(event.target.value);
  };

  return (
    <div className="westagramLogin">
      <section className="loginContainer">
        <div className="logo">Westagram</div>

        <div className="loginWrapper">
          <input
            className="login"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            className="password"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
        </div>

        <button className="loginButton">로그인</button>

        {/* <Link to="/main">메인으로</Link> */}

        <footer>
          <a href="" className="text">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </section>
    </div>
  );
}

export default Login;
