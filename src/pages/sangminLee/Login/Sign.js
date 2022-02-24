import React, { useState } from 'react';

function Signup() {
  const [input_first_name, setFirst_name] = useState('');
  const [input_last_name, setLast_name] = useState('');
  const [input_email, setEmail] = useState('');
  const [input_phone, setPhone] = useState('');

  const first_name = event => {
    setFirst_name(event.target.value);
  };
  const last_name = event => {
    setLast_name(event.target.value);
  };
  const email = event => {
    setEmail(event.target.value);
  };
  const phone = event => {
    setPhone(event.target.value);
  };

  const signClick = event => {
    fetch('http://10.58.5.213:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        first_name: input_first_name,
        last_name: input_last_name,
        email: input_email,
        password: input_phone,
      }),
    })
      .then(res => res.json())
      .then(
        result => console.log(result)
        // if (result.message === 'SUCCESS')
        // {
        //   alert('회원가입 성공');
        // } else
        // {
        //   alert('양식에 맞춰주세요');

        // }
      );
  };

  return (
    <div className="westagramLogin">
      <input onchange={first_name}>성</input>
      <input onchange={last_name}>이름</input>
      <input onchange={email}>이메일</input>
      <input onchange={phone}>핸드폰</input>
      <button onClick={signClick}>완료</button>
    </div>
  );
}

export default Signup;
