// src/pages/Register.tsx
import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

const Register: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <RegisterForm />
    </div>
  );
};

export default Register;
