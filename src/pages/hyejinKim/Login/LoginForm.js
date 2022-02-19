import './LoginForm.scss';
import { useNavigate } from 'react-router-dom';

function LoginForm({ handleIdInput, handlePwInput }) {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h1 id="logo" className="logo-font">
        Westagram
      </h1>
      <div className="loginWrapper">
        <input
          id="id"
          name="id"
          type="text"
          className="textField"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          id="password"
          type="password"
          className="textField"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
        <button
          type="submit"
          className="loginBtn"
          style={style}
          disabled={disabled}
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
      <div className="links">
        <a href="./main.html">비밀번호를 잊으셨나요?</a>
      </div>
    </form>
  );
}

export default LoginForm;
