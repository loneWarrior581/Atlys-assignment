import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Card from '../common/Card'
import { Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleRegister = () => {
    // Handle register logic
    navigate('/home')
  }

  return (
    <Card cardClasses='border-2 border-neutral-600'>
      <h3 className='text-sm mb-2 text-center text-gray-600'>SIGN UP</h3>
      <h2 className='text-lg mb-4 text-center font-semibold'>
        Create an account to continue
      </h2>
      <form className='flex flex-col gap-4'>
        <div>
          <Input
            headPlaceholder='Email'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            headPlaceholder='Username'
            type='text'
            placeholder='Choose a preferred username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Input
            headPlaceholder='Password'
            rightIcon={
              <Eye
                width={20}
                strokeWidth={1}
                className='text-gray-secondary cursor-pointer'
              />
            }
            type='password'
            placeholder='Choose a strong password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button label='Continue' onClick={handleRegister} disabled={false} />
        <div className='text-sm'>
          <span className='text-gray-secondary'>Already have an account? </span>
          <span
            onClick={() => navigate('/login')}
            className='text-gray-primary cursor-pointer'
          >
            Login &rarr;
          </span>
        </div>
      </form>
    </Card>
  )
}

export default RegisterForm
