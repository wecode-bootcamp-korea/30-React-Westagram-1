import './Login.scss';
import React, { useState } from 'react';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isActive, setIsActive] = useState(false); //초기값 false
  //input값이 변화가 있을 때마다 value값을 변경해서 useState
  const handleIdInput = event => {
    setInputId(event.target.value);
  };
  const handlePwInput = event => {
    setInputPw(event.target.value);
  };

  const isPassedLogin = () => {
    return inputId.includes('@') && inputPw.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };
  const btnClick = event => {
    fetch('http://10.58.5.213:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(res => res.json())
      .then(
        result => console.log(result)
        // if (result.message === 'SUCCESS')
        // {
        //   alert('회원가입 성공');
        // } else
        // {
        //   alert('양식에 맞춰주세요');

        // }
      );
  };

  return (
    <div className="westagramLogin">
      <section className="loginContainer">
        <div className="logo">Westagram</div>

        <div className="loginWrapper">
          <input
            className="inputId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={isPassedLogin}
          />
          <input
            className="inputPw"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={isPassedLogin}
          />
        </div>

        <button
          onClick={btnClick}
          className={isActive ? 'activeBtn' : 'unactiveBtn'}
        >
          로그인
        </button>

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
