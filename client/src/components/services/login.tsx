import React, { ChangeEvent, useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // 로그인 처리 또는 다른 작업을 수행할 수 있습니다.
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handleChangePassword} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
