import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-park');
  };

  return (
    <div className="Login">
      <header className="logo">Westagram</header>
      <section className="login-box">
        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input type="password" placeholder="비밀번호" />
        <button className="login-btn" onClick={goToMain}>
          로그인
        </button>
      </section>
      <footer className="search-passwd">
        <a href="#">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
}

export default Login;
