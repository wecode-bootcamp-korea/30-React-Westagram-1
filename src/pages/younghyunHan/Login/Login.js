import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function Login() {
  const [state, setState] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({ opacity: 0.5, cursor: 'default' });

  const navigate = useNavigate();

  function handleIdInput(event) {
    if (event.target.type === 'text') {
      setState(event.target.value);
    } else if (event.target.type === 'password') {
      setPasswordValue(event.target.value);
    }
    handleButton();
  }

  const checkId = idValue => {
    return idValue.includes('@') ? true : false;
  };

  const checkPw = pwValue => {
    return pwValue.length >= 5 ? true : false;
  };

  const handleButton = () => {
    const isValidId = checkId(state);
    const isValidPw = checkPw(passwordValue);

    if (isValidId && isValidPw) {
      buttonColor(true);
    } else {
      buttonColor(false);
    }
  };

  const buttonColor = btnValid => {
    setDisabled(!btnValid);
    setStyle({
      opacity: btnValid ? 1 : 0.5,
      cursor: btnValid ? 'pointer' : 'default',
    });
  };

  const goToMain = () => {
    fetch('http://10.58.4.238:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: state,
        password: passwordValue,
        // name: '래영',
        // phone_number: '010-1111-111',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.token) {
          alert('환영합니다!');
          navigate('/main-han');
        } else if (result.message === 'INVALID_USER') {
          alert('ID와 PW를 확인해주세요.');
        }
      });
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
        <button
          type="button"
          className="loginButton"
          onClick={goToMain}
          disabled={disabled}
          style={style}
        >
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
