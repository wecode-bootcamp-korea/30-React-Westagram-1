import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({
  loginId,
  loginPw,
  loginCheck,
  setLoginId,
  setLoginPw,
  setLoginCheck,
}) {
  const navigate = useNavigate();

  const handleIdInput = event => {
    setLoginId(event.target.value);
  };
  const handlePwInput = event => {
    setLoginPw(event.target.value);
  };

  const loginInspector = e => {
    loginId.includes('@') && loginPw.length > 4
      ? setLoginCheck(true)
      : setLoginCheck(false);
  };

  const sendMain = e =>
    loginCheck ? navigate('/main-park') : alert('정신 차리세요');
  return (
    <form className="login-form">
      <input
        type="text"
        className="login-id loginInput"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleIdInput}
        onKeyUp={loginInspector}
      />
      <input
        type="password"
        className="login-pw loginInput"
        placeholder="비밀번호"
        onChange={handlePwInput}
        onKeyUp={loginInspector}
      />
      <button
        className="login-btn"
        onClick={sendMain}
        style={
          loginCheck
            ? { opacity: 1, cursor: 'pointer' }
            : { opacity: 0.5, cursor: 'not-allowed' }
        }
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
