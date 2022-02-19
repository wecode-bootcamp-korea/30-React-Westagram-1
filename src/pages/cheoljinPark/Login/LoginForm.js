import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({ setLoginId, setLoginPw }) {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-park');
  };

  const handleIdInput = event => {
    setLoginId = event.target.value;
  };
  const handlePwInput = event => {
    setLoginPw = event.target.value;
  };

  return (
    <form className="login-form">
      <input
        type="text"
        className="login-id loginInput"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
      />
      <input
        type="password"
        className="login-pw loginInput"
        placeholder="비밀번호"
        onChange={handlePwInput}
      />
      <button className="login-btn" onClick={goToMain}>
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
