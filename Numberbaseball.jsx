import React, { useState, useRef } from 'react';
const inputEl = React.useRef(null);
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseBall = () => {
  const [result, Setresult] = useState('');
  const [value, Setvalue] = useState('');
  const [answer, Setanswer] = useState(getNumbers());

  const onSubmitform = (e) => {
    e.preventDefault();
  };
  const onChangeInput = (e) => {
    Setvalue(e.target.value);
  };

  return (
    <>
      <div>숫자야구입니다.</div>
      <h1></h1>
      <form onSubmit={onSubmitform}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        ></input>
      </form>
    </>
  );
};

export default NumberBaseBall;
