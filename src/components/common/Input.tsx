import React from 'react'

interface InputProps {
  headPlaceholder: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  validatorFns?: (() => void)[]
  disabled?: boolean
  infoText?: string
  prefix?: string
  suffix?: string
}

const Input: React.FC<InputProps> = ({
  headPlaceholder,
  type,
  placeholder,
  value,
  onChange,
  leftIcon,
  rightIcon,
  disabled = false,
  infoText,
}) => {
  return (
    <>
      <div className='flex justify-between text-sm text-gray-primary mb-2'>
        <span>{headPlaceholder}</span>
        {infoText && <span>{infoText}</span>}
      </div>
      <div className='flex items-center p-2 rounded border border-gray-700 outline-1'>
        {leftIcon ?? leftIcon}
        <input
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className='text-base text-gray-300 bg-transparent w-full p-2 outline-none'
        />
        {rightIcon ?? rightIcon}
      </div>
    </>
  )
}

export default Input
