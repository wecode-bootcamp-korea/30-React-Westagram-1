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

  const serverPath = 'http://172.21.51.88:8080';

  const loginHandler = ({ target }) => {
    if (target.type === 'text') {
      setLoginId(target.value);
    } else if (target.type === 'password') {
      setLoginPw(target.value);
    }
  };

  const sendMain = () => {
    fetch(`${serverPath}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: loginId,
        password: loginPw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('환영합니다아!');
          navigate('/main-park');
        } else {
          alert('입력을 확인해주세요!!');
        }
      });
  };

  return (
    <form className="login-form" onSubmit={sendMain}>
      <input
        type="text"
        className="login-id loginInput"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={loginHandler}
      />
      <input
        type="password"
        className="login-pw loginInput"
        placeholder="비밀번호"
        onChange={loginHandler}
      />
      <button
        type="button"
        className={`login-btn ${
          loginId.includes('@') && loginPw.length > 4 ? 'login-btnOn' : ''
        }`}
        onClick={sendMain}
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
