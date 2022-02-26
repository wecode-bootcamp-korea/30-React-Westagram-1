import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

function Login() {
  // const [idState, setIdState] = useState('');
  // const [passwordValue, setPasswordValue] = useState('');
  // const [disabled, setDisabled] = useState(true);
  // const [style, setStyle] = useState({ opacity: 0.5, cursor: 'default' });

  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    id: '',
    password: '',
  });

  const handleInputValue = e => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  // const { type, value } = event.target;

  // function handleLogin(event) {
  //   if (type === 'text') {
  //     setIdState(value);
  //   } else if (type === 'password') {
  //     setPasswordValue(value);
  //   }
  //   handleButton();
  // }

  // const checkId = idValue => {
  //   return idValue.includes('@') ? true : false;
  // };

  // const checkPw = pwValue => {
  //   return pwValue.length >= 5 ? true : false;
  // };

  // const handleButton = () => {
  //   const isValidId = checkId(state);
  //   const isValidPw = checkPw(passwordValue);

  //   if (isValidId && isValidPw) {
  //     buttonColor(true);
  //   } else {
  //     buttonColor(false);
  //   }
  // };

  // const buttonColor = btnValid => {
  //   setDisabled(!btnValid);
  //   setStyle({
  //     opacity: btnValid ? 1 : 0.5,
  //     cursor: btnValid ? 'pointer' : 'default',
  //   });
  // };

  const goToMain = () => {
    fetch('http://10.58.4.238:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: loginValues.id,
        password: loginValues.password,
        // name: '래영',
        // phone_number: '010-1111-111',
      }),
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        if (result.token) {
          //localStorage.setItem('token', result.token);
          alert('환영합니다!');
          navigate('/main-han');
        } else if (result.message === 'INVALID_USER') {
          alert('ID와 PW를 확인해주세요.');
        }
      });
  };

  const isInputValid =
    loginValues.id.includes('@') &&
    loginValues.id.length >= 6 &&
    loginValues.password.length >= 6;
  // console.log(loginValues.id.includes('@') && loginValues.id.length >= 6);
  // console.log(loginValues.password.length >= 6);
  // console.log(isInputValid);

  return (
    <div className="login">
      <form className="loginBox">
        <h1>Westagram</h1>
        <input
          id="id"
          name="id"
          className="userId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInputValue}
        />
        <input
          id="password"
          name="password"
          className="userPassword"
          type="password"
          placeholder="비밀번호"
          onChange={handleInputValue}
        />
        <button
          type="button"
          className={`loginButton ${isInputValid ? 'loginBtnLive' : ''}`}
          onClick={goToMain}
          disabled={!isInputValid}
          //style={style}
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
