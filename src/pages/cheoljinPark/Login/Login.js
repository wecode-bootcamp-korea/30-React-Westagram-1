import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './Login.scss';

function Login() {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');

  return (
    <div className="login">
      <header className="logo">Westagram</header>
      <LoginForm
        loginId={loginId}
        loginPw={loginPw}
        setLoginId={setLoginId}
        setLoginPw={setLoginPw}
      />
      <footer className="search-passwd">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default Login;
