import './LoginForm.scss';

function LoginForm({ values, onSubmit, onChange }) {
  // const isIdInputValid = values.id.includes('@') && values.id.length >= 6;
  // const isPwInputValid = values.pw.length >= 6;

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
          name="password"
          type="password"
          className="textField"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <button
          type="submit"
          className={`loginBtn ${
            values.id.includes('@') && values.pw.length >= 6
              ? 'loginBtnLive'
              : ''
          }`}
        >
          로그인
        </button>
      </div>
      <div className="links">
        <a href="./main-kim.html">비밀번호를 잊으셨나요?</a>
      </div>
    </form>
  );
}

export default LoginForm;
