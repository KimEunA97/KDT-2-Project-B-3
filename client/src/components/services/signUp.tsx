import React, { ChangeEvent, useState } from 'react';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    // 회원가입 처리 또는 다른 작업을 수행할 수 있습니다.
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handleChangePassword} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleChangeName} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={handleChangePhoneNumber} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
