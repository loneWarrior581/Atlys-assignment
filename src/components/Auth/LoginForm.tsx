import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = () => {
    // Handle login logic
  }

  return (
    <Card cardClasses='border-2 bg-gradient-to-r from-gray-border-from to-gray-border-to rounded-lg'>
      <h3 className='text-sm mb-2 text-center text-gray-600'>WELCOME BACK</h3>
      <h2 className='text-lg mb-4 text-center font-semibold'>
        Log into your account
      </h2>
      <form className='flex flex-col gap-4'>
        <div>
          <Input
            headPlaceholder='Email or username'
            type='email'
            placeholder='Enter your email or username'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            headPlaceholder='Password'
            rightIcon={
              <Eye width={20} strokeWidth={1} className='text-gray-secondary' />
            }
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button label='Login now' onClick={handleLogin} />
        <div className='text-sm'>
          <span className='text-gray-secondary'>Not registered yet? </span>
          <span
            onClick={() => navigate('/signup')}
            className='text-gray-primary cursor-pointer'
          >
            Register &rarr;
          </span>
        </div>
      </form>
    </Card>
  )
}

export default LoginForm
