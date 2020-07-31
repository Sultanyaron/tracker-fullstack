import { useState } from 'react';

const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    email,
    password,
    setEmail,
    setPassword,
  };
};

export default useSignUp;
