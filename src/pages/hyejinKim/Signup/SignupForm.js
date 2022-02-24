import './SignupForm.scss';

function SignupForm({ signupValues, onSubmit, onChange }) {
  const { id, pw } = signupValues;
  const isIdInputValid = id.includes('@') && id.length >= 6;
  const isPwInputValid = pw.length >= 6;

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
          type="submit"
          className={`signupBtn ${
            isIdInputValid && isPwInputValid ? 'signupBtnLive' : ''
          }`}
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
