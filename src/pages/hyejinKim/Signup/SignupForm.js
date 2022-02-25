import './SignupForm.scss';

function SignupForm({ signupValues, onSubmit, onChange }) {
  const { id, pw } = signupValues;
  const isInputValid = id.includes('@') && id.length >= 6 && pw.length >= 6;

  return (
    <form className="signupForm" onSubmit={onSubmit}>
      <h1 id="logo" className="logo-font">
        Westagram
      </h1>
      <div className="signupWrapper">
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
          className={`signupBtn ${isInputValid ? 'signupBtnLive' : ''}`}
          disabled={!isInputValid}
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
