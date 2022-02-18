import './Login.scss';

const Login = () => {
  return (
    <div className="westagramLogin">
      <section className="loginContainer">
        <div className="logo">Westagram</div>

        <div className="loginWrapper">
          <input
            className="login"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="password" type="password" placeholder="비밀번호" />
        </div>

        <button className="loginButton">로그인</button>

        {/* <Link to="/main">메인으로</Link> */}

        <footer>
          <a href="" className="text">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </section>
    </div>
  );
};

export default Login;
