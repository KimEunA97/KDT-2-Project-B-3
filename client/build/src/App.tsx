import React, { useState, FormEvent } from 'react';

export default function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname }),
      });
      if (response.ok) {
        // 성공적으로 데이터가 전송되었을 때
        console.log('전송 성공');
      } else {
        // 전송이 실패되었을 때
        console.error('데이터 전송 실패');
      }
    } catch (error) {
      // 에외 처리
      console.error('전송 중 에러 발생.', error);
    }
  };

  return (
    <>
      <h1>Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="성을 입력해주세요"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        ></input>
        <input
          placeholder="이름을 입력해주세요"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        ></input>
        <button type="submit" placeholder="전송">
          전송
        </button>
      </form>
    </>
  );
}
