import React, { useState } from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

function Login() {
  let [loginId, setLoginId] = useState('');
  let [loginPw, setLoginPw] = useState('');
  let [loginCheck, setLoginCheck] = useState(false);

  return (
    <div className="Login">
      <header className="logo">Westagram</header>
      <LoginForm
        loginId={loginId}
        loginPw={loginPw}
        loginCheck={loginCheck}
        setLoginId={setLoginId}
        setLoginPw={setLoginPw}
        setLoginCheck={setLoginCheck}
      />
      <footer className="search-passwd">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default Login;
