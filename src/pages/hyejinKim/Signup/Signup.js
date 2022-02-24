import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import './Signup.scss';

// 질문
// 1. 현재 state를 가져오는 경우는 언제인지? 콜백함수가 인자로 들어오면??
// 2. 제어 컴포넌트랑 무슨 차이지?

function Signup() {
  const navigate = useNavigate();
  const [signupValues, setSignupValues] = useState({
    id: '',
    pw: '',
  });

  const handleInputValue = e => {
    const { name, value } = e.target;
    setSignupValues({ ...signupValues, [name]: value });
  };

  const sendSignupInfo = e => {
    e.preventDefault();
    fetch('http://10.58.6.223:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: signupValues.id,
        password: signupValues.pw,
      }),
    })
      .then(response => response.json())
      .then(result => goToMain(result));
    // .then(result => console.log('결과: ', result));
  };

  const goToMain = ({ token, message }) => {
    if (token) {
      // 200 - 통과
      localStorage.setItem('token', token);
      alert('환영합니다!');
      navigate('/main-kim');
    } else if (message === 'INVALID_USER') {
      // 400 (Bad Request) - id, 비번 안맞음
      alert('ID와 PW를 다시 확인 해주세요');
    }
  };

  return (
    <div className="signup">
      <SignupForm
        signupValues={signupValues}
        onSubmit={sendSignupInfo}
        onChange={handleInputValue}
      />
    </div>
  );
}

export default Signup;
