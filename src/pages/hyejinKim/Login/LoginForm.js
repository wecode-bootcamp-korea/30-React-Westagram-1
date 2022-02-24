import { Link } from 'react-router-dom';
import './LoginForm.scss';

function LoginForm({ loginValues, onSubmit, onChange }) {
  const { id, pw } = loginValues; // input의 name과 객체 state 프로퍼티 이름은 동일하게 할것
  const isInputValid = id.includes('@') && id.length >= 6 && pw.length >= 6;

  return (
    <form className="loginForm" onSubmit={onSubmit}>
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
          onChange={onChange}
        />
        <input
          id="password"
          name="pw"
          type="password"
          className="textField"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <button
          type="submit"
          className={`loginBtn ${isInputValid ? 'loginBtnLive' : ''}`}
          disabled={!isInputValid}
        >
          로그인
        </button>
      </div>
      <div className="links">
        <Link to="/main-kim">비밀번호를 잊으셨나요?</Link>
      </div>
    </form>
  );
}

export default LoginForm;
