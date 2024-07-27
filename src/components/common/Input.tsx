import React from 'react'

interface InputProps {
  headPlaceholder: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input: React.FC<InputProps> = ({
  headPlaceholder,
  type,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className=''>
      <div className='text-sm text-gray-primary mb-2'>{headPlaceholder}</div>
      <div className='flex items-center p-2 rounded border border-gray-700 outline-1'>
        {leftIcon ?? leftIcon}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='text-base text-gray-300 bg-transparent w-full p-2 outline-none'
        />
        {rightIcon ?? rightIcon}
      </div>
    </div>
  )
}

export default Input
