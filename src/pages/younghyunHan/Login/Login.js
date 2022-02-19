import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [state, setState] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleIdInput(event) {
    if (event.target.type === 'text') {
      setState(event.target.value);
    } else if (event.target.type === 'password') {
      setPasswordValue(event.target.value);
    }
  }

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-han');
  };

  return (
    <div className="login">
      <form className="loginBox">
        <h1>Westagram</h1>
        <input
          className="userId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          className="userPassword"
          type="password"
          placeholder="비밀번호"
          onChange={handleIdInput}
        />
        <button className="loginButton" onClick={goToMain}>
          로그인
        </button>
        <div className="findPassword">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
