import React, { useState } from 'react';

interface IProps {
  name: string,
}

const Form: React.FC<IProps> = () => {
  const [myState, setMyState] = useState({ name: 'jerry', age: 18 });

  function handleChnage(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setMyState(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <p>[Form Component] - {myState.name} - {myState.age}</p>
      <input type="text" name='name' value={myState.name} onChange={handleChnage}/>
      <input type="text" name='age' value={myState.age} onChange={handleChnage}/>
    </div>
  );
};

export default Form;
