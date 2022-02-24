import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './Login.scss';

// 질문
// 1. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
// 2. 제어 컴포넌트랑 무슨 차이지?

function Login() {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    id: '',
    pw: '',
  });

  const handleInputValue = e => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
    // 계산된 속성명
    // 1) 함수와 구분하기 위해 리턴값을 ()로 감싼다.
    // 2) 프로퍼티는 []로 감싼다
    // 함수형 state
    // 기존 스테이트에 값을 더할 때 쓴다.
  };

  const sendLoginInfo = e => {
    e.preventDefault();
    fetch('http://10.58.6.223:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginValues.id,
        password: loginValues.pw,
      }),
    })
      .then(response => response.json())
      .then(result => goToMain(result));
    // .then(result => console.log('결과: ', result));
  };

  const goToMain = ({ token, message }) => {
    if (token) {
      // 200 - 통과
      localStorage.setItem('token', token);
      alert('환영합니다!');
      navigate('/main-kim');
    } else if (message === 'INVALID_USER') {
      // 400 (Bad Request) - id, 비번 안맞음
      alert('ID와 PW를 다시 확인 해주세요');
    }
  };

  return (
    <div className="login">
      <LoginForm
        loginValues={loginValues}
        onSubmit={sendLoginInfo}
        onChange={handleInputValue}
      />
    </div>
  );
}

export default Login;
