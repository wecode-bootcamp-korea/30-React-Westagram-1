import React, { useEffect } from 'react';
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

  useEffect(() => {
    fetch(`${serverPath}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: 'hohoho@gmail.com',
        password: '1235^3453',
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과: ', result));
  }, []);

  const handleIdInput = event => {
    setLoginId(event.target.value);
  };
  const handlePwInput = event => {
    setLoginPw(event.target.value);
  };

  const loginInspector = () =>
    loginId.includes('@') && loginPw.length > 4
      ? setLoginCheck(true)
      : setLoginCheck(false);

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
          navigate('/main-stella');
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
        type="button"
        className={`login-btn ${loginCheck ? 'login-btnLive' : ''}`}
        onClick={sendMain}
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
