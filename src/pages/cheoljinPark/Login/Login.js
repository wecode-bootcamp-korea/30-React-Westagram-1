import React, { useState } from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

function Login() {
  let [loginId, setLoginId] = useState('');
  let [loginPw, setLoginPw] = useState('');

  return (
    <div className="Login">
      <header className="logo">Westagram</header>
      <LoginForm loginId={setLoginId} loginPw={setLoginPw} />
      <footer className="search-passwd">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default Login;
