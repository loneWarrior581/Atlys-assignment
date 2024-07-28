import React from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className='bg-blue-primary text-white text-base py-2 px-4 rounded hover:bg-blue-secondary'
    >
      {label}
    </button>
  )
}

export default Button
